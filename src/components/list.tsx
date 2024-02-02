import { NavLink } from "react-router-dom";

export default function list({ data }: { data: any[] }) {
  return (
    <div>
      <h1>Posts from JSONPlaceholder</h1>
      <ul>
        {data.map((val: any, index: number) => (
          <NavLink to="bodyContent" key={index}>
            {val.title}
            <br></br>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
