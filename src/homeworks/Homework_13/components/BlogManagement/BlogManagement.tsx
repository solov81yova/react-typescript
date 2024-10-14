import { useState, createContext, ChangeEvent, MouseEvent } from "react";

import Card from "homeworks/Homework_13/components/Card/Card";
import Button from "components/Button/Button";

import { BlogContainer, Title, TextAreaContainer, TextArea } from "./styles";
import { PostData } from "./types";

export const PostContext = createContext<PostData | undefined>(undefined);

function BlogManagement() {
  const [postData, setPostData] = useState<undefined | PostData>(undefined);
  const [inputTextValue, setInputTextValue] = useState<string>("");

  const onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputTextValue(event.target.value);
  };

  const getPostData = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputTextValue !== "") {
      setPostData({ post: inputTextValue });
      setInputTextValue("");
    }
  };

  return (
    <PostContext.Provider value={postData}>
      <BlogContainer>
        <Title>Write your post</Title>
        <TextAreaContainer>
          <TextArea value={inputTextValue} onChange={onChangePost} />
        </TextAreaContainer>
        <Button type="submit" name="Crate post" onClick={getPostData} />
        {postData && <Card />}
      </BlogContainer>
    </PostContext.Provider>
  );
}
export default BlogManagement;
