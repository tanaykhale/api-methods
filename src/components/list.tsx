import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const list = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1>List of Json Placeholder File</h1>
      <div>
        {data.map((value: any) => (
          <>
            {" "}
            <Link to={`/bodyContent/${value.id}`}> {value.title} </Link>
            <br />
          </>
        ))}
      </div>
    </>
  );
};

export default list;
