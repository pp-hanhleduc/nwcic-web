import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FeatureSeven from "@/components/FeaturesSection/FeatureSeven";
import FeatureSix from "@/components/FeaturesSection/FeatureSix";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import VideoOne from "@/components/VideoSection/VideoOne";
import React from "react";
import { useRouter } from "next/router";
const Sustainability = () => {
  const { locale } = useRouter();
  const title = locale === "vi" ? "Phát triển bền vững" : "Sustainability";
  return (
    <Layout pageTitle={title}>
      <Style />
      <HeaderOne lan={locale} />
      <MobileMenu lan={locale} />
      <SearchPopup lan={locale} />
      <PageBanner lan={locale} title={title} page={title} />
      <VideoOne lan={locale} />
      <FeatureSeven lan={locale} />
      <CallToSectionTwo className="alternate" lan={locale} />
      <MainFooter />
    </Layout>
  );
};

export default Sustainability;
