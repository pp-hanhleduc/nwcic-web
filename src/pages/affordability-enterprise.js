import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";
import Institution2 from "@/components/Solutions/Institution2";

const EnterpriseAffordability = () => {
  return (
    <Layout pageTitle="Process Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Khả năng chi trả doanh nghiệp"
        page="Khả năng chi trả doanh nghiệp"
        parent="Giải pháp"
      />
      <Institution2 />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default EnterpriseAffordability;
