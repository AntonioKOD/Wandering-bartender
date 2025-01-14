import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY );


export async function POST(req: NextRequest) {
    const body = await req.json()

    const {fullName,
        email,
        phone,
        eventDate,
        eventLocation,
        typeofEvent,
        drinkMenu,
        guests,
        specialREQUESTS,
        budget,
        eventPlannerEmail} = body;


        if(!fullName || !email || !phone || !eventDate || !eventLocation || !typeofEvent || !guests || !specialREQUESTS || !budget || !eventPlannerEmail){
            return NextResponse.json({ error: 'Please fill out all fields' })
        }

        try{
            const {data, error} = await resend.emails.send({
                from: 'Bartender <info@wanderingbartender.com>',
                to: 'antonio_kodheli@icloud.com',
                subject: 'Event Inquiry',
                react: await EmailTemplate({fullName, email, phone, eventDate, eventLocation, typeofEvent, guests, specialREQUESTS, budget, eventPlannerEmail, drinkMenu}),

            })
            if(error){
                return NextResponse.json({error}, {status: 400})


            }

            return NextResponse.json({message: 'Email sent!', data})


        }catch(error){
            console.error(error)
            return NextResponse.json({error: 'Something went wrong'}, {status: 500})

        }
    
}
