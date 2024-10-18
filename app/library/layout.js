import MainHeader from "@/components/main/header";
import "@/app/(main)/main.css"

export default function LibraryLayout({children}) {
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