import { NextFunction, Request, Response } from 'express';
import { AnyObjectSchema, object, string } from 'yup';
import { ResponseHandler } from './ResponseHandler';

/**
 * Validate that a resource being POSTed or PUT
 * has a valid shape, else return 400 Bad Request
 * @param {*} resourceSchema is a yup schema
 */
export const RequestValidator =
  (resourceSchema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const value = await resourceSchema.validateSync(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.body.validatedData = value;
      next();
    } catch (error: any) {
      error.message = error.errors[0];
      return ResponseHandler(req, res, null, error);
    }
  };

/**
 *
 * Validate that a query string and throw error if it is not valid
 * @param resourceSchema
 * @returns
 */
export const RequestQueryValidator =
  (resourceSchema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    // throws an error if not valid
    try {
      const value = await resourceSchema.validateSync(req.query, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.body.validatedQueryData = value;
      next();
    } catch (error: any) {
      return ResponseHandler(req, res, null, error);
    }
  };

/**
 * Validates query params for sort
 * @param names
 * @returns
 */
export const RequestSortValidator =
  (names: any[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resourceSchema = object({
        sortBy: string().oneOf(names).optional(),
        sortType: string().oneOf(['asc', 'desc']).optional(),
      });

      const value = resourceSchema.validateSync(req.query, {
        abortEarly: false,
        stripUnknown: true,
      });

      if (value.sortType === undefined) {
        value.sortType = 'asc';
      }

      req.body.validatedSortData = value;
      next();
    } catch (error: any) {
      return ResponseHandler(req, res, null, error);
    }
  };
