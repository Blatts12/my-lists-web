import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginErrors } from "../../models/auth/AuthResponse";
import LoginDto from "../../models/auth/LoginDto";
import useAuthStore from "../../stores/AuthStore";
import { Button } from "../common/Button";
import { ErrorText, FieldSet, Form, Input, Label } from "../common/Form";

const LoginForm: React.FC = () => {
  const [nonFieldError, setNonFieldError] = useState<string>("");
  const login = useAuthStore((state) => state.login);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<LoginDto>();
  const onSubmit = async (data: LoginDto) => {
    const result = await login(data);

    if ("user" in result) {
      reset();
    } else {
      const resultErrors = result as LoginErrors;
      setError("password", { message: resultErrors.password });
      setError("username", { message: resultErrors.username });
      setNonFieldError(resultErrors.non_field);
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
          <ErrorText>{errors.username?.message}</ErrorText>
        </FieldSet>
        <FieldSet>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
          <ErrorText>{errors.password?.message}</ErrorText>
        </FieldSet>

        <Button type="submit" color="primary" size="l">
          Login
        </Button>

        <ErrorText nonFieldError>{nonFieldError}</ErrorText>
      </main>
    </Form>
  );
};

export default LoginForm;
