import { object, ref, string } from 'yup';

export const CreateUserRequest = object({
  firstName: string().required('First name is required.'),
  lastName: string().required('Last name is required.'),
  email: string()
    .required('Email is required.')
    .email('Please enter a valid email.'),
  password: string().required('Password is required.'),
  confirm_password: string()
    .required('Confirmation password is required.')
    .oneOf(
      [ref('password')],
      'Confirmation password and password must be same.'
    ),
});
