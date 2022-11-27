// JUST CREATE A FUNCTION HERE 
import './App.css'
import Nav from './components/nav/Nav'
import Header from './components/header/Header';
import Content from './components/content/Content';
/*const Home=()=>{
  
  
  return (<div>Home
  <h4></h4>
  <h5>age={props.age}</h5>
  </div>
  );
  
};*/


const App =() =>{
  return (
    <div>
      <Nav/>
      <Header/>
      <Content/>
    </div>
  );
};      //this function contains what is visible on the screen jsx. this function is called a component 
export default App; //always export