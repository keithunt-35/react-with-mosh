import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

//{item:[], heading: string }
interface Props{

    item: string[];
    heading: string;
    
    onSelectItem: (item: string) => void;
}


function ListGroup({item, heading, onSelectItem}: Props) {
  
  //let selectedIndex = 0;
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName ] = useState('');

 
  //props are imuutable while states are muttable


  return (
    <Fragment>
      <h1>{heading}</h1>
      {item.length === 0 && <p>message not found</p>}
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className={selectedIndex === index? 'list-group-item active':'list-group-item'}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
