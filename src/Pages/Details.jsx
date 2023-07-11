import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  const [post, setPost] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((r) => r.json())
      .then((r) => setPost(r));
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((r) => r.json())
      .then((r) => setComments(r));
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link to="/">Back</Link>
        </div>
      </div>
      <div className="row">
        {post && (
          <div className="col-12">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
        <div className="col-12">
          {comments && comments.map((el) => <li key={el.id}>{el.body}</li>)}
        </div>
      </div>
    </div>
  );
}
