import { useState, useEffect } from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Lists from "./components/list";
import Content from "./components/bodyContent";
function App() {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Lists data={data}></Lists>}></Route>
        <Route path="/bodyContent" element={<Content data={data} />} />
      </>
    )
  );
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
