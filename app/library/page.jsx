import { createClient } from "@/utils/supabase/server"

export default async function Library() {
  const supabase = createClient();
  const {data, error} = await supabase
  .from("bookmarks")
  .select("*")

  return (
    <div className="library">
      <div className="libraryTitle">
        <h1>Your library</h1>
        <button className="newList">New List</button>
      </div>
      <div className="libraryCategory">
        <ul>
          <li>Your List</li>
          <li>Saved List</li>
          <li>Highlights</li>
          <li>Reading History</li>
        </ul>
        <hr />
      </div>
      <div className="savedPostList">
        {data.map((x,i) => (
          <div className="savedPost" key={i}>
            <p>{x.post_id}</p>
          </div>
        ))}
      </div>
    
    </div>
  )
}