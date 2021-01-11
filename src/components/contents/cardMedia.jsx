import { Card, Row, Col, Image } from "react-bootstrap"
import moment from "moment"
import { IMAGE_URL } from "../../config/api"
import { Link } from "react-router-dom"


function CardMedia({ data = [] }) {

    return <Row style={{
         display: "flex", flexWrap: "wrap"
    }}>
            {
                data && data.map((item, i) => {
                    return <Col md={3} key={i} style={{
                        marginBottom: 15
                    }}>
                        <Link
                            to={`movies?action=detail&id=${item.id}`}
                        >
                            <Card style={{
                                    borderRadius: 10
                            }}>
                                <Image rounded width="100%" src={item.backdrop_path && IMAGE_URL+item.backdrop_path} />
                                <Card.Body>
                                    <Card.Title>{String(item.title).length > 20 ? String(item.title).substr(0, 17)+"..." : item.title}</Card.Title>
                                    <p style={{ fontSize: 11 }}>{moment(item.release_date).format("LL")}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                })
            }
    </Row>
    
}


export default CardMedia
