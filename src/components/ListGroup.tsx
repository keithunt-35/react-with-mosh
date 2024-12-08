import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let item = ["Kampala", "Nairobi", "Kisumu", "Jinja", "Hoima"];
  item =[];
  const getMessage =()=>{
    return item.length === 0 ? <p>message not found</p>: null;;
}

  return (
    <Fragment>
      <h1>Listing</h1>
      {getMessage()}
      <ul className="list-group">
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
