import AgencySection from "@/components/AgencySection/AgencySection";
import PageBanner from "@/components/BannerSection/PageBanner";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FunFacts from "@/components/FunFacts/FunFacts";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";
import TeamSectionTwo from "@/components/TeamSection/TeamSectionTwo";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import AboutSectionTwo from "@/components/AboutSection/AboutSectionTwo";
import AboutSectionThree from "@/components/AboutSection/AboutSectionThree";
import AboutSix from "@/components/AboutSection/AboutSix";
import AboutSeven from "@/components/AboutSection/AboutSeven";
import AboutEight from "@/components/AboutSection/AboutEight";
import AboutNine from "@/components/AboutSection/AboutNine";
import AboutTen from "@/components/AboutSection/AboutTen";

import React from "react";
import { useRouter } from "next/router";

const About = () => {
  const { locale } = useRouter();
  const title = locale === "vi" ? "Giới thiệu" : "About Us";
  return (
    <Layout pageTitle={title}>
      <Style />
      <HeaderOne lan={locale} />
      <MobileMenu lan={locale} />
      <SearchPopup lan={locale} />
      <PageBanner lan={locale} title={title} />

      <AboutSectionThree lan={locale} />
      <AboutSix lan={locale} />
      <AboutSeven lan={locale} />

      <MainFooter lan={locale} />
    </Layout>
  );
};

export default About;
