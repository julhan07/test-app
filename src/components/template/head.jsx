import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap"

function Head() {
  return (    
      <Navbar style={{
      borderBottom: "2px solid #dcdcdc4d",
        marginBottom: 20
    }}>
        <Container >
          <Navbar.Brand href="/" >
            <img width={90} style={{ marginRight: 30 }} src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav.Link style={{ color: "#ffff" }} href="/">Home</Nav.Link>
          <Nav.Link style={{ color: "#ffff" }} href="/movies">Movies</Nav.Link>
          <Navbar.Collapse className="justify-content-end">
            <Form inline method="GET" action="/movies" >
                <FormControl  name="q" type="text" style={{ width: 350, borderRadius: 20 }} placeholder="Search" className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>
        </Container>    
    </Navbar>);
}

export default Head;
