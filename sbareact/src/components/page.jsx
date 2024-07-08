import React from "react";

const page = () => {
  //normal function
  function abcd() {
    console.log("i am function");
  }

  abcd();

  //Aero function

  const abcd = () => {
    document.write("learn aero function");
  };
  abcd();

  //simple return function

  function retn() {
    const a = "javascript";
    return a;
  }
  //return aero function
  const aerofn = () => {
    const f = "java";
    return f;
  };

  console.warn(retn());

  return <div>Page</div>;
};

export default page;
