import { useNavigate } from "react-router-dom";
import {v4} from "uuid";

// import { APP_ROUTES } from "constans/routes";
import { UserImg } from "assets";
import { EMPLOYEE_APP_ROUTES } from "./types";


import {
  LayoutWrapper,
  AppHeader,
  AppMain,
  HeaderLink,
  HeaderNav,
  HeaderLogo,
  LogoImg
} from "./styles";
import { EmployeeLayoutProps } from "./types";

function EmployeeLayout({ children }: EmployeeLayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(EMPLOYEE_APP_ROUTES.CREATE_EMPLOYEE);
  };
  const appLinks = {
    [EMPLOYEE_APP_ROUTES.CREATE_EMPLOYEE]: "Create Employee",
    [EMPLOYEE_APP_ROUTES.EMPLOYEES]: "Employees",
    
  };
  const headerLinks = Object.keys(appLinks).map((link: string) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={link}
      >
        {appLinks[link as keyof typeof appLinks]}
      </HeaderLink>
    );
  });

  

  return (
    <LayoutWrapper>
      <AppHeader>
        <HeaderLogo onClick={goToHomePage}>
          <LogoImg src={UserImg} alt="Logo" />
        </HeaderLogo>
        <HeaderNav>{headerLinks}</HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
     
    </LayoutWrapper>
  );
}

export default EmployeeLayout;
