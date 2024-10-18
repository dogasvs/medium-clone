"use server"

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function AddComment(prevState, formData) {
  console.log(formData);
  
  const comment = formData.get("comment");
  const postId = Number(formData.get("post_id"));

  const supabase = createClient();
  const { data: {user} } = await supabase.auth.getUser();

  const {data: comments, error } = await supabase
    .from('comments')
    .insert({ post_id: postId, comments: comment, user_id: user.id })
    .select()
    .single() 

    if(error) {
      console.log(error);
    }

    revalidatePath('/', 'layout');
}