import React from "react";

function assignment({ title, lecture_no, description }) {
  return (
    <>
      <h3>lecture_no: {lecture_no}</h3>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </>
  );
}

export default assignment;
