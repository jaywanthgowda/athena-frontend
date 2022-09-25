import Home from '../components/Home/Home';
import {About} from '../components/About/About';

import { HeaderMegaMenu as Header } from '../components/Header/Header';
import { FooterSocial as Footer } from '../components/Footer/Footer';
import { Divider } from '@mantine/core';
import {Features} from '../components/Features/Features';
import Support from '../components/Support/Support';
import { HeroText } from '../components/Hero/Hero';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroText />
      <Home/>
      <Divider></Divider>
      <Features/>
      <Divider></Divider>
      <About/>
      <Divider></Divider>
      <Support/>
      <Footer/>
    </>
  );
}
