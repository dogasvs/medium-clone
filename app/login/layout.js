import Image from "next/image";
import "./login.css"

export default function LoginLayout({children}) {
  return (
    <div className="loginPage">
      {children}
      <div className="loginImage">
        <Image src="/img/cicek.png" alt="Login Image" width={700} height={800} />
      </div>
    </div>
  )
}