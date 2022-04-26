import Header from "./Header";
import Footer from "./Footer";
import React,{Component} from 'react'
import NavigationBar from "./NavigationBar";
import EntityList from "./EntityList";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ClientProfile from "./ClientProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class HomePageUnregistered extends Component{
    render(){
    return <>

    <Header/>
    <NavigationBar/>
    
    <div class="album py-5 bg-light">
    <div class="container">

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EntityList/>}/>
      <Route path="registration" element={<RegisterForm/>}/>    
      <Route path="login" element={<LoginForm/>}/>    
      <Route path="clientProfile" element={<ClientProfile/>}/>
    </Routes>

    </BrowserRouter>
    </div>
    </div>
    <Footer/>

  
  </>;

    }

}
export default HomePageUnregistered;