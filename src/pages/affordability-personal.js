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
import { useRouter } from "next/router";
const PersonalAffordability = () => {
  const { locale } = useRouter();
  const title =
    locale === "vi" ? "Khả năng chi trả cá nhân" : "Personal Adffordability";
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
      <Institution1 lan={locale} />
      <CallToSection lan={locale} />
      <MainFooter normalPadding={false} lan={locale} />
    </Layout>
  );
};

export default PersonalAffordability;
