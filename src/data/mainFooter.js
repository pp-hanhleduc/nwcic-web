import demoBg from "@/images/background/footer-bg-2.jpg";
import logo from "@/images/logo.png";
import logo3 from "@/images/logo-3.png";
import logo6 from "@/images/update-01-10-2021/logo-6-light.png";
import logo7 from "@/images/update-01-10-2021/logo-7-light.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5-light.png";

export const footer = {
  year: new Date().getFullYear(),
  author: "New World CIC",
};

export const mainFooterDemo = {
  ...footer,
  demoBg,
  title: "Create Stunning Website Now!",
  tagline: "Purchase linoor Template Now",
  templateLink: "#",
};

export const mainFooter = {
  logo,
  logo3,
  logo5,
  logo6,
  logo7,
  logo8,
  bg: demoBg,
  title: "Let’s Start Working Together",
  about:
    "There are many variation of passages of lorem ipsum available, but the majority suffered.",
  about2: "The new corporate agency theme",
  about3:
    "We’ve grown our business on a set of \n three building blocks. Enjoy the \n people you work.",
  text: "The leading credit solution provider in Vietnam.",
  address:
    "12th Floor, Diamond Flower Tower, 48 Le Van Luong, Thanh Xuan, Hanoi, Vietnam",
  address3:
    "12th Floor, Diamond Flower Tower, 48 Le Van Luong, Thanh Xuan, Hanoi, Vietnam",
  address2:
    "12th Floor, Diamond Flower Tower, 48 Le Van Luong, Thanh Xuan, Hanoi, Vietnam",
  phone: "0886 019 189",
  phone2: "+84 886 019 189",
  email: "support@nwcic.vn",
  textBottom:
    "Sign up for our latest news & articles. We won’t give you spam mails.",
  subscribeText:
    "Register and get notified about the news & updates before it gets too late.",
  socials: [
    {
      id: 1,
      href: "#",
      icon: "fab fa-facebook-square",
    },
    {
      id: 2,
      href: "#",
      icon: "fab fa-twitter",
    },
    {
      id: 3,
      href: "#",
      icon: "fab fa-instagram",
    },
    {
      id: 4,
      href: "#",
      icon: "fab fa-pinterest-p",
    },
  ],
  links: [
    {
      id: 1,
      href: "/about",
      title: "About Us",
    },
    {
      id: 2,
      href: "/services",
      title: "Solutions",
    },
    {
      id: 3,
      href: "/contact",
      title: "Contact Us",
    },
    {
      id: 4,
      href: "/blog",
      title: "Latest News",
    },
    {
      id: 5,
      href: "/faqs",
      title: "FAQ",
    },
  ],
  ...footer,
  newses: [
    {
      id: 1,
      image: "footer-1-1.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
    {
      id: 2,
      image: "footer-1-2.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
  ],
};
