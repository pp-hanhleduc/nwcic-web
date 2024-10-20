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

const PersonalIdentity = () => {
  return (
    <Layout pageTitle="Process Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Xác minh danh tính"
        page="Xác minh danh tính"
        parent="Giải pháp"
      />
      <Individual2 />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default PersonalIdentity;
