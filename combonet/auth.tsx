import React from "react";
import axios from "../axios/axios";

import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

export default function Auth(option?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    revalidateOnFocus: false,
    ...option,
  });
  let firtloading: boolean = profile === undefined && error === undefined;

  const login = async (payload: any) => {
    await axios.post("login", payload);
    await mutate();
  };
  const logout = async () => {
    await axios.post("logout");
    await mutate({}, false);
  };

  return {
    profile,
    error,
    login,
    logout,
    firtloading,
  };
}
