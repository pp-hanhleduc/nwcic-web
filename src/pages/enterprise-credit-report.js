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
import { useRouter } from "next/router";
const EnterpriseCreditReport = () => {
  const { locale } = useRouter();
  const title =
    locale === "vi"
      ? "Báo cáo tín dụng doanh nghiệp"
      : "Enterprose Credit Report";
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
      <Enterprise lan={locale} />
      <CallToSection lan={locale} />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default EnterpriseCreditReport;
