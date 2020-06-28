
import React, { useState} from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-btn/custom-btn'
import { useForm } from 'react-hook-form'
import './register.scss'
import { asyncRegister } from '../../redux/actions/actions'

const Register = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        //preventDefault()
        // console.log('the data is', data)
        asyncRegister(data)
    }

        return (
            <div className='register'>
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
                    reference={register({ required: "Password must be at least 4 characters", minLength: 4 })}
                        name='password'
                        type='password'
                        label='password'
                        required
                    />
                    {errors.password && errors.password.type === 'minLength' && <p className="err-msg">Password must be at least 4 characters</p>}
                    <CustomButton type='submit' inverse="true" >Register</CustomButton>
                </form>
            </div>
        )
}

export default Register
