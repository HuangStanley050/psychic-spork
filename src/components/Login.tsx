import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { loginStart } from "../store/actions/authActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppAction } from "../store/actions/actionTypes";

interface loginInput {
  email: string;
  password: string;
}

interface IProps {
  login: () => void;
}

const useForm = () => {
  const [form, setValue] = useState<loginInput | { email: ""; password: "" }>({
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

  return [form, handleChange, resetFields] as const;
};

const Login = ({ login }) => {
  const [form, handleChange, resetFields] = useForm();

  const submitHandler = e => {
    e.preventDefault();
    console.log(form);
    login(form);
    resetFields();
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

const mapDispatch = (dispatch: Dispatch<AppAction>) => ({
  login: (userInfo: loginInput) => dispatch(loginStart(userInfo))
});
export default connect(
  null,
  mapDispatch
)(Login);
