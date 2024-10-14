import { login } from "@/app/login/action";

export default function LoginForm() {
  return (
    <form className="loginForm">
      <label htmlFor="email">E-Posta </label>
      <input id="email" name="email" type="email" placeholder="usermail@gmail.com" />
      <label htmlFor="password">Şifre </label>
      <input id="password" name="password" type="password" placeholder="******" />
      <button className="loginBtn" formAction={login}>Giriş Yap</button>
    </form>
  )
}