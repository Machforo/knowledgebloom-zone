import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage1 from "@/assets/hero-education.jpg";
import heroImage2 from "@/assets/hero-education-2.jpg";
import heroImage3 from "@/assets/hero-education-3.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3];

export const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {heroImages.map((image, index) => (
          <CarouselItem key={index}>
            <img
              src={image}
              alt={`Professional learning environment ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};
