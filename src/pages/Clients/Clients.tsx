import { PageTitle, PageWrapper, Page } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <PageTitle>Clients</PageTitle>
      <ul>
        <li>
          <Page to="/clients/google">Google</Page>
        </li>
      </ul>
      <ul>
        <li>
          <Page to="/clients/gmail">Gmail</Page>
        </li>
      </ul>
      <ul>
        <li>
          <Page to="/clients/edge">Edge</Page>
        </li>
      </ul>
    </PageWrapper>
  );
}
export default Clients;
