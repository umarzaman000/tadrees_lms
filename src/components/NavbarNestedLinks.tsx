import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, rem } from '@mantine/core';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import classes from './NavbarLinksGroup.module.css';
import { ActionIcon, RingProgress,  Center, Badge } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  Nested?:any;
}

export function LinksNested({ icon: Icon, label, initiallyOpened, links,Nested }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  console.log('Nested--->',Nested)
  const items = (hasLinks ? links : []).map((link) => (
    <Text<'a'>
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
      style={{display:"flex" ,justifyContent: 'space-between',}}
    >
      {link.label}<Badge style={{ fontSize: "10px", width: "xs", height: "xs", textAlign: "center" }}>
  <text style={{ fontSize: "10px", textAlign: "center" }}>2/10</text>
</Badge>

    </Text>
  ));

  return (
    <>
      <UnstyledButton style={{
        width: '100%',
      }}  onClick={() => setOpened((o) => !o)} className={`${classes.control} ${classes.nestedNavbar}`  }>
        <Group justify="space-between" gap={0} >
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
           <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box   ml="md">{label}</Box>
            <RingProgress
          style={{ marginLeft: "var(--mantine-spacing-md)" }}

            size={40}
             thickness={3}
             roundCaps
        sections={[{ value: 40, color: 'blue' }]}
        label={<Text c="blue" fw={700} ta="center" size="xs">40%</Text>}/>
        </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export function NavbarNestedGroup() {
  return (
    <Box mih={220} p="md">
      <LinksNested {...mockdata} />
    </Box>
  );
}