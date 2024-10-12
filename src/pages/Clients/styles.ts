import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PageTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
export const Page = styled(Link)`
  font-size: 20px;
`;
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
