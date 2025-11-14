import React from "react";
import { person } from "../db";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const user = person.find((p) => p.id === +id);
  if (!user) {
    return <div>Person not found</div>;
  }
  return (
    <div>
      <div> ID : {user.id}</div>
      <div> Name : {user.name}</div>
      <div> Age : {user.age}</div>
      <div> Gender : {user.gender}</div>
    </div>
  );
};

export default page;
