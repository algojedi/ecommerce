
import React, { useState} from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-btn/custom-btn'
import { useForm } from 'react-hook-form'
import './register.scss'

const Register = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        //preventDefault()
        console.log('the data is', data)
    }

  

        return (
            <div className='sign-in'>
                <h1>Create New Account</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput reference={register}
                        name='fname'
                        type='text'
                        label='first name'
                        required
                    />
                    <FormInput reference={register}
                        name='lname'
                        type='text'
                        label='last name'
                        required
                    />
                    <FormInput reference={register}
                        name='email'
                        type='email'
                        label='email'
                        required
                    />
                    <FormInput
                    reference={register({ required: "Password must be at least 8 characters", minLength: 8 })}
                        name='password'
                        type='password'
                        label='password'
                        required
                    />
                    {errors.password && errors.password.type === 'minLength' && <p>this is req'd</p>}
                    <CustomButton type='submit' variation='inverse'>Register</CustomButton>
                </form>
            </div>
        )
}

export default Register
