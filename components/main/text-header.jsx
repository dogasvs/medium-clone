import More from "@/svgs/more";
import Notifications from "@/svgs/notifications";
import { createClient } from "@/utils/supabase/server";
import ProfileBtn from "./profile-btn";
import Link from "next/link";

export default async function TextHeader() {
  const supabase = createClient();
  const {data: { user }} = await supabase.auth.getUser();
  console.log(user);
  return (
    <header>
      <div className="textHeaderTitle">
        <Link href={"/"}>Medium C</Link>
        <p>Draft in {user.email}</p>
        <p>Saved</p>
      </div>
      <ul className="textHeaderAccountMenu">
        <li> <button className="addPostBtn">Publish</button> </li>
        <li> <More /> </li>
        <li> <Notifications /> </li>
        <li> <ProfileBtn user={user} /> </li>
      </ul>

    </header>
  )
}