import React, { useEffect, useState } from "react"
import CardMedia from "../components/contents/cardMedia"
import { GetMovies, GetMoviesQ } from "../actions"
import Spinner from "../components/contents/spinner"

import '../App.css';

function MovieApp(props) {

  const [listNowPlaying, setNowPlaying] = useState(null)
  const [listPopular, setPopular] = useState(null)
  const [listTopRated, setTopRated] = useState(null)
  const [listSearch, setListSearch] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (props && props.q) {
      getListMovieQ()
    }else getListMovie()
  }, [props])


  const getListMovie = () => {

    let populer = GetMovies(3, "popular")
    let nowPlaying = GetMovies(3, "now_playing")
    let topRated = GetMovies(3, "top_rated")

    Promise.all([populer, nowPlaying, topRated]).then(data => {
    
      if (data && data.length > 0) {

        setPopular(data[0].results)
        setNowPlaying(data[1].results)
        setTopRated(data[2].results)
      
        setLoading(false)
      
      }
    }).catch(e => {
      setLoading(true)
    })

  }


  const getListMovieQ = () => {
    GetMoviesQ(3,  {
      query : props.q
    }).then(res => {

      if (res) {
        setListSearch(res.results)
        setLoading(false)
      }
    }).catch(err => {
      setLoading(false)
      console.log("err", err)
    })
  
  }


  return (
    <div>
      {
        loading ?
          <Spinner /> : 
          <div>

             {
              listSearch && <div>
                <p className="h-view">Hasil Pencarian : {props.q}</p>
                  <CardMedia  data={listSearch}/>
              </div> 
            }  

            {
              listPopular && <div>
                  <p className="h-view">Popular Movie  <span>View All</span></p>
                  <CardMedia data={listPopular} />
                </div>
              }
            {

            listTopRated &&  <div>
                    <p className="h-view">Top Rated <span>View All</span></p>
                    <CardMedia data={listTopRated} />
                  </div>
            }

            {
              listNowPlaying && <div>
                  <p className="h-view">Now Playing  <span>View All</span> </p>
                  <CardMedia  data={listNowPlaying}/>
              </div> 
            }   
            
        </div>
      }
    </div>
  );
}

export default MovieApp
