import React from 'react'

import SignIn from '../../components/sign-in/sign-in'
import Register from '../../components/register/register'

import './sign-in-register.scss'

const SignInRegisterPage = () => (
    <div className='sign-in-register'>
        <SignIn />
        <Register />

    </div>
)

export default SignInRegisterPage
