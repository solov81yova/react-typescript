import Button from "../Button/Button";
import Input from "../Input/Input";

import "./styles.css";

function LoginForm() {
  return (
    <form className="login-form-container">
      <p className="title">Login form</p>
      <div className="inputs-container">
        <Input
          id="login-email"
          label="Email"
          placeholder="Enter your email"
          name="email"
        />
        <Input
          id="login-password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
        />
      </div>
      <Button type="submit" name="Login" />
    </form>
  );
}

export default LoginForm;