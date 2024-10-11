import { useNavigate } from "react-router-dom";
import {
  LayoutWrapper,
  AppHeader,
  AppFooter,
  AppMain,
  HeaderLink,
  HeaderNav,
  HeaderLogo,
  FooterLink,
  FooterLogo,
  FooterNav,
} from "./styles";
import { LayoutProps } from "./types";
import Clients from "pages/Clients/Clients";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  const goToWebsite = () => {
    navigate("/google");
    navigate("/gmail");
    navigate("/edge");
  };
  return (
    <LayoutWrapper>
      <AppHeader>
        <HeaderLogo onClick={goToHomePage}>App Logo</HeaderLogo>
        <HeaderNav>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/contactUs"
          >
            Contact Us
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/login"
          >
            Login
          </HeaderLink>
          <HeaderLink
            onClick={goToWebsite}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients"
          >
            Clients
            {/* <Clients></Clients> */}
          </HeaderLink>
        </HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
      <AppFooter>
        <FooterLogo onClick={goToHomePage}>App Logo</FooterLogo>
        <FooterNav>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
          <FooterLink to="/clients">Clients</FooterLink>
        </FooterNav>
      </AppFooter>
    </LayoutWrapper>
  );
}

export default Layout;
