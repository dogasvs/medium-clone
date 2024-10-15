"use client"

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/server";

export default function ProfileBtn() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []); 

  return (
    <button> {user?.email[0]} </button>
  )
}