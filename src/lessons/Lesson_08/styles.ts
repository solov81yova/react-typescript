import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 40px;
  padding: 100px;
`;

export const ButtonControl = styled.div`
  width: 300px;
`;

const commonBoxStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border: 2px solid black;
  padding: 40px;
  border-radius: 8px;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;

export const Box1 = styled.div`
  ${commonBoxStyles}
  background-color: blue;
`;

export const Box2 = styled.div`
  ${commonBoxStyles}
  background-color: red;
`;

export const Box3 = styled.div`
  ${commonBoxStyles}
  background-color: green;
`;