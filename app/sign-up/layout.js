import Image from "next/image"
import "./signup.css"

export default function SignUpLayout({children}) {
  return (
    <div className="signupPage">
      {children}
    <div className="SignupImage">
      <Image src="/img/Signup.png" alt="Login Image" width={800} height={800} />
    </div>
  </div>
  )
}