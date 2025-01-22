'use client'
import { useState } from "react";
import React from "react";
import Head from 'next/head';

export default function ContactPage() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        message: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        console.log(data);
        setForm({
            fullName: "",
            email: "",
            message: "",
        });
    };

    return (
        <div>
            <Head>
                <title>Contact Us</title>
                <meta name="title" content="Contact Us | The Wandering Bartender"/> 
                <meta property="og:title" content="Contact Us | The Wandering Bartender" />
                <meta name="description" content="Reach out to the Wandering Bartender for inquiries about our services, availability, or to book your event. We're here to assist you with all your bartending needs."/>
                <meta property="og:description" content="Reach out to the Wandering Bartender for inquiries about our services, availability, or to book your event. We're here to assist you with all your bartending needs." />
                <meta name="keywords" content="contact professional bartenders, mobile bartending inquiries, event bartending contact, hire a bartender, bartending services communication"/>
            </Head>
            <div className="min-h-screen py-12 px-6">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Contact Us</h1>
                        <p className="text-gray-600 text-center mb-8">
                            Have questions or need more information? Fill out the form below, and we’ll get back to you shortly.
                        </p>

                        {/* Phone Number Section */}
                        <div className="text-center mb-8">
                            <p className="text-lg font-semibold text-gray-800">Or reach us directly at:</p>
                            <p className="text-2xl font-bold">(617) 415-8731</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your Email Address"
                                    className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full text-white py-3 rounded-lg font-medium focus:ring-2 focus:ring-offset-2 transition duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
