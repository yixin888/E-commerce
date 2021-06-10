import React, { useState } from 'react';
import './Login.css';
import { Link , useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

        //  一些 fancy firebase 后端数据库 login
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // 成功 create a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

        // do some fancy firebase 后端数据库 register
    }


    return (
        <div className='login'>
            <Link to='/'>
              <img 
                className="login__logo"
                src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1908075378,3742917843&fm=26&gp=0.jpg'
            />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick= {signIn}
                    className= 'login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Lightness store's Conditions of Use & Sale. 
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                </p>

                <button onClick={register}
                className='login__registerButton'>Create your account</button>
            </div>
        </div>
    )
}

export default Login

