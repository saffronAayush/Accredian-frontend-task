import React, { useEffect, useRef, useState } from "react";
import { useAppStore } from "../../store";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ReferralStats from "../components/ReferralStats";
import FAQsection from "./sections/FAQsection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import ReferSection from "./sections/ReferSection";
import ReferralBenefitsSection from "./sections/ReferralBenefitsSection";
import SupportSection from "./sections/SupportSection";

const navItems = [
  { label: "Refer", id: "refer" },
  { label: "FAQ's", id: "faqs" },
  { label: "Support", id: "support" },
  { label: "About Us", id: "aboutUs" },
];
const Home = () => {
  // use state *******************************************************************
  const [active, setActive] = useState("");

  // constants ********************************************************************
  const { user } = useAppStore();
  const sectionRefs = {
    refer: useRef(null),
    aboutUs: useRef(null),
    faqs: useRef(null),
    support: useRef(null),
  };

  // functions ******************************************************************************************************
  // 1. Scroll to the section when clicked
  const handleScroll = (id) => {
    setActive(id);
    const element = sectionRefs[id].current;
    if (element) {
      const headerOffset = 80; // Adjust the offset to stop before the header
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // useEffects *********************************************
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY === 0) setActive("");
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <Header />

      <Navbar navItems={navItems} handleScroll={handleScroll} active={active} />

      <HeroSection />
      {user && <ReferralStats />}
      <ReferSection ref={sectionRefs.refer} />
      <ReferralBenefitsSection />
      <FAQsection ref={sectionRefs.faqs} />
      <SupportSection ref={sectionRefs.support} />
      <FooterSection ref={sectionRefs.aboutUs} />
    </>
  );
};

export default Home;
