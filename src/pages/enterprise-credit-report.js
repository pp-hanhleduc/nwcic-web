import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Enterprise from "@/components/Solutions/Enterprise";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const EnterpriseCreditReport = () => {
  return (
    <Layout pageTitle="Process Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Báo cáo tín dụng Doanh nghiệp"
        page="Báo cáo tín dụng Doanh nghiệp"
        parent="Giải pháp"
      />
      <Enterprise />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default EnterpriseCreditReport;
