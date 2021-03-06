import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegisterErrors } from "../../models/auth/AuthResponse";
import RegisterDto from "../../models/auth/RegisterDto";
import useAuthStore from "../../stores/AuthStore";
import { Button } from "../common/Button";
import { ErrorText, FieldSet, Form, Input, Label } from "../common/Form";

const RegisterForm: React.FC = () => {
  const [nonFieldError, setNonFieldError] = useState<string>("");
  const registerUser = useAuthStore((state) => state.register);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setError,
    formState: { errors },
  } = useForm<RegisterDto>({
    mode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterDto) => {
    const result = await registerUser(data);

    if ("user" in result) {
      reset();
      navigate("/login");
    } else {
      const resultErrors = result as RegisterErrors;
      setError("password", { message: resultErrors.password });
      setError("username", { message: resultErrors.username });
      setError("email", { message: resultErrors.email });
      setNonFieldError(resultErrors.non_field);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <main>
        <header>
          <h1>Register</h1>
        </header>

        <FieldSet>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            {...register("username", {
              required: true,
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
              maxLength: {
                value: 64,
                message: "Username must be at most 64 characters",
              },
            })}
          />
          <ErrorText>{errors.username?.message}</ErrorText>
        </FieldSet>
        <FieldSet>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          <ErrorText>{errors.email?.message}</ErrorText>
        </FieldSet>
        <FieldSet>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 64,
                message: "Password must be at most 64 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%@&? "\']).+$/,
                message:
                  "Password must contain one small and big letter, one digit and one special character",
              },
            })}
          />
          <ErrorText>{errors.password?.message}</ErrorText>
        </FieldSet>
        <FieldSet>
          <Label htmlFor="password2">Confirm Password</Label>
          <Input
            id="password2"
            type="password"
            {...register("password2", {
              required: true,
              validate: (value) => {
                const { password } = getValues();
                return password === value || "Passwords should match!";
              },
            })}
          />
          <ErrorText>{errors.password2?.message}</ErrorText>
        </FieldSet>

        <Button type="submit" color="primary" size="l">
          Register
        </Button>

        <ErrorText nonFieldError>{nonFieldError}</ErrorText>
      </main>
    </Form>
  );
};

export default RegisterForm;
