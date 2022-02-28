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
              src="https://www.realnet.co.uk/uploads/news/4307a85b4db8420eb08d28bd49e8f183.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="user1-img"
              src="https://bashooka.com/wp-content/uploads/2019/03/web-carousel-example-2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="user2-img"
              src="https://bashooka.com/wp-content/uploads/2019/03/web-carousel-example-11.jpg"
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
