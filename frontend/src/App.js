import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import NavigationBar from "./components/NavigationBar";
import EntityCard from "./components/EntityCard";
import EntityList from "./components/EntityList";
import LoginForm from "./components/LoginForm";
function App() {
  return <>
  
    <Header/>
    <NavigationBar/>

    <div class="album py-5 bg-light">
    <div class="container">
    <LoginForm/>
    </div>
    </div>
    <Footer/>

  
  </>;
      


}

export default App;
