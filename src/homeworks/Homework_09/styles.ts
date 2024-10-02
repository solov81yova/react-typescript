import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  gap: 30px;
`;

export const Title9 = styled.p`
  color: #1f27f5;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

export const FormElementControl = styled.div`
  width: 400px;
`;

export const Text = styled.p`
  font-size: 30px;
  color: black;
  text-align: justify;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgb(101 101 104 / 40%), 0 0 0 2px white,
    0.3em 0.3em 1em rgb(64 64 246 / 70%);
`;
