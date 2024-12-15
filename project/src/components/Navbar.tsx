import React from 'react';
import { DollarSign } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">NOMEDAEMPRESA</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Início</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Serviços</a>
            <a href="#calculator" className="text-gray-600 hover:text-blue-600">Simulador</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">Sobre</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Solicitar Empréstimo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}