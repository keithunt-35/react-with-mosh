import ListGroup from "./components/ListGroup";

function App(){
  let item = ["Kampala", "Nairobi", "Kisumu", "Jinja", "Hoima"];
  const name = 'keithunt';

  const handleSelectItem =(item: string) => {
    console.log(item);
  }
 
  return <div><ListGroup item={item} heading = "Cities" onSelectItem={handleSelectItem} /></div>;

}
export default App;