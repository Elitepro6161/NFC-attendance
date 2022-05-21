import React from "react";
import { ProfileIcon, SettingIcon } from "../Assets";


const Header = () => (
    <>
    <div className="flex items-center justify-between px-12 py-5 bg-blue-200/10">
        <div className="flex items-center justify-between">
            <ProfileIcon props={{
                className: "h-12 w-12",
            }}/>
            
        </div>
        <div className="flex items-center justify-between">
            <SettingIcon props={{
                className: "h-12 w-12",
            }}/>
            
        </div>
    </div>
    </>

)

export default Header;