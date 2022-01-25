import React from "react";
import { Button } from "../common/Button";
import { FieldSet, Form, Input, Label } from "../common/Form";

const RegisterForm: React.FC = () => {
  return (
    <Form>
      <FieldSet>
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" />
      </FieldSet>
      <FieldSet>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" />
      </FieldSet>
      <FieldSet>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </FieldSet>
      <FieldSet>
        <Label htmlFor="password2">Confirm Password</Label>
        <Input id="password2" type="password" />
      </FieldSet>
      <Button type="submit" color="primary" size="l">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
