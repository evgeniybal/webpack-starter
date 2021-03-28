import * as yup from 'yup';

const schema =  yup.object().shape({
  firstName: yup.string().max(10, 'max 10').required(),
  lastName: yup
    .string()
    .email(),
    
    
  email: yup.string().email()
});

export default schema;