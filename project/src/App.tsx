import React from 'react';
import Navbar from './components/Navbar';
import LoanCalculator from './components/LoanCalculator';
import { Shield, Clock, BadgeCheck, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Realize seus sonhos com as melhores condições de crédito
              </h1>
              <p className="text-xl mb-8">
                Empréstimos personalizados com as menores taxas do mercado e aprovação rápida.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
                Simular Agora
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800"
                alt="Happy family"
                className="rounded-lg shadow-xl max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Por que escolher "NOME DA EMPRESA"?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "100% Seguro",
                description: "Seus dados estão protegidos com a mais alta tecnologia de segurança"
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Aprovação Rápida",
                description: "Resposta em até 24 horas após a solicitação"
              },
              {
                icon: <BadgeCheck className="h-8 w-8 text-blue-600" />,
                title: "Melhores Taxas",
                description: "Juros competitivos e condições flexíveis de pagamento"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Atendimento 24/7",
                description: "Suporte especializado disponível todos os dias"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Simule seu Empréstimo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use nossa calculadora para simular seu empréstimo e encontrar o plano perfeito para você
            </p>
          </div>
          <div className="flex justify-center">
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Sobre Nós</h4>
              <p className="text-gray-400">
                "NOME DA EMPRESA" é sua parceira para realizar sonhos através de soluções financeiras personalizadas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <p className="text-gray-400">
                Email: contato@suaempresa.com<br />
                Tel: 0800 123 4567
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
              <p className="text-gray-400">
                Segunda a Sexta: 8h às 20h<br />
                Sábado: 9h às 15h
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 "NOMEDAEMPRESA". Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;