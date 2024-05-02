import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";
import { UserButton } from "./UserButton";
import { LinksGroup } from "./NavbarLinksGroup";
import classes from "./NavbarNested.module.css";
import logo from "../../assets/logo.png";
import '../sign-in/login.css';
import Image from 'next/image';

const mockdata = [
  {
    label: "Intro Web Development",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Lecture1", link: "/" },
      { label: "Lecture2", link: "/" },
      { label: "Lecture3", link: "/" },
      { label: "Lecture4", link: "/" },
    ],
  },
  {
    label: "Assinments",
    icon: IconCalendarStats,
    links: [
      { label: "Assinment1", link: "/" },
      { label: "Assinment2", link: "/" },
      { label: "Assinment3", link: "/" },
    ],
  },
  {
    label: "Quizes",
    icon: IconCalendarStats,
    links: [
      { label: "Quize1", link: "/" },
      { label: "Quize2", link: "/" },
      { label: "Quize3", link: "/" },
    ],
  },
];

export default function NavbarNested() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav style={{ height: "550px" }} className={classes.navbar}>
      <Image width={160} height={48} src={logo} />
    <ScrollArea className={classes.links}>
    
  <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
