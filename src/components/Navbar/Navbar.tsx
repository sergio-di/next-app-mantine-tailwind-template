"use client"
import { useState } from 'react';
import { Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import Link from "next/link";

const links = [
  { link: '/#', label: 'Home' },
  { link: '/#about-us', label: 'Chi siamo' },
  { link: '/#what-we-do', label: 'Cosa Facciamo' },
  { link: '/#contact-us', label: 'Contattaci' },
];

export function Navbar() {
  const [] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
      </Container>
      {/* <ThemeToggle/>*/}

    </header>
  );
}


