"use client"
import { useFormState } from "react-dom";
import { useState } from "react";
import KaydetDolu from "@/svgs/kaydet/kaydetDoluBtn";
import KaydetBos from "@/svgs/kaydet";
import { AddKaydet } from "./action";

export default function KaydetBtn({post_id, bookmarks}) {
  const [state, action] = useFormState(AddKaydet, {message: null, error: null});
  const [isLiked, setIsLiked] = useState(!!bookmarks);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); 
  };

  return (
    <>
      <form action={action}>
        <input type="hidden" name="postId" value={post_id} />
        <button onClick={handleLikeClick}>
            {isLiked ? <KaydetDolu /> :  <KaydetBos />}
          </button>
      </form>
    </>
  )
}