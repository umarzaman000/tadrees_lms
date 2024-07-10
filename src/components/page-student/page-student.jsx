import React from "react";
import { Text, Paper } from "@mantine/core";
import { Title } from "@mantine/core";
import { useSelector } from "react-redux";
import Lecture from "./lecture";
import Assignment from "./assignment";
import Quizze from "./quizze";
export default function Demo() {
  const lecture = useSelector((state) => state.lectureReducer.lecture);
  console.log("------->>", lecture);
  return (
    <>
      <Paper
        shadow="lg"
        radius="xl"
        withBorder
        p="xl"
        style={{
          marginTop: "50px",
          marginRight: "120px",
          marginLeft: "100px",
          alignSelf: "center",
        }}
      >
        {lecture?.key === "lectures" ? (
          <Lecture
            title={lecture.label}
            lecture_no={lecture.link}
            description={lecture.description}
          />
        ) : lecture?.key === "assignments" ? (
          <Assignment title={lecture.label} description={lecture.description} lecture_no={lecture.link} />
        ) : lecture?.key === "quizzes" ? (
          <Quizze title={lecture.label} description={lecture.description}lecture_no={lecture.link} />
        ) : (
          <Text>Empty</Text>
        )}
      </Paper>
    </>
  );
}
