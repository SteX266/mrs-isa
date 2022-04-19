import Header from "./Header";
import Footer from "./Footer";
import React,{Component} from 'react'
import NavigationBar from "./NavigationBar";
import EntityList from "./EntityList";
import LoginForm from "./LoginForm";

class HomePageUnregistered extends Component{
    render(){
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

}
export default HomePageUnregistered;