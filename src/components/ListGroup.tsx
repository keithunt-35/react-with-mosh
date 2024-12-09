import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

//{item:[], heading: string }
interface Props{

    item: string[];
    heading: string;
}


function ListGroup({item, heading }: Props) {
  
  //let selectedIndex = 0;
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName ] = useState('');

 
  
  return (
    <Fragment>
      <h1>{heading}</h1>
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
