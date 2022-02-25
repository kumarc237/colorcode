import React from "react";

const Home = () => {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="user-img"
              src="https://media.istockphoto.com/photos/indianapolis-skyline-at-sunset-picture-id123344998?s=612x612"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="user1-img"
              src="https://cdn.pixabay.com/photo/2022/02/15/09/08/art-7014518_960_720.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="user2-img"
              src="https://cdn.pixabay.com/photo/2021/08/04/20/27/circuit-board-6522546__340.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
export default Home;
