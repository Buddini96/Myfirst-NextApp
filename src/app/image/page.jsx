import React from "react";
import Image from "next/image";
import img1 from "../../../public/img1.jpg";

function page() {
  return (
    <>
      <h1>Image Component</h1>
      <Image src={img1} 
      alt="sampleImage" 
      // style={{width: "100%", objectFit: "cover"}}
      className="imgCont"></Image>
    </>
  );
}

export default page;
