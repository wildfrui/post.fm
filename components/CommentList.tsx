import React from "react";
import Comment from "./Comment";

type CommentListProps = {};

const CommentList: React.FC<CommentListProps> = () => {
  return (
    <div>
      <Comment
        author={"Artyom"}
        text="ajdvnsaohvbpsdabb sdv bs dvis advh basdvsd vb sdbvsdav"
        likes={4}
      ></Comment>
      <Comment
        author={"Artyom"}
        text="ajdvnsaohvbpsdabb sdv bs dvis advh basdvsd vb sdbvsdav"
        likes={4}
      ></Comment>
      <Comment
        author={"Artyom"}
        text="ajdvnsaohvbpsdabb sdv bs dvis advh basdvsd vb sdbvsdav"
        likes={4}
      ></Comment>
    </div>
  );
};

export default CommentList;
