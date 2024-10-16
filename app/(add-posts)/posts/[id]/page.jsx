import { createClient } from "@/utils/supabase/server"
import { notFound } from "next/navigation";
import ShowCommentBtn from "../show-comment-btn";
import "../../addposts.css"

export default async function PostDetailPage({params}) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("id", params.id)
    .single() 

    if(!data) return notFound();

    return (
      <>
      <div className="post">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </div>
      <div className="postActions">
        <ShowCommentBtn post_id={data.id} />
      </div>
      </>

    )
}