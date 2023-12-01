import * as yup from 'yup';

const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(100).required(),
})

export default userSchema;