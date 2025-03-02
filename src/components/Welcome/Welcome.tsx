"use client";
import { Anchor, Container, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import { FlipWordsDemo } from './FlipWordsDemo';
import { BackgroundBeams } from './background-beams';
import { Tastone } from "./hover-border-gradient";
import Link from "next/link";


import Image from 'next/image';


const links = [
  { link: '/#', label: 'Home' },
  { link: '/#about-us', label: 'Chi siamo' },
  { link: '/#what-we-do', label: 'Cosa Facciamo' },
  { link: '/#contact-us', label: 'Contattaci' },
];
export function Welcome() {
  return (
    <>

      <Title className={classes.title} ta="center" mt={100}>
        Benvenuto su{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'grape', to: 'orange', deg: 235 }}>
          amount
          
        </Text>

        <FlipWordsDemo/>
          
        </Title>
        <div className="m-10 flex justify-center text-center">

        
        <Link
      key= 'Contattaci'
      href='/#contact-us'
      className={classes.link}>
    </Link>


      </div>


        <BackgroundBeams/>



    </>
  );
}
