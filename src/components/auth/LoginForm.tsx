import React from "react";
import { Button } from "../common/Button";
import { FieldSet, Form, Input, Label } from "../common/Form";

const LoginForm: React.FC = () => {
  return (
    <Form>
      <FieldSet>
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" />
      </FieldSet>
      <FieldSet>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </FieldSet>
      <Button type="submit" color="primary" size="l">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
