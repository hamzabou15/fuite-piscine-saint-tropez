import React from 'react'

const ContactSection = () => {
    return (
        <section
            className="bg-white py-20 px-4 relative bg-top"
            aria-label="Spécialiste en détection de fuite d'eau encastrée à Nice"
            style={{ backgroundImage: "url('/images/plombier-sur-nice-expert.webp')" }}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-lg">
                {/* Colonne vide pour laisser le fond visible */}
                <div></div>

                {/* Contenu texte & formulaire */}
                <div className="bg-white p-10 flex flex-col justify-center">
                    <h3 className="uppercase text-sm tracking-widest text-gray-500 font-medium mb-2">
                        Détection de fuite à Nice
                    </h3>
                    <h2 className="text-4xl font-extrabold text-[#1b1e3f] mb-4 leading-tight">
                        Une fuite invisible ? <br />
                        Nos experts interviennent sans casse
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Plafond humide ? Mur abîmé ? <strong>Notre entreprise spécialisée</strong> en
                        recherche de fuite encastrée intervient à Nice avec des technologies
                        <strong> non destructives</strong>.
                    </p>

                    <form
                        action="https://formspree.io/f/your_form_id" // ← remplace par ton vrai ID Formspree
                        method="POST"
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        <input
                            type="hidden"
                            name="_subject"
                            value="Une nouvelle demande - Plombier sur Nice"
                        />

                        <input
                            type="text"
                            name="Prénom"
                            placeholder="Prénom"
                            required
                            className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2"
                        />
                        <input
                            type="text"
                            name="Nom"
                            placeholder="Nom"
                            required
                            className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2"
                        />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            required
                            className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2 col-span-2"
                        />
                        <input
                            type="tel"
                            name="Téléphone"
                            placeholder="Numéro de téléphone"
                            required
                            className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2 col-span-2"
                        />
                        <select
                            name="Besoin"
                            required
                            className="border-b border-gray-300 focus:outline-none focus:border-[#13727B] py-2 col-span-2"
                        >
                            <option value="">Sélectionnez votre besoin</option>
                            <option value="Recherche de fuite encastrée">Recherche de fuite encastrée</option>
                            <option value="Fuite plafond / mur / sol">Fuite plafond / mur / sol</option>
                            <option value="Détection fuite canalisation">Détection fuite canalisation</option>
                            <option value="Diagnostic humidité">Diagnostic humidité</option>
                            <option value="Autre intervention plomberie">Autre intervention plomberie</option>
                        </select>

                        <button
                            type="submit"
                            className="mt-4 w-fit px-6 py-2 bg-[#13727B] text-white font-semibold rounded hover:bg-[#0e5a61] transition col-span-2"
                        >
                            Obtenir un diagnostic
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
