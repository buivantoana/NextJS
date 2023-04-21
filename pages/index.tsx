import Head from "next/head";

import { Main } from "../combonet/main";
import { Hero } from "../combonet/home/hero";
import { Recent } from "../combonet/home/recen_post";
import { Featured } from "@/combonet/home/featured";
import { WorkList } from "@/combonet/work/worklist";
import { Seo } from "@/combonet/seo/seo";

function Home() {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <Hero />
        <Recent />
        <Featured />
      </Main>
    </>
  );
}

Home.Layout = Main;
export default Home;
