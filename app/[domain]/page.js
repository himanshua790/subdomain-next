import React from "react";

const Page = (props) => {
  const { params } = props;
  return <div>{params?.domain || ""}/Page</div>;
};

export default Page;
