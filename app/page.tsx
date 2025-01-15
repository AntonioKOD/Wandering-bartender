import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import EventTypes from "@/components/EventTypes";
import CallToAction from "@/components/CallToAction";
import Head from "next/head";

export default function Home() {
  return (
      <>
      <Head>
          <title>The Wandering Bartender | Premium Mobile Bartending Services for Events</title>
          <meta name="description" content="The Wandering Bartender offers professional mobile bartending service for weddings, corporate events, and private parties. Elevate your event with custom cocktails and exceptional service"/>
          <meta name="keyowrds" content="alba restaurant, alba, quincy, massachusetts, bartender, mobile bartening services, professional bartenders, custom cocktails, event bartending, wedding bartending, corporate event, private party bartending, boston, drinks, bars, local bar"/>
          <meta property="og:title" content="The Wandering Bartender | Premium Mobile Bartending Services for Events"/>
          <meta property="og:description" content="The Wandering Bartender offers professional mobile bartending service for weddings, corporate events, and private parties. Elevate your event with custom cocktails and exceptional service"/>
          <meta property="og:url" content="https://wanderingbartender.com"/>
          <meta property="og:type" content="website"/>
          
      </Head>
      <HeroSection/>
      <Services/>
      <EventTypes/>
      <CallToAction/>
      <Footer/>
      
      </>
  );
}
