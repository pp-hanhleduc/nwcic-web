import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewsSection from "@/components/NewsSection/NewsSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";
import { useRouter } from "next/router";
const BlogGrid = () => {
  const { locale } = useRouter();
  const title = locale === "vi" ? "Tin tức & Sự kiện" : "News & Events";
  return (
    <Layout pageTitle={title}>
      <Style />
      <HeaderOne lan={locale} />
      <MobileMenu lan={locale} />
      <SearchPopup lan={locale} />
      <PageBanner title={title} lan={locale} />
      <NewsSection lan={locale} showTitle={false} isMore />
      <MainFooter lan={locale} />
    </Layout>
  );
};

export default BlogGrid;
