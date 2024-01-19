import { FormEvent, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../providers/auth';

export default function SignIn(){
    const navigate = useNavigate()
  const {signIn,signed} = useAuth()

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(emailInputRef.current && passwordInputRef.current){
      console.log(signed)
      const email = emailInputRef.current?.value;
      const password = passwordInputRef.current?.value;
      signIn(email, password)
      console.log(signed)

      if(signed)
        navigate('/')
    }
  }
    return(
        <div>
            <div>
      Login
      <br />
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="email">Email</label>
        <input ref={emailInputRef} type="text" name="email" id="email" />
        <br />
        <label htmlFor="senha">Senha</label>
        <input ref={passwordInputRef} type="password" name="senha" id="senha" />
        <button type='submit'>Login</button>
      </form>
    </div>
    <Link to={`/sign-up`}>sign-up</Link>
        </div>
    )
}