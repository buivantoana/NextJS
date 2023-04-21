import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import axios from "axios";
import { GetStaticPropsContext } from "next";

interface Props {
  user: any[];
}

const PostComponent: FunctionComponent<Props> = ({ user }) => {
  return (
    <div>
      <p>{user[0].name} </p>
      <p>{user[0].email} </p>
    </div>
  );
};

export default PostComponent;
export async function getStaticPaths() {
  const response: any = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    paths: response.data.map((item: any) => ({
      params: { post: `${item.id}` },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // Lấy danh sách sản phẩm từ API

  let postid = context.params?.post;
  if (!postid) notFound: true;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?id=${postid}`
  );
  let user = response.data;
  return { props: { user } };
}
