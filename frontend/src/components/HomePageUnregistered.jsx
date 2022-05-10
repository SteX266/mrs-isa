import Header from "./Header";
import Footer from "./Footer";
import React,{Component} from 'react'
import NavigationBar from "./NavigationBar";
import EntityList from "./EntityList";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ClientProfile from "./ClientProfile";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

class HomePageUnregistered extends Component{
  
    render(){
    return <>


    <Header/>
    

    <BrowserRouter>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<EntityList/>}/>
      <Route path="registration" element={<RegisterForm/>}/>    
      <Route path="login" element={<LoginForm/>}/>    
      <Route path="clientProfile" element={<ClientProfile/>}/>
    </Routes>
    </BrowserRouter>
    

    <Footer/>

  
  </>;

    }

}
export default HomePageUnregistered;