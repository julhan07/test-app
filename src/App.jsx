import './App.css';
import { withRouter, Switch, Route } from "react-router-dom"

import { Container } from "react-bootstrap"

import HomePage from "./pages"
import qs from "query-string"

import HeadApp from "./components/template/head"

function App(props) {

  const rQuery = qs.parse(props.location.search)
  
  return (
    <>
    <HeadApp  />
    <Container >
       <Switch>
          <Route exact path="/" component={() => <HomePage { ...rQuery } />} />
          <Route exact path="/movies" component={() => <HomePage { ...rQuery } />} />
      </Switch>
    </Container>
    </>
   
  );
}

export default withRouter(App);
