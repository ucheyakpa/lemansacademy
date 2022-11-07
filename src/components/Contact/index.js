import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactImage from "../../images/teacher.png";
import {
  ContactSection,
  ContactContainer,
  InfoContainer,
  ImageP,
  ImageHead,
  ImageContainer,
  Image,
  FormContainer,
  FormHeader,
  Form,
  Input,
  TextArea,
  Button,
  Label,
  Select,
  Option,
  Alert,
} from "./ContactElements";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    learning: "",
    message: "",
  });
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_jgk3ywq", "template_6t9cecs", values, "bMl8NQX0gluC_eQzD")
      .then(
        (res) => {
          console.log("SUCCESS", res);
          setValues({
            fullName: "",
            email: "",
            learning: "",
            message: "",
          });
          setStatus(true);
        },
        (error) => {
          console.log("FAILED", error);
        }
      );
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const renderAlert = () => {
    return <Alert>Your message was sent successfully!!</Alert>;
  };

  return (
    <ContactSection>
      <ContactContainer id="contact">
        <InfoContainer>
          <ImageContainer>
            <Image src={ContactImage} alt="CONTACT" />
          </ImageContainer>
          <ImageP>Contact Us</ImageP>
          <ImageHead>Let's talk about your Learning</ImageHead>
        </InfoContainer>

        <FormContainer>
          {status && renderAlert()}
          <Form onSubmit={handleSubmit}>
            <FormHeader>Get a home lesson tutor</FormHeader>

            <Label id="name">Name</Label>
            <Input
              type="text"
              name="fullName"
              htmlFor="name"
              value={values.fullName}
              onChange={handleChange}
              required
            />

            <Label id="email">E-mail</Label>
            <Input
              type="email"
              name="email"
              htmlFor="email"
              value={values.email}
              onChange={handleChange}
              required
            />

            <Select
              name="learning"
              onChange={handleChange}
              defaultValue="choose"
            >
              <Option value="choose" disabled>
                Choose Lesson
              </Option>
              <Option value="Home Lesson">Home Lesson</Option>
              <Option value="coding">Coding</Option>
              <Option value="Graphic Design">Graphic Design</Option>
              <Option value="Web Design">Web Design</Option>
              <Option value="Lesson & skill">Lesson & skill</Option>
            </Select>

            <Label id="message">Your message here</Label>
            <TextArea
              value={values.message}
              name="message"
              htmlFor="message"
              onChange={handleChange}
              required
            />
            {status && renderAlert()}
            <Button type="submit" value="Submit" />
          </Form>
        </FormContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
