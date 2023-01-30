import './App.css';
import Products from './Products';
import { items } from './items';
function App() {
  return (
    <div className="App">
      {items.map((item, index)=>{
return  <Products key={index} item={item}>{item.price}</Products>

      })}
    </div>
  );
}

export default App;
