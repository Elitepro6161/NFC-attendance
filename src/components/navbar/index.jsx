import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HomeIcon, CalendarIcon, ProfileIcon, NfcIcon,RecentIcon } from "../Assets";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const Routes = [
    {
      name: "Home",
      path: "/student",
      icon: (
        <HomeIcon
          props={{
            className: "h-6 w-6 text-blue-800",
          }}
        />
      ),
    },
    {
      name: "Calendar",
      path: "/student/calendar",
      icon: (
        <CalendarIcon
          props={{
            className: "h-6 w-6 text-blue-800",
          }}
        />
      ),
    },
    {
      name: "Profile",
      path: "/student/profile",
      icon: (
        <ProfileIcon
          props={{
            className: "h-6 w-6 text-blue-800",
          }}
        />
      ),
    },
  ];

  const FacultyRoutes = [
    {
      name: "Home",
      path: "/faculty",
      icon: (
        <NfcIcon
          props={{
            className: "h-6 w-6 text-blue-800",
          }}
        />
      ),
    },
    {
      name: "Recent",
      path: "/faculty/recent",
      icon: (
        <RecentIcon
          props={{
            className: "h-6 w-6 text-blue-800",
          }}
        />
      ),
    },
    {
      name: "Profile",
      path: "/faculty/profile",
      icon: (
        <ProfileIcon
          props={{
            className: "h-6 w-6 text-blue-800",
          }}
        />
      ),
    },
  ];

  const IconBox = ({ path, icon, name }) => (
    <button
      onClick={() => navigate(path)}
      className={`w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-4 pb-4 ${
        location.pathname === path ? "bg-[#404040]" : ""
      }`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      {/* <span className="text-sm text-neutral-600">{name}</span> */}
    </button>
  );
  const Component = () => (
    <section
      id="bottom-navigation"
      className="block h-14 fixed inset-x-0 bottom-0 z-10 bg-black shadow"
    >
      <div id="tabs" className="flex justify-between">
        {localStorage.getItem("role") === "student"
          ? Routes.map(({ name, path, icon }) => (
              <IconBox key={path} path={path} icon={icon} name={name} />
            ))
          : FacultyRoutes.map(({ name, path, icon }) => (
              <IconBox key={path} path={path} icon={icon} name={name} />
            ))}
      </div>
    </section>
  );


  return (
    <>
      
      <Component />
    </>
  );
};

export default NavBar;
