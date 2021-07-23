import * as yup from 'yup'

const formSchema = yup.object().shape({
     Name: yup
    .string()
    .trim()
    .required('Username is required')
    .min(2, 'name must be  at least 2 characters'),

})
export default formSchema;