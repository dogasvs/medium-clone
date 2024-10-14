import { login, signup } from "@/app/login/action";

export default function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email"  />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password"  />
      <button formAction={login}>Log in</button>
    </form>
  )
}