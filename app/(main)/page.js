import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./main.css"

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase
  .from("posts")
  .select()

  console.log(data);

  return (
    <>
      {data.map((x, i) => (
        <Link href={`/posts/${x.id}`}>
        <div className="post" key={i}>
          <strong> {x.title} </strong>
          <p>{x.content}</p>
        </div>
        <hr />
        </Link>
      ))}
    </>
  );
}
