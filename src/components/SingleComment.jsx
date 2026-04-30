import { ListGroupItem, Button } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + comment._id,
        {
          method: "DELETE",

          headers: {
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNTc0ZmYwNDIwZDAwMTUxNTVhYTMiLCJpYXQiOjE3Nzc1NTUyNzksImV4cCI6MTc3ODc2NDg3OX0.bHGT5ng7O-UqVRR2RLyTzEgJ349N18syeUF_ruTx2qs",
          },
        },
      );
      if (res.ok) {
        alert("Commento eliminato");
      } else {
        alert("Errore cancellazione");
      }
    } catch (err) {
      alert("Errore nella cancellazione", err);
    }
  };

  return (
    <ListGroupItem className="d-flex justify-content-center align-items-center">
      {comment.comment} Voto: {comment.rate}
      <Button variant="danger" onClick={deleteComment}>
        Elimina
      </Button>
    </ListGroupItem>
  );
};

export default SingleComment;
