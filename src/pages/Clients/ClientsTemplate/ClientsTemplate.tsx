import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, Description, ButtonControl, TextContainer } from "./styles";
import { ClientsTemplateProps } from "./types";

function ClientsTemplate({ children }: ClientsTemplateProps) {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <TextContainer>
      <Description>{children}</Description>
      </TextContainer>
      <ButtonControl>
        <Button name="Go back" onClick={goback} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default ClientsTemplate;