import LoginForm from '@/components/login-form'
import Apple from '@/svgs/apple'
import Google from '@/svgs/google'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="loginSection">
      <h1>Medium Clone</h1>
      <LoginForm />
      <div className="or">
        <hr />
        <p>Ya da</p>
        <hr />
      </div>
      <div className="loginOptionBtns">
        <button className="google">
          <Google />
          <p>Google ile giriş yap</p>
        </button>
        <button className="apple">
          <Apple />
          <p>Apple ile giriş yap</p>
        </button>
      </div>
      <div className="accountCreation">
        <p>Hesabın yok mu?</p>
        <Link href={"/sign-up"}>Kayıt ol</Link>
      </div>
    </div>
  )
}