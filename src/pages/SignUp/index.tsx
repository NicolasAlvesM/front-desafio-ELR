import { FormEvent, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../providers/auth';
import { authService } from '../../services/authService';

export default function SignUp(){
    const navigate = useNavigate()
  const {signed, signIn} = useAuth()

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(emailInputRef.current && nameInputRef.current && passwordInputRef.current){
      const email = emailInputRef.current?.value;
      const password = passwordInputRef.current?.value;
      const name = nameInputRef.current?.value;
      await authService.signUp(name, email, password)
      console.log(email,password,name)
      signIn(email, password);

      if(signed)
        navigate('sign-up')
    }
  }
    return(
        <div>
            <div>
      Login
      <br />
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="name">Nome</label>
        <input ref={nameInputRef} type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email</label>
        <input ref={emailInputRef} type="text" name="email" id="email" />
        <br />
        <label htmlFor="senha">Senha</label>
        <input ref={passwordInputRef} type="password" name="senha" id="senha" />
        <button type='submit'>Login</button>
      </form>
    </div>
    <Link to={`/sign-in`}>sign-in</Link>
        </div>
    )
}