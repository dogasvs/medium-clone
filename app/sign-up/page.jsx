import SignUpForm from "@/components/sign-up-form";
import Apple from "@/svgs/apple";
import Google from "@/svgs/google";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="signupSection">
      <h1>Medium Clone</h1>
      <SignUpForm />
      <div className="or">
        <hr />
        <p>Ya da</p>
        <hr />
      </div>
      <div className="loginOptionBtns">
        <button className="google">
          <Google />
          <p>Google ile kayıt ol</p>
        </button>
        <button className="apple">
          <Apple />
          <p>Apple ile kayıt ol</p>
        </button>
      </div>
      <div className="accountCreation">
        <p>Zaten Hesabın var mı?</p>
        <Link href={"/login"}>Giriş Yap</Link>
      </div>
    </div>
  )
}