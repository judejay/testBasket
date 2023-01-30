import './App.css';
import Products from './Products';
import { items } from './items';
import Basket from './Basket';
function App() {
  return (
    <>
    <div className="App container">
      <div className='products'>

    
      {items.map((item, index)=>{
return  <Products key={index} item={item}>{item.price}</Products>

      })}
  </div>
  
    <div>
       <Basket></Basket>
    </div>    
  </div> 
</>
  );
}

export default App;
