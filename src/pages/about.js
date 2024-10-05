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

import React from "react";
import { useRouter } from "next/router";

const About = () => {
  const { locale } = useRouter();
  const title = locale === "vi" ? "Liên hệ" : "About Us";
  return (
    <Layout pageTitle="About Us">
      <Style />
      <HeaderOne lan={locale} />
      <MobileMenu lan={locale} />
      <SearchPopup lan={locale} />
      <PageBanner lan={locale} title={title} />
      <AboutSection lan={locale} />

      <ParallaxSection lan={locale} />
      <AgencySection lan={locale} />

      <MainFooter lan={locale} />
    </Layout>
  );
};

export default About;
