"use client"
import BosKalpBtn from "@/svgs/like-btn";
import { AddLike } from "./actions";
import { useFormState } from "react-dom";

export default function LikeBtn({post_id, postLike}) {
  const [state, action] = useFormState(AddLike, {message: null, error: null});

  return (
    <>
      <form action={action}>
        <input type="hidden" name="postId" value={post_id} />
        <button> <BosKalpBtn postLike={postLike} /> </button>
      </form>
    </>
  )
}