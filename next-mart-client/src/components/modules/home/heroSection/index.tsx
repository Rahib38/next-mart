import CupImage from "@/assets/cup-with-headphone.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div
      className={`${styles.banner} container mx-auto border-2 border-white rounded-3xl mt-10`}
    >
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="pl-12">
          <h1 className="text-4xl font-bold leading-normal">
            Don&apos;t Miss Out on <br /> These Unbeatable Black <br /> Friday
            Deals!
          </h1>
          <p className="py-3">
            Save big this Balck Friday with unbeatable deals on tech, home
            essentials, fashion, and more! Limited Stock.
          </p>
          <Button className="rounded-full mr-2">Buy Now</Button>
          <Button className="rounded-full " variant={"outline"}>All Products</Button>
        </div>
        <div className="flex items-center justify-center">
          <Image src={CupImage} alt="cupImage"  />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
