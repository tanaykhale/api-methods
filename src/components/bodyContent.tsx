import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const bodyContent = () => {
  const { bodyId } = useParams();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${bodyId}`)
      .then((response) => response.json())
      .then((datas) => setDatas(datas));
  }, [bodyId]);

  console.log("datas", datas);
  return <div>{datas.body}</div>;
};

export default bodyContent;
