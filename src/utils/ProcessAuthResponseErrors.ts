import {
  ErrorResponse,
  LoginErrors,
  RegisterErrors,
} from "../models/auth/AuthResponse";

const processLoginErrors = (res: ErrorResponse): LoginErrors => {
  const result: LoginErrors = {
    password: "",
    username: "",
    non_field: "",
  };

  if (Array.isArray(res.message)) {
    res.message.forEach((msg) => {
      const testMsg = msg.toLowerCase();
      if (testMsg.includes("username")) {
        result["username"] += `${msg} `;
      } else if (testMsg.includes("password")) {
        result["password"] += `${msg} `;
      } else {
        result["non_field"] += `${msg} `;
      }
    });
  } else {
    result["non_field"] = res.message;
  }

  return result;
};

const processRegisterErrors = (res: ErrorResponse): RegisterErrors => {
  const result: RegisterErrors = {
    password: "",
    username: "",
    email: "",
    non_field: "",
  };

  if (Array.isArray(res.message)) {
    res.message.forEach((msg) => {
      const testMsg = msg.toLowerCase();
      if (testMsg.includes("username")) {
        result["username"] += `${msg} `;
      } else if (testMsg.includes("password")) {
        result["password"] += `${msg} `;
      } else if (testMsg.includes("email")) {
        result["email"] += `${msg} `;
      } else {
        result["non_field"] += `${msg} `;
      }
    });
  } else {
    result["non_field"] = res.message;
  }

  return result;
};

export { processLoginErrors, processRegisterErrors };
