import { useFormik } from 'formik';
import * as Yup from 'yup';

import { loginUser, signUpUser } from '../redux/authReducer';
import { useAppDispatch } from '../types/types';
import { SignUpSchema } from '../constants/constants';

export const useSignUpLoginFormik = (schema: string) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues:
      schema === SignUpSchema
        ? {
            name: '',
            email: '',
            password: '',
          }
        : {
            email: '',
            password: '',
          },
    validationSchema:
      schema === SignUpSchema
        ? Yup.object({
            name: Yup.string()
              .required('name is required')
              .min(5, 'min length is 5 letters'),
            email: Yup.string().required('email is required').email('invalid email'),
            password: Yup.string()
              .required('password is required')
              .min(6, 'min length is 6 letters'),
          })
        : Yup.object({
            email: Yup.string().required('email is required').email('invalid email'),
            password: Yup.string()
              .required('password is required')
              .min(6, 'min length is 6 letters'),
          }),
    onSubmit: (values) => {
      schema === SignUpSchema
        ? dispatch(
            signUpUser({
              // @ts-ignore
              name: values.name,
              email: values.email,
              password: values.password,
            })
          )
        : dispatch(loginUser({ email: values.email, password: values.password }));
      formik.resetForm();
    },
  });

  return formik;
};
