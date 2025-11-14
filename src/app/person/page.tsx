import React from "react";
import { person } from "./db";
const Person = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex justify-center items-center flex-col">
      <div>Welcom to Person Page</div>
      {person.map((p) => (
        <div
          key={p.id}
          className="flex flex-col gap-2 p-2 border border-white rounded bg-yellow-300 text-black font-bold"
        >
          <div>Person ID : {p.id}</div>
          <div>Person Name : {p.name}</div>
          <div>Person Age : {p.age}</div>
          <div>Person Gender : {p.gender}</div>
        </div>
      ))}
    </div>
  );
};

export default Person;
