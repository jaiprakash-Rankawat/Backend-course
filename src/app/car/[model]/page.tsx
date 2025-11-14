import React from "react";

const Page = async ({ params }: { params: { model: string } }) => {
  const { model } = await params;
  return <div className="bg-yellow-300 h-screen w-screen ">{model}</div>;
};

export default Page;
