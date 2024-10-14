"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function SavedPost(formData) {
  console.log(formData);
  
  const title = formData.get("title");
  const content = formData.get("content");
  const supabase = createClient();
  const { data: {user} } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('posts')
    .insert({ title, content, user_id: user.id })
    .select()
    .single() //dizi geldi tekil dönmesini istediğimiz için single ekledik dizi olarak dönmesin bize diye aslında

    if(error) {
      console.log(error);
    }

    redirect(`/posts/${data.id}`)
}