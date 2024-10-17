import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Contents() {
  const [contents, setContents] = useState([
    {
      id: 1,
      content: "1번"
    },
    {
      id: 2,
      content: "운동 가야 돼"
    },
    {
      id: 3,
      content: "코딩 잘하고 싶다."
    }
  ]);
  return (
    <div>
      <ul>
        {contents.map((item, idx) => (
          <li >
            <NavLink to={`${item.id}?content=${item.content}`}>컨텐츠{item.id}</NavLink>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
}

export default Contents;
