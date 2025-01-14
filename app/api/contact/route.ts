import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();

    const {fullName, email, message} = body;

    if (!fullName || !email || !message) {
        return NextResponse.json({ error: "Please fill out all fields" });
    }

    try{
        const {data, error} = await resend.emails.send({
            from: "Bartender <info@wanderingbartender.com>",
            to: "antonio_kodheli@icloud.com",
            subject: "Contact Form Submission",
            text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
        });
        
        if(error){
            return NextResponse.json({ error }, { status: 400 });
        }
        return NextResponse.json({ message: "Email sent!", data });
    }catch(error){
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

}

