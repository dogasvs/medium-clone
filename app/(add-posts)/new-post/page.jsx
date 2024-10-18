import {SavedPost} from "./actions";

export default function NewPost() {
  return (
    <div>
      <form className="submitPost" action={SavedPost}>
        <input type="text" name="title" placeholder="yazı başlığını giriniz" />
        <br />
        <textarea name="content" id="" placeholder="yazı içeriğini giriniz "></textarea>
        <br />
        <button className="submitPostBtn">Gönder</button>
      </form>
    </div>
  )
}