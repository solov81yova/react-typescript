import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageTitle, PageWrapper, ButtonControl, Text } from "./styles";

function Edge() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <PageTitle>Edge</PageTitle>
      <Text>
        Microsoft Edge is your AI-powered browser that helps you achieve more.
        With unique features like Copilot, Designer, Vertical tabs, Coupons,
        Read Aloud, and VPN, Edge helps you save time, save money and protect
        your online privacy. Make the most of your time online with Copilot in
        Edge.
      </Text>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Edge;
