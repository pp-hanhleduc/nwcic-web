import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ProcessOne from "@/components/ProcessSection/ProcessOne";
import Individual1 from "@/components/Solutions/Individual1";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PersonalCreditReport = () => {
  return (
    <Layout pageTitle="Process Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Báo cáo tín dụng cá nhân"
        page="Báo cáo tín dụng cá nhân"
        parent="Giải pháp"
      />
      <Individual1 />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default PersonalCreditReport;
