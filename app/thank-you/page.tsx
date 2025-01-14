import Link from "next/link";
import thanks from '@/public/thanks.svg'
import Image from "next/image";

export default function ThankYouPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="max-w-lg text-center bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            We have received your submission. Our team will review your information and get back to you as soon as possible.
          </p>
          <div className="flex justify-center">
            <Image
              src={thanks}
              alt="Thank You"
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
          </div>
          <div className="mt-6">
            <Link
              href="/"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }