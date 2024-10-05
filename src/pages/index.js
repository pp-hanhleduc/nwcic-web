import AboutSection from "@/components/AboutSection/AboutSection";
import AgencySection from "@/components/AgencySection/AgencySection";
import BannerOne from "@/components/BannerSection/BannerOne";
import CallToSection from "@/components/CallToSection/CallToSection";
import FunFactsOne from "@/components/FunFacts/FunFactsOne";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import LiveSection from "@/components/LiveSection/LiveSection";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewsSection from "@/components/NewsSection/NewsSection";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionOne from "@/components/ServicesSection/ServicesSectionOne";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import TrustedSection from "@/components/TrustedSection/TrustedSection";
import WeDOSection from "@/components/WeDOSection/WeDOSection";
import React from "react";
import { useRouter } from "next/router";
const Home = () => {
  const { locale } = useRouter();
  const title = locale === "vi" ? "Trang chủ" : "Home";
  return (
    <Layout lan={locale} pageTitle={title}>
      <Style />
      <HeaderOne lan={locale} />
      <MobileMenu lan={locale} />
      <SearchPopup />
      <BannerOne lan={locale} />
      <ServicesSectionOne lan={locale} />
      <AboutSection lan={locale} />
      <LiveSection lan={locale} />
      <WeDOSection lan={locale} />
      <FunFactsOne lan={locale} />
      <TrustedSection lan={locale} />
      <ParallaxSection lan={locale} />
      <AgencySection lan={locale} />
      <NewsSection lan={locale} />
      <CallToSection lan={locale} />
      <MainFooter lan={locale} normalPadding={false} />
    </Layout>
  );
};

export default Home;
