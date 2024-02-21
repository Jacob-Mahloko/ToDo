import * as yup from 'yup';

 export const loginValidation=yup.object().shape({
     username:yup.string().min(3).required,
     password:yup.string.min(8).max(20).required
 })

// export const signupValidation=yup.object().shape({
//     username:yup.string().min(3).required,
//     email:yup.string().email().required,
//     password:yup.string().min(8).max(20).required
// })

// export const CreateTaskValidation=yup.object().shape({

// })

