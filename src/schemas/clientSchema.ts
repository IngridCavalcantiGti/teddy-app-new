import * as yup from 'yup';

export const clientSchema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  salary: yup.string().required('O salário é obrigatório'),
  companyValuation: yup
    .string()
    .required('O valor da empresa é obrigatório'),
});
