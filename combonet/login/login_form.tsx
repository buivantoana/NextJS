import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Input } from "../Input/Input";
import { VisibilityOff } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";

export interface ILoginFormProps {
  onSubmit?: (payload: {}) => void;
}

export function LoginForm({ onSubmit }: ILoginFormProps) {
  const [showpassword, setshowpassword] = React.useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleloginsubmit = (value: any) => {
    onSubmit?.(value);
  };

  const handleClickShowPassword = () => {
    setshowpassword(!showpassword);
  };

  return (
    <Box component='form' onSubmit={handleSubmit(handleloginsubmit)}>
      <Input name='username' control={control} label={"username"} />
      <Input
        type={showpassword ? "text" : "password"}
        name='password'
        control={control}
        label={"password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                edge='end'>
                {showpassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button type='submit'>Login</Button>
    </Box>
  );
}
