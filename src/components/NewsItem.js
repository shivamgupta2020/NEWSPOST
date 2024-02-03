import {React } from "react"

const NewsItem = ({ title, description, src, url }) => {
    return (
      <div
        className="card bg-dark text-light d-inline-block mb-3 mx-3 my-3 px-2 py-2"
        style={{ width: "345px" }}
      >
        <img
          src={
            src
              ? src
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhi.m.wikipedia.org%2Fwiki%2F%25E0%25A4%259A%25E0%25A4%25BF%25E0%25A4%25A4%25E0%25A5%258D%25E0%25A4%25B0%3AImage_not_available.png&psig=AOvVaw1Ow5MxsdoSHhVV9xYrb0O5&ust=1703624503062000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiL3_69q4MDFQAAAAAdAAAAABAS"
          }
          style={{ height: "200px", width: "325px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 100)
              : "Description not available"}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default NewsItem;
  