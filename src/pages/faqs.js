import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import FaqsSection from "@/components/FaqsSection/FaqsSection";
import GetQuoteThree from "@/components/GetQuote/GetQuoteThree";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";
import { useRouter } from "next/router";
const Faqs = () => {
  const { locale } = useRouter();
  return (
    <Layout pageTitle="FAQ" lan={locale}>
      <Style lan={locale} />
      <HeaderOne lan={locale} />
      <MobileMenu lan={locale} />
      <SearchPopup lan={locale} />
      <PageBanner lan={locale} title="FAQ" />
      <FaqsSection lan={locale} />
      <GetQuoteThree lan={locale} />
      <CallToSection lan={locale} className="alternate" />
      <MainFooter lan={locale} />
    </Layout>
  );
};

export default Faqs;
