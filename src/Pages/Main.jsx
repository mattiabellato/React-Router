import { useEffect, useState } from "react";
import Card from "../Components/Card";

export default function Main() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((r) => setData(r));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Main</h1>
        </div>
      </div>

      <div className="row">
        {data && data.map((el) => <Card key={el.id} post={el} />)}
      </div>
    </div>
  );
}
