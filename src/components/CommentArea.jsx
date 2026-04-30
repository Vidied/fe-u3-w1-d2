import React from "react";
import CommentsList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    this.setState({ isError: false });
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNTc0ZmYwNDIwZDAwMTUxNTVhYTMiLCJpYXQiOjE3Nzc1NTUyNzksImV4cCI6MTc3ODc2NDg3OX0.bHGT5ng7O-UqVRR2RLyTzEgJ349N18syeUF_ruTx2qs",
          },
        },
      );
      if (res.ok) {
        let data = await res.json();
        this.setState({ comments: data, isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (err) {
      console.log("Errore fetch", err);
      this.setState({ isLoading: false, isError: true });
    }
  };
  render() {
    return (
      <div className="mt-3">
        {this.state.isError && <Error />}

        <CommentsList comments={this.state.comments} />
        <AddComment asin={this.props.asin} onNewComment={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
