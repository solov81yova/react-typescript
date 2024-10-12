import { PageTitle, PageWrapper, Page, NavContainer } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <PageTitle>Clients</PageTitle>
      <NavContainer>
        <Page to="/clients/google">Google</Page>
        <Page to="/clients/gmail">Gmail</Page>
        <Page to="/clients/edge">Edge</Page>
      </NavContainer>
    </PageWrapper>
  );
}
export default Clients;
