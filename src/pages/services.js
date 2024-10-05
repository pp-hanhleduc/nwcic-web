import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionOne from "@/components/ServicesSection/ServicesSectionOne";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import React from "react";
import { useRouter } from "next/router";

const Services = () => {
  const { locale } = useRouter();
  const strTitle = locale === "vi" ? "Giải pháp" : "Solutions";
  return (
    <Layout pageTitle={strTitle}>
      <Style />
      <HeaderOne lan={locale} />
      <MobileMenu lan={locale} />
      <SearchPopup lan={locale} />
      <PageBanner lan={locale} title={strTitle} />
      <ServicesSectionThree lan={locale} className="padd-top" />
      <ServicesSectionOne lan={locale} />
      <WeWorkSection lan={locale} />
      <CallToSectionTwo lan={locale} className="alternate" />
      <MainFooter lan={locale} />
    </Layout>
  );
};

export default Services;
