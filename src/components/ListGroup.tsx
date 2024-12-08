import { useState } from "react";
import { Fragment } from "react/jsx-runtime";


function ListGroup() {
  let item = ["Kampala", "Nairobi", "Kisumu", "Jinja", "Hoima"];
  //let selectedIndex = 0;
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName ] = useState('');

 
  
  return (
    <Fragment>
      <h1>Listing</h1>
      {item.length === 0 && <p>message not found</p>}
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className={selectedIndex === index? 'list-group-item active':'list-group-item'}
            key={item}
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
