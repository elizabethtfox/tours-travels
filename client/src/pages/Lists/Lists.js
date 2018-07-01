import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Lists extends Component {
  state = {
    lists: [],
    category: "",
    items: ""
  };

  componentDidMount() {
    this.loadLists();
  }

  loadLists = () => {
    API.getLists()
      .then(res =>
        this.setState({ lists: res.data, category: "", items: "" })
      )
      .catch(err => console.log(err));
  };

  deleteList = id => {
    API.deleteList(id)
      .then(res => this.loadLists())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.category) {
      API.saveList({
        category: this.state.category,
        items: this.state.items,
      })
        .then(res => this.loadLists())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Make a List Here</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (required)"
              />
              <TextArea
                value={this.state.items}
                onChange={this.handleInputChange}
                name="items"
                placeholder="Items (Optional)"
              />
              <FormBtn
                disabled={!(this.state.category)}
                onClick={this.handleFormSubmit}
              >
                Submit List
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Lists</h1>
            </Jumbotron>
            {this.state.lists.length ? (
              <List>
                {this.state.lists.map(list => (
                  <ListItem key={list._id}>
                    <Link to={"/lists/" + list._id}>
                      <strong>
                        {list.category}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteList(list._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Lists;
