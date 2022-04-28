import React, { useContext } from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import MyPopup from "../util/MyPopup";
function PostCard({
  post: {
    title,
    body,
    createdAt,
    id,
    username,
    likeCount,
    commentCount,
    likes,
  },
}) {
  const { user } = useContext(AuthContext);

  return (
    <Card fluid color="yellow">
      <Card.Content as={Link} to={`/posts/${id}`}>
        <Image
          floated="right"
          size="mini"
          src="https://semantic-ui.com/images/avatar/small/nan.jpg"
        />
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{username}</Card.Meta>
        {/* <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta> */}
        <Card.Description>
          {body.length > 200 ? `${body.substring(0, 200)}...` : body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <MyPopup
          content="Comment on post"
          trigger={
            <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
              <Button color="blue" basic>
                <Icon name="comment" />
              </Button>
              <Label basic color="blue" pointing="left">
                {commentCount}
              </Label>
            </Button>
          }
        ></MyPopup>
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  );
}

export default PostCard;
