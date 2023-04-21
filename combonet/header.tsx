import Link from "next/link";
import * as React from "react";
import { Headerdestop } from "./header/headerdestop";
import { Headermobile } from "./header/headermobile";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <>
      <Headerdestop />
      <Headermobile />
    </>
  );
}
