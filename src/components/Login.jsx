import { Button } from "bootstrap";
import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form>
            <p className="h5 text-center mb-4">Acessar Conta</p>
            <div className="grey-text">
              <input
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <input
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <Button>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;