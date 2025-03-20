"use client"

import React from 'react'
import { useState } from "react";
import IconMail from '@/icons/IconMail'
import IconCheck from '@/icons/IconCheck';

const CopyMailButton = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = () => {
        const email = "dilangerber@gmail.com"; // Reemplaza con tu email
        navigator.clipboard.writeText(email).then(() => {
          setIsCopied(true); // Cambia el estado a "copiado"
          setTimeout(() => {
            setIsCopied(false); // Vuelve al estado original después de 2 segundos
          }, 2000);
        });
      };

  return (
      <button
        onClick={handleCopyEmail}
        className="py-2 px-4 border-2 border-green-600 rounded-full text-green-600 hover:bg-green-800 hover:text-white font-bold transition-colors flex flex-row gap-3 whitespace-nowrap"
        aria-label="Copiar email de Dilan Gerber"
        translate="no"
      >
        {isCopied ? (
          <IconCheck className="size-6" /> // Ícono de check cuando está copiado
        ) : (
          <IconMail className="size-6" /> // Ícono de mail por defecto
        )}
        {isCopied ? "Copiado!" : "Copiar Email"} 
      </button>

  )
}

export default CopyMailButton