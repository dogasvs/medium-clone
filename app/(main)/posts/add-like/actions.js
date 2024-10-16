"use server"

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function AddLike(prevState, formData) {

  const supabase = createClient();
  const { data: {user} } = await supabase.auth.getUser();

  const postId = formData.get("postId");

  const {data: postLike, error } = await supabase
    .from('postLike')
    .select('*')
    .eq('post_id', postId)
    .eq('user_id', user.id)
    .single();

    if (postLike) {
      const {data: likedPost, error } = await supabase
        .from('postLike')
        .delete()
        .eq('post_id', postId)
        .eq('user_id', user.id); 
    } else {
      const {data: doa, error } = await supabase
        .from('postLike')
        .insert( {user_id: user.id, post_id: postId} );
        console.log(doa, error);
    }

    revalidatePath('/', "layout");
}