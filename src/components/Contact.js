import React from "react";
import {
  FormField,
  Button,
  Header,
  Form,
  Container,
} from "semantic-ui-react";

const contact = () => (
  <body className="backimg">
    <Container>
      <Form className="contact">
      <Header size="large" color="brown" textAlign="center">CONTACT US</Header>
        <FormField>
          <label>First Name</label>
          <input placeholder="First Name" />
        </FormField>
        <FormField>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </FormField>
        <FormField>
          <label>Phone number</label>
          <input placeholder="Whatsapp no.(if any)" />
        </FormField>
        <FormField>
          <label>Feedback</label>
          <textarea placeholder="Feedback" />
        </FormField>
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </Container>
  </body>
);

export default contact;
