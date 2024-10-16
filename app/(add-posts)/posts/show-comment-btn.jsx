"use client"
import Comments from "@/svgs/comments";
import { useState } from "react";
import "../addposts.css"
import Sidenav from "@/components/sidebar";

export default function ShowCommentBtn( {post_id} ) {
  const [showComment, setShowComment] = useState(false);

  return (
    <>
      <button onClick={() => setShowComment(!showComment)}> <Comments /> </button>
      {showComment && (
        <Sidenav post_id={post_id} />
      )}
    </>
  )
}