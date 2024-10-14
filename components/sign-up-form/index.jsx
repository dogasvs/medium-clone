import { signup } from "@/app/sign-up/action";

export default function SignUpForm() {
  return (
    <form>
      <label htmlFor="name">İsim</label>
      <input id="name" name="name" type="text" placeholder="İsim" required />
      <label htmlFor="lastname">Soyisim</label>
      <input id="lastname" name="lastname" type="text" placeholder="Soyisim" required />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" placeholder="usermail@gmail.com" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" placeholder="*******" required />
      <button formAction={signup}>Sign up</button>
    </form>
  )
}