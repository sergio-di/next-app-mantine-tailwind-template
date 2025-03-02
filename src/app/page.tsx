import { Welcome } from "@/components/Welcome/Welcome";
import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import {
  AppShell,
} from "@mantine/core";

export default function Home() {
  return (

    <AppShell >
   




      {/*<Navbar/>*/}
      <Welcome />
      <ColorSchemesSwitcher /> 
    {/* <About/> */}
      {/* <WhatWeDo/> */}
      {/* <ContactUs/> */}
        {/* <Footer/>   */}


    </AppShell>
  );
}
