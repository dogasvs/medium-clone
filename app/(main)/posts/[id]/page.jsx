import { createClient } from "@/utils/supabase/server"
import { notFound } from "next/navigation";
import ShowCommentBtn from "../show-comment-btn";
import LikeBtn from "../add-like/like-btn";
import KaydetBos from "@/svgs/kaydet";
import MediaSvg from "@/svgs/media";
import ShareSvg from "@/svgs/share";
import More from "@/svgs/more";
import Yildiz from "@/svgs/yildiz";
import KaydetBtn from "./bookmarks/kaydet";

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

    const {data: bookmarks} = await supabase
      .from("bookmarks")
      .select()
      .eq('post_id', data.id)
      .eq('user_id', user.id)
      .single();

    if(!data) return notFound();

    return (
      <>
      <div className="postDetail">
        <div className="postDetailCreated"> <Yildiz /> <span>Member-only story</span> </div>
        <h1>{data.title}</h1>
      <div className="postActions">
        <div className="ItemPostDetails">
          <LikeBtn postLike={postLike} post_id={data.id} />
          <ShowCommentBtn post_id={data.id} />
        </div>
        <div className="ItemPostDetails">
          <KaydetBtn bookmarks={bookmarks} post_id={data.id} />
          <MediaSvg />
          <ShareSvg />
          <More />
        </div>
      </div>
        <p className="dataContent">{data.content}</p>
      </div>
      </>

    )
}