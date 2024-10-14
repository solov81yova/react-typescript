import styled from "@emotion/styled";

export const BlogContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 590px;
  min-height: 450px;
  max-height: fit-content;
  border: 1px solid #000000;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
  gap: 30px;
`;

export const Title = styled.p`
  color: #000000;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  justify-content: center;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextArea = styled.textarea`
  color: black;
  font-size: 20px;
  font-weight: normal;
  height: 150px;
`;
