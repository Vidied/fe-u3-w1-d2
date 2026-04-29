import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        className="h-100"
        style={{ border: this.state.selected ? "2px solid red" : "none" }}
        onClick={() => {
          this.setState({ selected: !this.state.selected });
        }}
      >
        <Card.Img
          style={{ height: "250px", objectFit: "cover" }}
          variant="top"
          src={this.props.book.img}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="text-truncate">
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
