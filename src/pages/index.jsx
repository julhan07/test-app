import React from "react"
import MoviePage from "./movies"
import MovieDetailPage from "./movieDetail"

function HomeApp(props) {

  const PageRendered = (params) => {
    
    const { action } = params

    switch (action) {
      case "detail":
        return <MovieDetailPage { ...params } />
      default:
        return <MoviePage { ...params }  /> 
    }

  }

  return (
    <div>
      {PageRendered(props)}
    </div>
  );
}

export default HomeApp
