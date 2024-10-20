import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ProcessOne from "@/components/ProcessSection/ProcessOne";
import Individual2 from "@/components/Solutions/Individual2";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";
import Institution1 from "@/components/Solutions/Institution1";

const PersonalAffordability = () => {
  return (
    <Layout pageTitle="Process Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Khả năng chi trả cá nhân"
        page="Khả năng chi trả cá nhân"
        parent="Giải pháp"
      />
      <Institution1 />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default PersonalAffordability;
