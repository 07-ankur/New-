import Search from "./Search";
import Stories from "./Stories";
import Pagination from "./Pagination";
// import { useContext } from "react";
// import { AppContext } from "./context";
import { useGlobalContext } from "./context";

function App() {
  const data = useGlobalContext();
  return (
    <>
      <h1>Tech Buzz {data}</h1>
      <Search/>
      <Stories/>
      <Pagination/>
    </>
  );
}

export default App;
