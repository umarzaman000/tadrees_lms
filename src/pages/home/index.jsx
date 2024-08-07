import React, { useState, useEffect } from "react";
import {
  Group,
  Button,
  Modal,
  TextInput,
  Checkbox,
  Box,
  Flex,
  Grid,
} from "@mantine/core";
import { rem, ScrollArea } from "@mantine/core";
import RichTextEdit from "../../components/RichTextEditor.tsx";
import { UserButton } from "../../components/UserButton.tsx";
import { LinksGroup } from "../../components/NavbarLinksGroup.tsx";
import classes from "../../components/NavbarNested.module.css";
import logo from "../../assets/logo.png";
import Page from "../../components/page-student/page-student.jsx";
import "../../components/login.css";
import Image from "next/image";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { transform } from "typescript";

const AuthenticationModal = ({
  opened,
  onClose,
  teacherChecked,
  studentChecked,
  handleTeacherChange,
  handleStudentChange,
}) => {
  return (
    <Modal
      style={{ borderRadius: "50px" }}
      opened={opened}
      onClose={onClose}
      title="Authentication"
    >
      <Box maw={340} mx="auto">
        <form>
          <TextInput withAsterisk label="Email" placeholder="your@email.com" />
          <TextInput
            withAsterisk
            label="User Name"
            placeholder="your@email.com"
          />
          <TextInput
            withAsterisk
            label="Password"
            placeholder="your@email.com"
          />
          <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
          >
            <Checkbox
              mt="md"
              label="Teacher"
              type="checkbox"
              checked={teacherChecked}
              onChange={handleTeacherChange}
            />
            <Checkbox
              mt="md"
              label="Student"
              type="checkbox"
              checked={studentChecked}
              onChange={handleStudentChange}
            />
          </Flex>

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};

export default function NavbarNested() {
  const [opened, { open, close }] = useDisclosure(false);
  const [teacherChecked, setTeacherChecked] = useState(false);
  const [studentChecked, setStudentChecked] = useState(false);

  const handleTeacherChange = () => {
    setTeacherChecked(!teacherChecked);
    if (!teacherChecked) {
      setStudentChecked(false);
    }
  };

  const handleStudentChange = () => {
    setStudentChecked(!studentChecked);
    if (!studentChecked) {
      setTeacherChecked(false);
    }
  };

  const handleClose = () => {
    close();
  };
  const [courses, setCourses] = useState([]);
  const links = courses?.map((item, index) => (
    <LinksGroup {...item} key={item.label} />
  ));
  const transformData = (courseData, assignments, quizzes) => {
    console.log("quizzes", quizzes);
  
    return courseData.map((course) => ({
      label: course.name,
      icon: "IconNotes", // Assuming a string identifier for the icon
      initiallyOpened: false,
      links: [],
      Nested: [
        {
          label: "Lectures",
          icon: "IconCalendarStats", // Assuming a string identifier for the icon
          links: course.lecture.map((lect) => ({
            label: lect.title,
            link: lect.lecture_no,
            description: lect.description,
            key: "lectures", // Add description field here
          })),
        },
        {
          label: "Assignments",
          icon: "IconCalendarStats", // Assuming a string identifier for the icon
          links: assignments.map((assignment) => ({
            label: assignment.title,
            link: assignment.lecture_no,
            description: assignment.description,
            key: "assignments", // Add description field here
          })),
        },
        {
          label: "Quizzes",
          icon: "IconCalendarStats", // Assuming a string identifier for the icon
          links: quizzes.map((quizze) => ({
            label: quizze.title,
            link: quizze.lecture_no,
            description: quizze.questions.map((question) => ({
            description: question.description,
            })),
            key: "quizzes", 
          })),
        }
      ],
    }));
  };
  

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const [enrolledresponse, classresponse] = await Promise.all([
          axios.get(`http://localhost:3000/api/enrolleds?userId=${userId}`),
          axios.get(`http://localhost:3000/api/classsingle?userId=${userId}`),
        ]);
        console.log("enrolledresponse", enrolledresponse);
        console.log("classresponse", classresponse);
        const mockdatas = transformData(
          enrolledresponse.data.courseData,
          classresponse.data.classData[0].assignments,
          classresponse.data.classData[0].quizzes
        );

        console.log("mocdatas", mockdatas);
        setCourses(mockdatas);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []); // Add dependencies if needed
  return (
    <Grid>
      <Grid.Col span={3}>
        <nav
          className={classes.navbar}
          style={{ height: "680px", width: "auto" }}
        >
          <Image width={160} height={48} src={logo} />
          <Button variant="light" onClick={open} className={classes.button2}>
            Create User
          </Button>
          <ScrollArea className={classes.links}>
            <div className={classes.linksInner}>
              {courses.length &&
                courses?.map((item, index) => (
                  <LinksGroup {...item} key={item.label} />
                ))}
            </div>
          </ScrollArea>

          <AuthenticationModal
            opened={opened}
            onClose={handleClose}
            teacherChecked={teacherChecked}
            studentChecked={studentChecked}
            handleTeacherChange={handleTeacherChange}
            handleStudentChange={handleStudentChange}
          />

          <div className={classes.footer}>
            <UserButton />
          </div>
        </nav>
      </Grid.Col>
      <Grid.Col span={9}>
        <Page />
      </Grid.Col>
    </Grid>
  );
}
