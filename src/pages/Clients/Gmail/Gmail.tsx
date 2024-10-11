import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageTitle, PageWrapper, ButtonControl, Text, TextContainer } from "./styles";

function Gmail() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <PageTitle>Gmail</PageTitle>
      <TextContainer>
      <Text>
        Gmail (pronounced Gee-mail) is a free web-based email service that
        provides users with 15 GB of storage for messages and the ability to
        search for specific messages. The Gmail program also automatically
        organizes successively related messages into a conversational thread.
      </Text>
      </TextContainer>
      
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Gmail;
