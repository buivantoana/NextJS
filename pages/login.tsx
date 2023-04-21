import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import Auth from "@/combonet/auth";
import { LoginForm } from "@/combonet/login/login_form";

const Home: FunctionComponent = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { profile, error, login, logout } = Auth({ revalidateOnMount: false });
  let router = useRouter();
  const Handlelogin = async (payload: any) => {
    login(payload);
    router.push("/about");
  };
  const Handlelogout = async () => {
    logout();
  };

  return (
    <div>
      <p>{JSON.stringify(profile || "", null, 4)}</p>
      {/* <label htmlFor=''>Username</label>
      <input
        type='text'
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <label htmlFor=''>Password</label>
      <input
        type='text'
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={Handlelogin}>Login</button> */}
      <button onClick={Handlelogout}>Logout</button>
      <LoginForm onSubmit={Handlelogin} />
    </div>
  );
};
export default Home;
