
import React from 'react'

function quizze  ({title,description,lecture_no})  {
  return (<>
    <h3>lecture_no: {lecture_no}</h3>
      <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </>
    )
}

export default quizze