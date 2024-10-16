import { createClient } from "@/utils/supabase/server"
import { notFound } from "next/navigation";
import ShowCommentBtn from "../show-comment-btn";
import LikeBtn from "../add-like/like-btn";

export default async function PostDetailPage({params}) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("id", params.id)
    .single() 

    const {data: {user}, error: userError} = await supabase.auth.getUser();

    const {data: postLike} = await supabase
      .from("postLike")
      .select()
      .eq('post_id', data.id)
      .eq('user_id', user.id)
      .single();

    if(!data) return notFound();

    return (
      <>
      <div className="post">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </div>
      <div className="postActions">
        <ShowCommentBtn post_id={data.id} />
        <LikeBtn postLike={postLike} post_id={data.id} />
      </div>
      </>

    )
}