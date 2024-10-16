"use client"
import { AddComment } from "@/app/(main)/posts/[id]/new-comment/actions";
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
  }, [])

  return (
    <div className="sidenav">
      <h1>Resposes <span>{comment.length}</span></h1>
      <form action={action}>
        <input name="comment" type="text" placeholder="What are your thoughts?" />
        <input name="post_id" type="hidden" value={post_id} />
        <button>Ekle</button>
      </form>
      {comment && 
        comment.map((x,i) =>
          <div key={i}>
            <p>{x.comments}</p>
          </div>
      )}
    </div>
  )
}