import GallerySection from "@/components/Gallery/GallerySection/GallerySection";
import { Hero } from "@/components/Hero/Hero";
import { LocationSection } from "@/components/LocationSection/LocationSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import Services from "@/components/TopServices/TopServices";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TeamSection />
      <GallerySection />
      {/* <GoogleReviews /> */}
      <LocationSection />
    </>
  );
}
