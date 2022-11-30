// JUST CREATE A FUNCTION HERE 
import './App.css'
import Nav from './components/nav/Nav'
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';

axios.defaults.baseURL='https://api.themoviedb.org/3'
axios.defaults.params={
  api_key:'52af2bc35f4b3c90ee5f16c03a00609b',
};
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