import { About } from "@/components/About/About";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { Welcome } from "@/components/Welcome/Welcome";
import { BackgroundBeams } from "@/components/Welcome/background-beams";
import { WhatWeDo } from "@/components/WhatWeDo/WhatWeDo";
import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";

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
