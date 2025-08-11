import React from 'react'
import { MdLocalPhone } from 'react-icons/md'
import { IoNewspaperOutline } from 'react-icons/io5'
import Link from 'next/link'

const CTA = () => {
    return (
        <div className="fixed bottom-16 right-8 flex flex-col items-end gap-4 z-50">
            {/* Bouton téléphone */}
            <a
                href="tel:+33647572021"
                aria-label="Appeler le numéro +33 64 75 72 021"
                className="
                    flex items-center gap-3 rounded-full bg-[#F59E0B] px-6 py-3 shadow-lg
                    text-[#1E3A8A] font-semibold text-lg
                    transition-all duration-300 ease-in-out
                    hover:bg-[#1E3A8A] hover:text-white hover:scale-105
                    focus:outline-none focus:ring-4 focus:ring-[#F59E0B]/60
                    cursor-pointer
                "
            >
                <MdLocalPhone size={24} />
                <span>Appelez-nous</span>
            </a>

            {/* Bouton devis */}
            <Link href="/contact" passHref className="
                        flex items-center gap-3 rounded-full bg-[#F59E0B] px-6 py-3 shadow-lg
                        text-[#1E3A8A] font-semibold text-lg
                        transition-all duration-300 ease-in-out
                        hover:bg-[#1E3A8A] hover:text-white hover:scale-105
                        focus:outline-none focus:ring-4 focus:ring-[#F59E0B]/60
                        cursor-pointer
                    ">

                <IoNewspaperOutline size={24} />
                <span>Un devis ?</span>
            </Link>
        </div>
    )
}

export default CTA
