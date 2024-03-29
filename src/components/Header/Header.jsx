import React from "react";
import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import {BiSearchAlt2} from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import WebFont from 'webfontloader';
// import { AiOutlineDown } from "@react-icons/all-files";
import { AiOutlineDown } from "react-icons/ai";
import Unico from "../../assets/Unico.jpeg"

import "./Header.scss";


const Header = () => {
    var q = JSON.parse(localStorage.Cart).length ;
    const[scrolled,setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [ setLog] = useState(false) ;
    // let log = 'login' ;
    const getuser = ()=>{

        
        if((localStorage.length)===2){
            // console.log("hn hn user hai") ;
            setLog(true) ;
            
            setLog("user") ;
            
        }
        else{
            // console.log("nhi user nhi hai login kro") ;
        }
    }

    const handleScroll = () =>{
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true);
        }
        else{
            setScrolled(false)
        }
    }


    useEffect(()=>{
        getuser();
        window.addEventListener("scroll", handleScroll)
    },);
    useEffect(() => {
   WebFont.load({
     google: {
       families: ['Droid Sans', 'Chilanka']
     }
   });
  }, []);

  const isadmin = ()=>{
    var u = JSON.parse(localStorage.user)
    console.log(u.isAdmin) ;

    if((u.isAdmin)){
        return  1 ;
    }
    else{
        return 0 ;
    }
  }



    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ' '}`}>
                <div className="header-content">
                    <div className="center">
                        <div class="brand-name">
                            <Link to="/"> 
                                <img src={Unico} alt="" />
                            </Link>
                        </div>
                        <Link className="linkcenter" to="/">Unico Foods</Link></div>
                    
                    <oll className="left">
            
                        <li><Link className="link" to="/">Home</Link></li>
                        <div>
                        {(localStorage.removeItem("isAdmin"))?<li><Link className="link" to="/admin">Admin</Link></li>:<span></span>}
                        </div>
            
                       <div class="dropdown">
                            <button class="dropbtn">Categories 
                                {/* <i class="AiOutlineDown"></i> */}
                                <AiOutlineDown className="reactIcon"/> 
                                
                            </button>
                            
                            <div class="dropdown-content font-loader">
                                <li><Link className="linkd" to="/allProducts">allProducts</Link></li>
                                <li><Link className="linkd" to="/Millet-Meusli">Millet-Meusli</Link></li>
                                <li><Link className="linkd" to="/Millet-Laddo">Millet-Laddo</Link></li>
                                <li><Link className="linkd" to="/Millet-Bar">Millet-Bar</Link></li>

                            </div>
                        </div>
                        <li><Link className="link" to="/contact">Contact us</Link></li>
                        <div>
                        </div>
                    </oll>
                    
                    <div className="right">
                        <BiSearchAlt2 onClick={()=>setShowSearch(true)}/>
                        <Link className="link" to = {!(localStorage.user) ? '/login' : isadmin() ? "/admin" : "/user"}  ><AiOutlineUser/></Link>
                        <span className="cart-icon" onClick={()=>setShowCart(true)}>
                            <CgShoppingCart/>
                            <span>{q}</span>
                        </span>
                    </div>
                </div> 
            </header>
            {
                showCart && <Cart setShowCart={setShowCart}/>
            }
            {
                showSearch && <Search setShowSearch={setShowSearch}/>
            }
        </>
    );
};

export default Header;
