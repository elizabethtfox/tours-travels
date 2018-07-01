import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    list: {}
  };
  // When this component mounts, grab the list with the _id of this.props.match.params.id
  componentDidMount() {
    API.getList(this.props.match.params.id)
      .then(res => this.setState({ list: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.list.category}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Items</h1>
              <p>
                {this.state.list.items}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Lists</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
