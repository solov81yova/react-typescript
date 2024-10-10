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
import { APP_ROUTES } from "constans/routes";
import App from "App";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(APP_ROUTES.HOME);
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
            to={APP_ROUTES.HOME}
          >
            Home
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to={APP_ROUTES.CONTACT_US}
          >
            Contact Us
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to={APP_ROUTES.ABOUT}
          >
            About
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to={APP_ROUTES.LOGIN}
          >
            Login
          </HeaderLink>
        </HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
      <AppFooter>
        <FooterLogo onClick={goToHomePage}>App Logo</FooterLogo>
        <FooterNav>
          <FooterLink to={APP_ROUTES.HOME}>Home</FooterLink>
          <FooterLink to={APP_ROUTES.CONTACT_US}>Contact Us</FooterLink>
          <FooterLink to={APP_ROUTES.ABOUT}>About</FooterLink>
          <FooterLink to={APP_ROUTES.LOGIN}>Login</FooterLink>
        </FooterNav>
      </AppFooter>
    </LayoutWrapper>
  );
}

export default Layout;
