"use client"
import { AddComment } from "@/app/(main)/posts/[id]/new-comment/actions";
import CommentCloseSvg from "@/svgs/comment-close-btn";
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react";
import {useFormState} from "react-dom";

export default function Sidenav( {post_id} ) {
  const [comment, setComment] = useState([]);
  const [state, action] = useFormState(AddComment, {message: null, error: null});
  
  useEffect(() => {
    async function GetData() {
      const supabase = createClient();
      const {data, error} = await supabase
      .from('comments')
      .select()
      .eq('post_id', post_id)
      
      setComment(data);
    }
    GetData()
  }, [post_id])

  return (
    <div className="sidenav">
      <div className="sidenavTitle">
        <h1>Responses <span>{comment.length}</span></h1>
        <button> <CommentCloseSvg /> </button>
      </div>
      <form action={action}>
        <textarea required className="commentAddArea" name="comment" type="text" placeholder="What are your thoughts?" />
        <input name="post_id" type="hidden" value={post_id} />
        <div className="formButtons">
          <button className="cancelBtn" >Cancel</button>
          <button type="submit" className="respondBtn">Respond</button>
        </div>
      </form>

      {comment && 
        comment.map((x,i) =>
          <div className="commentItem" key={i}>
            <p className="comment">{x.comments}</p>
          </div>
      )}
    </div>
  )
}