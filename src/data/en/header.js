import icon from "@/images/icons/close-1-1.png";
import logo4 from "@/images/logo-2.png";
import logo3 from "@/images/logo-3.png";
import logo2 from "@/images/logo-dark.png";
import logo1 from "@/images/logo.png";
import logo6 from "@/images/update-01-10-2021/logo-6-dark.png";
import logo7 from "@/images/update-01-10-2021/logo-7-dark.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5.png";
import logo10 from "@/images/update-09-06-2021/logo-6.png";
import logo9 from "@/images/update-26-02-2021/logo-horizontal-portfolio.png";

const home = {
  id: 1,
  name: "Home",
  href: "/",
};

const navItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Services",
    href: "#services",
  },
  {
    id: 4,
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 5,
    name: "Team",
    href: "#team",
  },
  {
    id: 6,
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 7,
    name: "Blog",
    href: "#blog",
  },
  {
    id: 8,
    name: "Contact",
    href: "#contact",
  },
];

const navItems = [
  home,
  {
    id: 2,
    name: "About Us",
    href: "/about",
    subNavItems: [
      {
        id: 1,
        name: "Who we are ",
        href: "/about",
      },
      {
        id: 2,
        name: "Vision",
        href: "/vision",
      },
      {
        id: 3,
        name: "Sustainable Development",
        href: "/sustainability",
      },
    ],
  },

  {
    id: 3,
    name: "Solutions",
    href: "/services",
  },
  {
    id: 4,
    name: "FAQ",
    href: "/faqs",
  },

  {
    id: 5,
    name: "News",
    href: "/blog-grid",
  },
  {
    id: 6,
    name: "Contact Us",
    href: "/contact",
  },
];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
];

const headerDataEn = {
  title: "New World CIC - The leading credit solution provider in Vietnam.",
  title2: "Welcome to New World CIC.",
  title3: "Welcome to New World CIC.",
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  navItems,
  navItemsTwo,
  address:
    "12th Diamond Flower Tower, 48 Le Van Luong, Thanh Xuan, Hanoi, Vietnam",
  phone: "0886 019 189",
  phone2: "+84 886 019 189",
  email: "support@nwcic.vn",
  icon,
  socials,
  text: "The leading credit solution provider in Vietnam.",
};

export default headerDataEn;
