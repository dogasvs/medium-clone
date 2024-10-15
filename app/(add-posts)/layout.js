import TextHeader from "@/components/main/text-header";
import "../(add-posts)/addposts.css"

export default function AddPostLayout({children}) {
  return (
    <div>
      <TextHeader />
      <div className="content">
         {children}
      </div>
    </div>
  )
}