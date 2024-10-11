import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
export const ButtonControl = styled.div`
  width: 300px;
`;
export const Text = styled.p`
font-size: 18px;
text-align: justify;
`;
export const TextContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 150px;
  max-height: fit-content;
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  gap: 30px;
  margin-bottom: 10px;
`;