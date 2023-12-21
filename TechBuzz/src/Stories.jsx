import { useEffect, useContext } from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, isLoading } = useGlobalContext();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Tech Buzz Posts</h2>
      {hits.map((curPost) => {
        return (
          <>
            {" "}
            <h2>{curPost.title}</h2>
            <p>{curPost.author}</p>
          </>
        );
      })}
    </>
  );
};

export default Stories;
