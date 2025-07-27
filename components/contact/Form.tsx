'use client';

import React from 'react';
import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('mkgzrydn');

    return (
        <>
            <Head>
                <title>Contact Fuite Piscine Expert à Nice – Demandez un diagnostic gratuit</title>
                <meta
                    name="description"
                    content="Besoin de localiser une fuite sur votre piscine à Nice ? Contactez Fuite Piscine Expert pour une intervention rapide et non destructive. Réponse sous 24h."
                />
            </Head>

            <section
                id="contact-piscine-nice"
                aria-label="Formulaire de contact pour recherche de fuite piscine à Nice"
                className="w-full bg-white py-20 px-8 md:px-8"
            >
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-[14px] font-semibold text-[#02BAD6] uppercase tracking-[7px]">
                        Contact express
                    </p>
                    <h2 className="text-[40px] font-bold tracking-[-1.5px] text-[#1b1e3f] max-lg:text-4xl max-md:text-3xl">
                        Obtenez votre diagnostic fuite gratuit
                    </h2>
                    <p className="text-[16px] text-[#2E2937BF] mt-4 font-light">
                        Suspectez-vous une fuite dans votre piscine ? Décrivez-nous votre situation et un expert vous recontacte sous 24h avec une solution adaptée.
                    </p>
                </div>

                {state.succeeded ? (
                    <p className="text-center text-green-600 font-semibold text-lg">
                        Merci pour votre demande. Un expert vous contactera très rapidement.
                    </p>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-3xl mx-auto flex flex-col gap-6 text-[#1b1e3f]"
                    >
                        <input
                            type="hidden"
                            name="_subject"
                            value="Nouvelle demande – Fuite Piscine Expert à Nice"
                        />
                        <div className="flex flex-col md:flex-row gap-6">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Votre nom complet"
                                className="w-full border border-gray-300 px-5 py-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#02BAD6]"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Votre adresse email"
                                className="w-full border border-gray-300 px-5 py-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#02BAD6]"
                            />
                        </div>
                        <ValidationError field="email" prefix="Email" errors={state.errors} />

                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Votre numéro de téléphone"
                            className="w-full border border-gray-300 px-5 py-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#02BAD6]"
                        />

                        <textarea
                            name="message"
                            required
                            rows={6}
                            placeholder="Décrivez la fuite suspectée (perte d’eau, structure, canalisation, etc.)"
                            className="w-full border border-gray-300 px-5 py-4 text-sm rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#02BAD6]"
                        ></textarea>
                        <ValidationError field="message" prefix="Message" errors={state.errors} />

                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="mt-4 w-fit px-6 py-2 bg-[#02BAD6] text-white font-semibold  hover:bg-[#007994] transition col-span-2"
                            >
                                Envoyer ma demande
                            </button>
                        </div>
                    </form>
                )}
            </section>
        </>
    );
};

export default ContactForm;
