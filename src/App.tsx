import ListGroup from "./components/ListGroup";

function App(){
  let item = ["Kampala", "Nairobi", "Kisumu", "Jinja", "Hoima"];
  const name = 'keithunt';
 
  return <div><ListGroup item={item} heading = "Cities" /></div>;

}
export default App;