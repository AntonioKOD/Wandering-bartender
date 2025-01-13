import { FaCocktail, FaTools, FaUserFriends } from 'react-icons/fa';

export default function Services() {
  return (
    <section className="py-12 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[hsl(var(--foreground))]">
            Our Premium Bartending Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
            With over six years of bartending excellence, we offer unparalleled bar services tailored to elevate your event.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="text-center p-6 bg-[hsl(var(--card))] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4 text-[hsl(var(--primary))]">
              <FaTools className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
              Comprehensive Bar Setup
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              We handle all aspects of bar setup, ensuring a functional and aesthetically pleasing station that complements your event&apos;s theme.
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center p-6 bg-[hsl(var(--card))] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4 text-[hsl(var(--primary))]">
              <FaCocktail className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
              Expert Cocktail Crafting
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              Leveraging our extensive experience, we craft a diverse range of cocktails tailored to your preferences, including classic favorites and innovative mixes.
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center p-6 bg-[hsl(var(--card))] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4 text-[hsl(var(--primary))]">
              <FaUserFriends className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
              Exceptional Guest Service
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              We engage with guests courteously and professionally, enhancing their overall experience with responsible and attentive service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}