import React from "react";
import { useHistory } from "react-router-dom";

const SideNav = () => {
  const history = useHistory();
  const handleHomeRoute = () => {
    history.push("/");
  };
  const handleUserRoute = () => {
    history.push("/user");
  };
  const handleListRoute = () => {
    history.push("/list");
  };
  const handleContentRoute = () => {
    history.push("/content");
  };

  const handleFeaturesRoute = () => {
    history.push("/features");
  };
  const handleProgrammeRoute = () => {
    history.push("/programme");
  };

  return (
    <div className="side-nav-container p-3">
       <div className="d-flex justify-content-end">
        <img className="close-icon" src="https://img.icons8.com/fluency-systems-filled/344/delete-sign.png"/>
      </div>
      <div className="sidenav-list" onClick={handleHomeRoute}>
        <img
          className="sidenav-image"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png"
        />
        Home
      </div>
      <div className="sidenav-list" onClick={handleUserRoute}>
        <img
          className="sidenav-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5aytU2bHnVPCsgfKLPxObZwFIdte5rjFGA&usqp=CAU"
        />
        User
      </div>
      <div className="sidenav-list" onClick={handleListRoute}>
        <img
          className="sidenav-image"
          src="https://cdn-icons-png.flaticon.com/512/149/149347.png"
        />
        List
      </div>
      <div className="sidenav-list" onClick={handleContentRoute}>
        <img
          className="sidenav-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXZTO-KoxFNYAiQE5darJxmClt4NWqH4_NA&usqp=CAU"
        />
        Content
      </div>

      <div className="sidenav-list" onClick={handleFeaturesRoute}>
        <img
          className="sidenav-image"
          src="https://icon-library.com/images/features-icon-png/features-icon-png-4.jpg"
        />
        Features
      </div>
      <div className="sidenav-list" onClick={handleProgrammeRoute}>
        <img
          className="sidenav-image"
          src="https://i.pinimg.com/originals/dd/3c/fc/dd3cfc74edaef12814c4c1ca2f6510a1.png"
        />
        Programme
      </div>
     
    </div>
  );
};
export default SideNav;
