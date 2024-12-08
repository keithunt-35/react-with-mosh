import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function ListGroup() {
  let item = ["Kampala", "Nairobi", "Kisumu", "Jinja", "Hoima"];

  //eventhandler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <Fragment>
      <h1>Listing</h1>
      {item.length === 0 && <p>message not found</p>}
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
