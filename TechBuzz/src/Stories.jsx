import { useEffect, useContext } from "react";
import { useGlobalContext } from "./context";
import "./App.css";

const Stories = () => {
  const { hits, isLoading } = useGlobalContext();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="stories-div">
        <h2>Tech Buzz Posts</h2>
        {hits.map((curPost) => {
          const { title, author, objectId, url, num_comments } = curPost;
          return (
            <div className="card">
              <h2>{title}</h2>
              <p>
                By <span> {author} </span> | <span> {num_comments} </span>{" "}
                Comments
              </p>
              <div className="card-button">
                <a href={url} target="blank">
                  Read More
                </a>
                <a href="#">Remove</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
