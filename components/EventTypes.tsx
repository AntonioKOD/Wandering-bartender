import Image from 'next/image';
import wedding from '@/public/wedding.png'
import corporate from '@/public/corporate.png'
import privateParty from '@/public/private.png'
export default function EventTypes() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Events We Serve</h2>
          <p className="mt-4 text-lg text-gray-600">
            From Boston to the Berkshires, we bring exceptional bartending to every event across Massachusetts.
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Event 1 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src={wedding}
              alt="Wedding Event"
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Weddings</h3>
            <p className="text-gray-600">
              Celebrate your special day with custom cocktails and professional bar service that delights your guests.
            </p>
          </div>

          {/* Event 2 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src={corporate}
              alt="Corporate Event"
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Corporate Events</h3>
            <p className="text-gray-600">
              Impress your colleagues and clients with a bar experience tailored to professional gatherings.
            </p>
          </div>

          {/* Event 3 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src={privateParty}
              alt="Private Party"
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Private Parties</h3>
            <p className="text-gray-600">
              Whether it’s a birthday or an anniversary, we elevate your celebrations with exceptional bartending.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}