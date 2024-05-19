import Header from "@/components/(main)/Header";
import Hero from "@/components/(main)/Hero";
import Recommendation from "@/components/(main)/Recommendation";
import BestSeller from "@/components/(main)/Best-Seller";
import BannerSection from "@/components/(main)/Banner-Section";
import Footer from "@/components/(main)/Footer";
import FooterMobile from "@/components/(main)/FooterMobile";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Recommendation />
    <BestSeller />
    <BannerSection />
    <Footer />
    <FooterMobile />
    </>
  );
}
