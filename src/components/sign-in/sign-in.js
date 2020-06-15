import React, { useState} from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-btn/custom-btn'
import { useForm } from 'react-hook-form'
import './sign-in.scss'
import useAsync from '../../hooks/use-async';

const SignIn = () => {
    
// An async function for testing our hook.
// Will be successful 50% of the time.
const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve('12345') // user id 
        : reject('Oh no there was an error');
    }, 2000);
  });
};

    const {register, handleSubmit, errors} = useForm();
    // const [ email, setEmail ] = useState('')
    // const [ password, setPassword ] = useState('')
        const { execute, pending, value, error } = useAsync(myFunction, false)
    

    const onSubmit = data => {
        //preventDefault()
        console.log('the data is', data) // data.email and data.password
        // setEmail('')
        // setPassword('')
    }

        return (
            <div className='sign-in'>
                <h1>Sign In</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput reference={register}
                        name='email'
                        type='email'
                        // handleChange={e => setEmail(e.target.value)}
                        // value={email}
                        label='email'
                        required
                    />
                    <FormInput
                    reference={register({ required: "Password must be at least 8 characters", minLength: 8 })}
                        name='password'
                        type='password'
                        // value={password}
                        // handleChange={e => setPassword(e.target.value)}
                        label='password'
                        required
                    />
                    {errors.password && errors.password.type === 'minLength' && <p>this is req'd</p>}
                    <CustomButton type='submit'> Sign in </CustomButton>
                </form>
            </div>
        )
}

export default SignIn
