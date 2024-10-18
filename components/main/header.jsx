import Search from "@/svgs/search";
import { createClient } from "@/utils/supabase/server";
import ProfileBtn from "./profile-btn";
import MorePosts from "@/svgs/more-posts-btn";
import Notifications from "@/svgs/notifications";
import Link from "next/link";
import "@/app/(main)/main.css"

export default async function MainHeader() {
  const supabase = createClient();
  const {data: { user }} = await supabase.auth.getUser();
  console.log(user);

  return (
    <header> 
      <div className="title">
        <Link href={"/"}>Medium C</Link>
        <form action="">
          <input type="text" placeholder="Search" />
          <Search />
        </form>
      </div>


        {user? (
          <ul className="accountMenu">
            <li> <Link href={"/new-post"} className="writeTextBtn"> <MorePosts /> Write </Link> </li>
            <li> <Notifications />  </li>
            <li> <ProfileBtn user={user} /> </li>
          </ul>
        ) : (
         <ul className="guestList">
          <li> <Link className="guestButton" href={"/sign-up"}>Sign up</Link> </li>
          <li> <Link className="guestButton" href={"login"}>Log in</Link> </li>
         </ul>
        )}
    </header>
  )
}