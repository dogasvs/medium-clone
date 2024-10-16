"use client"
import Sidebar from "@/components/sidebar";
import Comments from "@/svgs/comments";
import { useState } from "react";
import "../addposts.css"

export default function ShowCommentBtn() {
  const [showComment, setShowComment] = useState(false);

  return (
    <>
      <button onClick={() => setShowComment(!showComment)}> <Comments /> </button>
      {showComment && (
        <Sidebar />
      )}
    </>
  )
}