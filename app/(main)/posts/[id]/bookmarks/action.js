"use server"

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function AddKaydet(prevState, formData) {

  const supabase = createClient();
  const { data: {user} } = await supabase.auth.getUser();

  const postId = formData.get("postId");

  const {data: postLike, error } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('post_id', postId)
    .eq('user_id', user.id)
    .single();

    if (postLike) {
      const {data: SavedPost, error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('post_id', postId)
        .eq('user_id', user.id); 
    } else {
      const {data: postthebeSaved, error } = await supabase
        .from('bookmarks')
        .insert( {user_id: user.id, post_id: postId} );
    }

    revalidatePath('/', "layout");
}