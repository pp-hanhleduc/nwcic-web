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
import { useRouter } from "next/router";
const PersonalCreditReport = () => {
  const { locale } = useRouter();
  const title =
    locale === "vi" ? "Báo cáo tín dụng cá nhân" : "Personal Credit Report";
  const parentTitle = locale === "vi" ? "Giải pháp" : "Solutions";
  return (
    <Layout lan={locale} pageTitle={title}>
      <Style lan={locale} />
      <HeaderOne lan={locale} />
      <MobileMenu lan={locale} />
      <SearchPopup lan={locale} />
      <PageBanner
        title={title}
        page={title}
        parent={parentTitle}
        lan={locale}
      />
      <Individual1 lan={locale} />
      <CallToSection lan={locale} />
      <MainFooter normalPadding={false} lan={locale} />
    </Layout>
  );
};

export default PersonalCreditReport;
