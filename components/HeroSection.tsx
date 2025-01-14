import Image from "next/image";

import wine from '@/public/wine.png'
import Link from "next/link";

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
  <Link
    href="/quote"
    className="inline-block px-6 py-3 text-center text-lg font-medium rounded-lg shadow-md 
               bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] 
               hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] 
               transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))] focus:ring-offset-2"
  >
    Book Now
  </Link>
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
