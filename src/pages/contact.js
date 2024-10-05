import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfoTwo from "@/components/ContactSection/ContactInfoTwo";
import ContactSectionTwo from "@/components/ContactSection/ContactSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterNine from "@/components/MainFooter/FooterNine";
import MapBox from "@/components/MapSection/MapBox";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";
import MainFooter from "@/components/MainFooter/MainFooter";
import { useRouter } from "next/router";
const Contact = () => {
  const { locale } = useRouter();
  const title = locale === "vi" ? "Liên hệ" : "Contact Us";
  return (
    <Layout pageTitle={title}>
      <Style />
      <HeaderOne lan={locale} />
      <MobileMenu lan={locale} />
      <SearchPopup lan={locale} />
      <PageBanner lan={locale} title={title} />
      <ContactSectionTwo lan={locale} />
      <ContactInfoTwo lan={locale} />
      <MapBox lan={locale} />
      <MainFooter lan={locale} normalPadding={false} />
    </Layout>
  );
};

export default Contact;
