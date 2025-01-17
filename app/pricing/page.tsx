import PricingCard from "@/components/PricingCard";

export default function Pricing() {
    const packages = [
        {
            title: 'Basic Package',
            description: 'Ideal for small events',
            features: [
                'Basic Bar Setup',
                'Standard cocktail selection',
                'Up to 3 hours of service',
            ],
            price: "$300",
        },
        {
            title: 'Premium Package',
            description: "Perfect for weddings and large events",
            features: [
                'Premium Bar Setup',
                'Expert cocktail selection',
                'Up to 5 hours of service',
                'Priority booking',
            ],
            price: "$500",
        },
        {
            title: 'Deluxe Package',
            description: 'For those who want the best',
            features: [
                "Customized bar setup",
                "Personalized cocktail menus",
                "Up to 7 hours of service",
                "Priority booking",
            ],
            price: "$900",
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 mt-36">
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                    <PricingCard key={pkg.title} {...pkg} />
                ))}
            </div>

            {/* Custom Request Section */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                    Looking for Something More Unique?
                </h2>
                <p className="text-gray-600 mt-2">
                    If you have a special event in mind and need a custom bar experience, we’d love to bring your vision to life. 
                    Let’s craft something unforgettable! 🍸✨
                </p>
                <a 
                    href="/contact" 
                    className="mt-4 inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}