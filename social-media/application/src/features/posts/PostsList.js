import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPost);
  const renderPost = posts.map((post)=>(
    <article key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
    </article>
  ));

  return (<>
  <section>
    <h2>Posts</h2>
    <div>{renderPost}</div>
  </section>
  </>);
};

export default PostsList;
