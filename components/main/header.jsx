import SignOut from "@/app/login/action";
import Search from "@/svgs/search";
import { createClient } from "@/utils/supabase/server";
import ProfileBtn from "./profile-btn";

export default async function MainHeader() {
  const supabase = createClient();
  const {data: { user }} = await supabase.auth.getUser();
  console.log(user);

  return (
    <header> 
      <div className="title">
      <h1>Medium C</h1>
        <form action="">
          <input type="text" placeholder="Search" />
          <Search />
        </form>
      </div>


        {user? (
          <ul>
            <li> <ProfileBtn user={user} /> </li>
          </ul>
        ) : (
         null
        )}
    </header>
  )
}