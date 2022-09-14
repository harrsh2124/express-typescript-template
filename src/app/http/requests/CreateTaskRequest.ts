import { object, string } from 'yup';

export const CreateTaskRequest = object({
  title: string().required('Task title is required.'),
});
