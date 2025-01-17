import { Button } from '@/components/ui/button'
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card'
import Link from 'next/link'

interface PricingCardProps {
    title: string;
    description: string;
    features: string[];
    price: string;
}

export default function PricingCard({title, description, features, price}: PricingCardProps) {
    return (
        <Card className='max-w-sm mx-auto border border-gray-200 shadow-md'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className='list-disc pl-5 space-y-2'>
                    {features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <p className='text-2xl font-bold mt-4'>{price}</p>
            </CardContent>
            <CardFooter>
                <Link href='/quote'><Button className='bg-emerald-600 text-white py-2 px-4 rounded'>Book Now</Button></Link>

            </CardFooter>
        </Card>

    )
}