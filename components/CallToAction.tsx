import Link from 'next/link';

export default function CallToAction() {
    return (
      <section className="relative py-16 ">
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative text-center text-gray-900">
          <h2 className="text-4xl font-bold mb-4">Let’s Raise the Bar for Your Next Event!</h2>
          <p className="text-lg mb-8">
            Experience the art of exceptional bartending with The Wandering Bartender. Let us craft unforgettable moments, one cocktail at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/quote"
              className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-600 hover:text-white transition duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
          <p className="mt-8">
            From intimate gatherings to grand celebrations across Massachusetts, we’re here to make your event extraordinary. Cheers to unforgettable memories!
          </p>
        </div>
      </section>
    );
  }