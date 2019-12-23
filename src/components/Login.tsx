import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

interface loginInput {
  email: string;
  password: string;
}

const useForm = () => {
  const [form, setValue] = useState<loginInput>({
    email: "",
    password: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const resetFields = () => {
    setValue({
      ...form,
      email: "",
      password: ""
    });
  };

  return [form, handleChange, resetFields];
};

const Login: React.FC = props => {
  const [form, handleChange, resetFields] = useForm();

  const submitHandler = e => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <Container style={{ marginTop: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form onSubmit={submitHandler} style={{ width: "60%", margin: "0 auto" }}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@email.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="your password"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
