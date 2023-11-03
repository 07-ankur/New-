import {useEffect, useContext} from 'react'

const Stories = () => {

  let isLoading = true;

  let API = "https://hn.algolia.com/api/v1/search?query=react";

  const fetchApiData = async (API) => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchApiData(API)
  }, [])

  if(isLoading) {
    return (
      <h2>
        Loading...
      </h2>
    )
  }

  return (
    <h2>
      Tech Buzz Posts
    </h2>
  )
}

export default Stories;