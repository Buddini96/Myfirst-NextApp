import Link from "next/link";
import React from "react";

function page({ params }) {
  return (
    <>
      <div>Veggies item {params.vegid}</div>
      <div>
        <Link href="/">Back to Veggies</Link>
      </div>
    </>
  );
}

export default page;
