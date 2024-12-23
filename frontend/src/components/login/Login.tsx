import React, { Dispatch, SetStateAction, useState } from "react";
import { authService } from "../../api/auth.service";
import { Button, Input, InputLabel } from "@mui/material";
import Cookies from 'js-cookie';

interface LoginProps {
    setToken: Dispatch<SetStateAction<string | undefined>>;
  }

const Login: React.FC<LoginProps> = ({setToken }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { accessToken } = await authService.login(username, password);

      setToken(accessToken);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleLogin}>
          <InputLabel >
            <p>Username</p>
            <Input type="text" value={username}  onChange={(e) => setUsername(e.target.value)}/>
          </InputLabel >
          <InputLabel >
            <p>Password</p>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </InputLabel >
          <div>
            <Button type="submit">Submit</Button >
          </div>
        </form>
      </div>
    )
  }

  export default Login;