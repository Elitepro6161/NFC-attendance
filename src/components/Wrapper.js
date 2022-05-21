import React from "react"
import NavBar from "./navbar";
import Header from "./navbar/Header";


const Wrapper = ({ children }) => {
    return (
        <div className="items-center">
            <Header/>
        {children}
        <NavBar/>
        </div>
    );
}







export default Wrapper;