import React from "react";

const Lecture = ({ title, lecture_no, description }) => {
  console.log("======", lecture_no);
  return (
    <>
      <h3>lecture_no: {lecture_no}</h3>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
 
    </>
  );
};

export default Lecture;
