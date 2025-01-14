import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">About Us</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Welcome to The Wandering Bartender</CardTitle>
            <CardDescription>
              Bringing the bar experience to your doorstep. Professional bartending services for any occasion.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>
              With over six years of bartending excellence, our journey began with a passion for mixology and a commitment to elevating events through exceptional bar services.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
            <CardDescription>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Comprehensive Bar Setup:</strong> We handle all aspects of bar setup, ensuring a functional and aesthetically pleasing station that complements your event&apos;s theme.</li>
                <li><strong>Expert Cocktail Crafting:</strong> Leveraging our extensive experience, we craft a diverse range of cocktails tailored to your preferences, including classic favorites and innovative mixes.</li>
                <li><strong>Exceptional Guest Service:</strong> We engage with guests courteously and professionally, enhancing their overall experience with responsible and attentive service.</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>
              To elevate events with exceptional bartending services, creating memorable experiences for our clients and their guests.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium  transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}