import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { ContactUsContainer, Title, InputsContainer } from "./styles";

function ContactUs() {
  const validationSchema = Yup.object().shape({
    full_name: Yup.string()
      .required("Full name is required field")
      .min(3, "The minimum full name length is 3")
      .max(50, "The maximum full name length is 50"),
    phone: Yup.string()
      .required("Phone number is required field")
      .min(4, "The minimum phone number length is 4")
      .max(20, "The maximum phone number length is 20"),
    email: Yup.string()
      .required("Email field is required")
      .email("Invalid Email format")
      .min(6, "The minimum Email length is 6")
      .max(60, "The maximum Email length is 60"),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone: "",
      email: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log("Request works");
      console.log(values);
      console.log(helpers);
    },
  });

  return (
    <ContactUsContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="contactus-full_name"
          label="Full name*"
          placeholder="Your full name"
          name="full_name"
          type="text"
          value={formik.values.full_name}
          onChange={formik.handleChange}
          error={formik.errors.full_name}
        />
        <Input
          id="contactus-phone"
          label="Phone*"
          placeholder="Your phone number"
          name="phone"
          type="tel"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
        <Input
          id="contactus-email"
          label="Email"
          placeholder="Your email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
      </InputsContainer>
      <Button type="submit" name="SEND REQUEST" />
    </ContactUsContainer>
  );
}
export default ContactUs;
