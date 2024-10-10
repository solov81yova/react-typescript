import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageTitle, PageWrapper, ButtonControl, Text } from "./styles";

function Google() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <PageTitle>Google</PageTitle>
      <Text>
        Google is an American search engine company, founded in 1998 by Sergey
        Brin and Larry Page.Since 2015, Google has been a subsidiary of the
        holding company Alphabet, Inc. More than 70% of worldwide online search
        requests are handled by Google, placing it at the heart of most Internet
        users' experience.
      </Text>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Google;
