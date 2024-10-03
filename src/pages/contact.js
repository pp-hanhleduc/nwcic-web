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

const Contact = () => {
  return (
    <Layout pageTitle="Contact Us">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contact Us" />
      <ContactSectionTwo />
      <ContactInfoTwo />
      <MapBox />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Contact;
