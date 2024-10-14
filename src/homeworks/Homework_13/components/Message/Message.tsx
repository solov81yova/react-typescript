import { useContext } from "react";

import { PostContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";

import { MessageInfo, MessageTitle, MessageWrapper } from "./styles";

function Message() {
  const postData = useContext(PostContext);

  return (
    <MessageWrapper>
      <MessageTitle>published the post:</MessageTitle>
      {postData && (
        <>
          <MessageInfo>{postData.post}</MessageInfo>
        </>
      )}
    </MessageWrapper>
  );
}

export default Message;
