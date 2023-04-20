import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='main'>
            <div>
                <h2>Login</h2>
                <Link to={'/'} className='button'>
                    <button>Go back</button>
                </Link>
            </div>
        </div>
    )
}

export default Login