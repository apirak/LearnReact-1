import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail"
import ApproveCard from "./ApproveCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApproveCard>
        <div>
          <h1>Help me!!</h1>
          There is a book in a tree.
        </div>
      </ApproveCard>
      <ApproveCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45"
          comment="abc"
          avatar={"http://source.unsplash.com/50x50?" + Math.floor(Math.random() * 100) }
        />
      </ApproveCard>
      <ApproveCard>
        <CommentDetail
          author="Yam"
          timeAgo="Today at 5:15"
          comment="def"
          avatar={"http://source.unsplash.com/50x50?" + Math.floor(Math.random() * 100) }
        />
      </ApproveCard>
      <ApproveCard>
        <CommentDetail
          author="Pam"
          timeAgo="Today at 6:35"
          comment="ghi"
          avatar={"http://source.unsplash.com/50x50?" + Math.floor(Math.random() * 100) }
        />
      </ApproveCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));