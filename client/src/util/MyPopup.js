import { Popup } from "semantic-ui-react";
import React from "react";

function MyPopup({ content, trigger }) {
  return <Popup inverted content={content} trigger={trigger} />;
}

export default MyPopup;
