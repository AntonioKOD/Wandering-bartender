import Link from 'next/link';
import Image from 'next/image';
import wandering from '@/public/Wandering.svg';

export default function NavBar() {
  return (
    <header className="bg-[hsl(var(--background))] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={wandering} alt="Whiskey bottle" height={60} />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] font-medium transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] font-medium transition duration-200"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] font-medium transition duration-200"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] font-medium transition duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition duration-200"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}