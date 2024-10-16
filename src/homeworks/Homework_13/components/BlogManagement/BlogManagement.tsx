import { useState, createContext, ChangeEvent, FormEvent } from "react";

import Card from "homeworks/Homework_13/components/Card/Card";
import Button from "components/Button/Button";

import { BlogWrapper, Title, TextAreaContainer, TextArea } from "./styles";

export const PostContext = createContext<string>("");

function BlogManagement() {
  const [postData, setPostData] = useState<string>("");
  const [inputTextValue, setInputTextValue] = useState<string>("");

  const onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputTextValue(event.target.value);
  };

  const getPostData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputTextValue !== "") {
      setPostData(inputTextValue);
      setInputTextValue("");
    }
  };

  return (
    <PostContext.Provider value={postData}>
      <BlogWrapper onSubmit={getPostData}>
        <Title>Write your post</Title>
        <TextAreaContainer>
          <TextArea
            name="post"
            value={inputTextValue}
            placeholder="Enter your message to post"
            onChange={onChangePost}
          />
        </TextAreaContainer>
        <Button type="submit" name="Crate post" />
        {postData && <Card />}
      </BlogWrapper>
    </PostContext.Provider>
  );
}
export default BlogManagement;
