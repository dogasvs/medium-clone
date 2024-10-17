"use client"

import SignOut from "@/app/login/action";
import Library from "@/svgs/library";
import Profile from "@/svgs/profile";
import StatsSvg from "@/svgs/stats";
import Stories from "@/svgs/stories";
import { useState } from "react";

export default function ProfileBtn({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="profileBtn" onClick={() => setIsOpen(!isOpen)}> {user?.email[0]} </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li> <Profile /> Profile</li>
          <li> <Library /> Library</li>
          <li> <Stories /> Stories</li>
          <li> <StatsSvg /> Stats</li>
          <hr />
          <li>Settings</li>
          <li>Refine Recommendations </li>
          <li>Manage Publications</li>
          <li>Help</li>
          <hr />
          <li>
            <form action={SignOut}>
              <button>Sign Out</button>
              <p>{user.email}</p>
            </form>
          </li>
        </ul>
      )}
    </>
  )
}