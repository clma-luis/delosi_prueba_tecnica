import LoginModule from "@/modules/LoginMudule";
import ValidateUser from "@/shared/hooks/useValidateUser";
import React from "react";

const LoginPage = () => {
  return (
    <ValidateUser>
      <div className="flex h-screen w-full items-center justify-center">
        <LoginModule />
      </div>
    </ValidateUser>
  );
};

export default LoginPage;
