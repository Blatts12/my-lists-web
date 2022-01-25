import React from "react";
import { useForm } from "react-hook-form";
import LoginDto from "../../models/auth/LoginDto";
import useAuthStore from "../../stores/AuthStore";
import { Button } from "../common/Button";
import { FieldSet, Form, Input, Label } from "../common/Form";

const LoginForm: React.FC = () => {
  const login = useAuthStore((state) => state.login);
  const { register, handleSubmit, reset } = useForm<LoginDto>();
  const onSubmit = async (data: LoginDto) => {
    const result = await login(data);

    if (result.user) reset();
    else {
      console.log(result);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <main>
        <header>
          <h1>Login</h1>
        </header>

        <FieldSet>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            {...register("username", { required: true })}
          />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
        </FieldSet>
        <Button type="submit" color="primary" size="l">
          Login
        </Button>
      </main>
    </Form>
  );
};

export default LoginForm;
