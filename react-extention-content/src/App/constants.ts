import * as Yup from 'yup';

export const getValidationSchema = () =>
  Yup.object().shape({
    code: Yup.string()
      .trim()
      .required(),
  });
