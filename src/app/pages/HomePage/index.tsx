import Banner from 'app/components/Banner/Banner';
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import SliderHome from 'app/components/SliderHome/SliderHome';
import * as React from 'react';
import { Brrow } from '../Brrow';

export function HomePage() {
  return (
    <>
      <Header />
      <Brrow />
      <SliderHome />
      <Banner />
      <Footer />
    </>
  );
}
