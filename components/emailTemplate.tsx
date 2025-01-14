import * as React from 'react'


interface EmailTemplateProps {
    fullName: string,
    email: string,
    phone: number,
    eventDate: string,
    eventLocation: string,
    typeofEvent: string,
    guests: number,
    drinkMenu: string,
    specialREQUESTS: string,
    budget: number,
    eventPlannerEmail: string,
}


export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
    email,
    phone,
    eventDate,
    eventLocation,
    typeofEvent,
    guests,
    drinkMenu,
    specialREQUESTS,
    budget,
    eventPlannerEmail,
}) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Inquiry</h1>
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Full Name:</span> {fullName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {phone}
          </p>
          <p>
            <span className="font-semibold">Event Date:</span> {eventDate}
          </p>
          <p>
            <span className="font-semibold">Event Location:</span> {eventLocation}
          </p>
          <p>
            <span className="font-semibold">Type of Event:</span> {typeofEvent}
          </p>
          <p>
            <span className="font-semibold">Number of Guests:</span> {guests}
          </p>
          <p>
            <span className="font-semibold">Drink Menu:</span> {drinkMenu ? 'Yes' : 'No'}
          </p>
          <p>
            <span className="font-semibold">Special Requests:</span> {specialREQUESTS}
          </p>
          <p>
            <span className="font-semibold">Budget:</span> {budget}
          </p>
          <p>
            <span className="font-semibold">Event Planner Email:</span> {eventPlannerEmail}
          </p>
        </div>
      </div>
    )
}