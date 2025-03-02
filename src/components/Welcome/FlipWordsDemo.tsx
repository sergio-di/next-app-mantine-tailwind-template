import React from "react";
import { FlipWords } from "./flip-words";
import classes from './Welcome.module.css';

export function FlipWordsDemo() {
  const words = [ "meravigliosi", "scintillanti", "stupefacenti","spettacolari"];
  const wordsTemp= [ "grande", "fantastico", "stupefacente","travolgente"];

  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div
    className={classes.subtitle}>
       
       
         {/*  I tuoi siti */}
        
        
         Presto qualcosa di 
        <FlipWords words={wordsTemp} /><br/>
      </div>
    </div>
  );
}
