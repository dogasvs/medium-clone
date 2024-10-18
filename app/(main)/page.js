import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./main.css"
import Yildiz from "@/svgs/yildiz";
import Alkis from "@/svgs/alkis";
import PostInteractıonComment from "@/svgs/post-interaction-comment";
import ShowLessBtn from "@/svgs/show-less-btn";
import KaydetBos from "@/svgs/kaydet";
import More from "@/svgs/more";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase
  .from("posts")
  .select()

  const { data: comments } = await supabase
  .from("comments")
  .select()

  console.log(data);

  return (
    <>
      {data.map((x, i) => (
        <Link href={`/posts/${x.id}`}>
        <div className="post" key={i}>
          <strong> {x.title} </strong>
          <p>{x.content}</p>
          <div className="postInteraction">
            <div className="postInteractionPart">
              <div className="Item">
                <Yildiz />
                <p>Sept26</p>
              </div>
              <div className="Item">
                <Alkis />
                <p>2.6k</p>
              </div>
              <div className="Item">
                <PostInteractıonComment />
                <p>{comments.length}</p>
              </div>
            </div>
            <div className="postInteractionPart">
              <ShowLessBtn />
              <KaydetBos />
              <More />
            </div>
          </div>
        </div>
        <hr />
        </Link>
      ))}
    </>
  );
}
