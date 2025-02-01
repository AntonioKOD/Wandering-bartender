import {Resend} from 'resend';
import {NextRequest, NextResponse} from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();

    const {email, subject, message} = body;
    if (!email || !subject || !message) {
        return NextResponse.json({error: 'Please fill out all fields'});
    }

    try {
        const {data, error} = await resend.emails.send({
            from: 'The Roaming Mix <info@wanderingbartender.com>',
            to: `${email}`,
            subject: `${subject}`,
            text: `${message}`,
        });

        if (error) {
            return NextResponse.json({error}, {status: 400});
        }
        return NextResponse.json({message: 'Email sent!', data});
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: 'Something went wrong'}, {status: 500});
    }
}