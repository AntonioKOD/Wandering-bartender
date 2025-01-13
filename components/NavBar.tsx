import Link from 'next/link'
import Image from 'next/image'
import wandering from '@/public/Wandering.svg'


export default function NavBar(){
    return (
        <div className='flex items-center justify-between p-4 bg-[hsl(var(--background))] sticky top-0 z-50 shadow-md'> 
            <Image src={wandering} alt="Whiskey bottle" height={60} />

            <nav className='flex items-center space-x-4'>
                <Link href='/' className='text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]'>
                    Home
                </Link>
                <Link href='/services' className='text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]'>
                    Services
                </Link>
                <Link href='/about' className='text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]'>
                    About
                </Link>
                <Link href='/contact' className='text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]'>
                    Contact
                </Link>
            </nav>
        </div>
    )
}