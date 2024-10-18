"use client"
import BosKalpBtn from "@/svgs/like-btn";
import { AddLike } from "./actions";
import { useFormState } from "react-dom";
import { useState } from "react";
import DoluAlkis from "@/svgs/like-btn/dolu-btn";

export default function LikeBtn({post_id, postLike}) {
  const [state, action] = useFormState(AddLike, {message: null, error: null});
  const [isLiked, setIsLiked] = useState(!!postLike);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); 
  };

  return (
    <>
      <form action={action}>
        <input type="hidden" name="postId" value={post_id} />
        <button onClick={handleLikeClick}>
            {isLiked ? <DoluAlkis  /> :  <BosKalpBtn  />}
          </button>
      </form>
    </>
  )
}