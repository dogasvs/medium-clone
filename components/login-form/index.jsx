import { login } from "@/app/login/action";

export default function LoginForm() {
  return (
    <form className="loginForm">
      <label htmlFor="email">E-Posta </label>
      <input id="email" name="email" type="email"  />
      <label htmlFor="password">Şifre </label>
      <input id="password" name="password" type="password"  />
      <button className="loginBtn" formAction={login}>Kayıt Ol</button>
    </form>
  )
}