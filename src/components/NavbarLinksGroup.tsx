import { useState } from "react";
import {Group,Box,Collapse,ThemeIcon,Text,UnstyledButton,rem,} from "@mantine/core";
import { IconCalendarStats, IconChevronRight } from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";
import { ActionIcon, RingProgress, Center } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { LinksNested } from "./NavbarNestedLinks";
import { Badge } from "@mantine/core";
interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  description:string
  initiallyOpened?: boolean;
  links?: { label: string; link: string; description:string  }[];
  Nested?: any;
}
export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  Nested,
}: LinksGroupProps) {
  
  const hasLinks = Array.isArray(links);
  const hasNested = Array.isArray(Nested);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const [url, setUrl] = useState("");

  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      // onClick={(event) => event.preventDefault()}
      style={{ display: "flex", justifyContent: "space-between" }}
    >{link.label}
      <Badge
        style={{
          fontSize: "10px",
          width: "xs",
          height: "xs",
          textAlign: "center",
        }}
      >
        <text style={{ fontSize: "10px", textAlign: "center" }}>2/10</text>
      </Badge>
    </Text>
  ));
  const linksNested = Nested.map((item) => (
    <LinksNested {...item} url={url} key={item.label} />
  ));
  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box
            onClick={() => {
              setUrl(label);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
            <RingProgress
              style={{ marginLeft: "var(--mantine-spacing-md)" }}
              size={40}
              thickness={3}
              roundCaps
              sections={[{ value: 40, color: "blue" }]}
              label={
                <Text c="blue" fw={700} ta="center" size="xs">
                  40%
                </Text>
              }
            />
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
      {hasNested ? <Collapse in={opened}>{linksNested}</Collapse> : null}
    </>
  );
}
