import React, { useEffect, useState } from "react"
import { Card, Row, Col, Image, Badge } from "react-bootstrap"
import moment from "moment"
import { GetMovieById } from "../actions"
import { IMAGE_URL } from "../config/api"
import Spinner from "../components/contents/spinner"
import '../App.css';


function MovieDetailApp({ id }) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {

    if (id) {

      GetMovieById(3, id).then(res => {

        if (res) {
          setData(res)
          setLoading(false)
        }
      }).catch(err => {
        console.log("err", err)
         setLoading(false)
      })
    }

  }, [id])



  return (
    <Card style={{ backgroundColor: "green" }}>
      {
        loading ? <Spinner /> :
          <Row>
            <Col md={4}>
              <Image width="100%" src={data && IMAGE_URL+data.poster_path} rounded />
            </Col>
            <Col md={8}>
              
              <h2>{data && data.title}</h2>
              <span style={{ fontSize: 14 }}>{data && moment(data.release_date).format("LL")}</span> <br />
              {
                data && data.genres.map((item, idx) => {
                  return <Badge variant="secondary" style={{ margin: idx > 0 ? 3 : 0}}>{item.name}</Badge>
                })
              }
              <br />
              <br />

              <p>
                {data && data.overview}
              </p>

                <p>
                Production Companies
                </p>
              
                {
                  data && data.production_companies.map(item => {
                    return <Badge variant="secondary" style={{ margin:3}}>{item.name}</Badge>
                  })
                }
         
          </Col>
       </Row>
      }
          
    </Card>
  );
}

export default MovieDetailApp
