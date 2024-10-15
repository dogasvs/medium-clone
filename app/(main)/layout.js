import MainHeader from "@/components/main/header";
import "./main.css"

export default function MainLayout({children}) {
  return (
    <div className="mainContainer">
      <MainHeader />
      <hr />
      <div className="content">
         {children}
      </div>
    </div>
  )
}