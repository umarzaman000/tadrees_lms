import { Group, Code, ScrollArea, rem ,Grid} from "@mantine/core";
import RichTextEdit from "../../components/RichTextEditor.tsx"
import { UserButton } from "../../components/UserButton.tsx";
import { LinksGroup } from "../../components/NavbarLinksGroup.tsx";
import classes from "../../components/NavbarNested.module.css";
import logo from "../../assets/logo.png";
import Page from "../../components/page-student.jsx"
import '../../components/login.css';
import mockdata from "../../components/mokdata.js"
import Image from 'next/image';
export default function NavbarNested() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Grid>
            <Grid.Col span={4} >
    <nav className={classes.navbar} style={{height:"550px"}} >
      <Image width={160} height={48} src={logo} />
    <ScrollArea className={classes.links}>
    
  <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
    </Grid.Col>
    <Grid.Col  span={8} >
 {/* <RichTextEdit/> */}
 <Page/>
    </Grid.Col>
    </Grid>
  );
}
