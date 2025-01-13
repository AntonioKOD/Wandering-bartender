import Image from "next/image";
import {Button} from '@/components/ui/button'
import wine from '@/public/wine.png'

export default function HeroSection() {
  return (
    <section className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-16">
    <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center md:flex-row md:text-left">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          The Wandering Bartender
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Bringing the bar experience to your doorstep. Professional
          bartending services for any occasion.
        </p>
        <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))]">
            Book Now
          </Button>
          <Button variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:border-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary))]">
            Learn More
          </Button>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <Image
          src={wine}
          alt="Bartender serving a cocktail"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
  );
}
