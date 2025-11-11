// import React from "react";

// const About = () => {
//   return <div>{Add(10, 20)}</div>;
// };

// export default About;

// export function Add(a: number, b: number) {
//   return a + b;
// }

// about page
// backend - route.ts / route.js

// how many function can we use in page.tsx

// devesh : 1

import React from "react";
import { personInfo } from "./data";
const page = () => {
  return <div>{JSON.stringify(personInfo)}</div>;
};

export default page;
