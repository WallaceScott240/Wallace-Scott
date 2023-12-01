import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const userSchema = yup.object().shape({
  name: yup.string().trim().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required('Name is required'),
  email: yup.string().trim().email('Enter a valid email address.').required('Email is required'),
  phone: yup.string().matches(/^((\+[1-9]{1,4}?)|(\([0-9]{2,3}\)?)|([0-9]{2,4})?)*?[0-9]{3,4}?[0-9]{3,4}$/, 'phone number is invalid').length(10).required('Phone is required'),
});

function YupForm() {
 
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data); 
  };

  const FormStyle = {
    margin: 50,
    padding: 15,
    borderRadius: 7,
    backgroundColor: '#f2f2f2',
  };

  return (
    <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input type="text" placeholder="Name" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
        {/* Validation */}
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <input type="email" placeholder="Email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}  />
    
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="mb-3">
        <input type="text" placeholder="Phone" {...register('phone')} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} />
    
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <input type="submit" value="Submit" />
    </form>
    
  );
}

export default YupForm;


