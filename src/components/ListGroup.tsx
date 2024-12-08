import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let item = ["Kampala", "Nairobi", "Kisumu", "Jinja", "Hoima"];

  return (
    <Fragment>
      <h1>Listing</h1>
      {item.length === 0 && <p>message not found</p>}
      <ul className="list-group">
        {item.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
