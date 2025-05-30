import React, { useState, useEffect } from "react";

const frases = [
  "Colabore com sua equipe de forma simples e segura",
  "Repositórios privados para projetos universitários",
  "Login rápido e compartilhamento via link curto",
];

const imagensFundo = [
  "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
];

export default function LandingPage() {
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // começa fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % frases.length);
        setFade(true); // fade in novo conteúdo
      }, 500); // tempo do fade out
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F1F5F9] flex flex-col">
      {/* Header */}
      <header className="flex justify-center items-center px-6 py-4 border-b border-[#1E293B] bg-[#0F172A]">
        <h1 className="text-2xl font-bold text-[#38BDF8]">AcademyRepository</h1>
      </header>

      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
        {/* Background carrossel centralizado */}
        <div className="absolute inset-0 w-full h-full z-[-1]">
          {imagensFundo.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-500"
              style={{
                backgroundImage: `url(${img})`,
                opacity: i === index && fade ? 1 : 0,
              }}
            />
          ))}
        </div>

        {/* Texto com fade centralizado */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
          style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            color: "#F1F5F9",
          }}
        >
          {frases[index]}
        </h2>
        <p
          className="text-[#94A3B8] max-w-xl mb-8 drop-shadow-md"
          style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          Repositórios privados para projetos universitários com login rápido e compartilhamento via link curto.
        </p>
        <button
          onClick={() => setShowAnalytics(true)}
          className="bg-[#38BDF8] hover:bg-[#0ea5e9] text-[#0B1120] font-bold py-3 px-6 rounded-md transition"
        >
          Começar Agora
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-[#0A0F1C] py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">Comece em segundos</h3>
            <p className="text-[#94A3B8]">Sem burocracia ou configurações avançadas.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">Compartilhe com um link</h3>
            <p className="text-[#94A3B8]">Convide colegas com um link curto e seguro.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">Ambiente Privado</h3>
            <p className="text-[#94A3B8]">Mantenha seus projetos protegidos e organizados.</p>
          </div>
        </div>
      </section>

      {/* Analytics Section (condicional) */}
      {showAnalytics && (
        <section className="bg-[#0B1120] py-16 px-6 vsg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#38BDF8] mb-4">Visão Geral do Projeto</h3>
            <p className="text-[#94A3B8] mb-8">
              Veja a evolução da colaboração da sua equipe com gráficos integrados.
            </p>

            <div className="bg-[#1E293B] rounded-lg p-6 mb-10">
              <p className="text-[#94A3B8]">[ Aqui entra seu gráfico ou dashboard do Google Analytics ]</p>
            </div>
            <div className="bg-[#1E293B] rounded-lg p-6 mb-10">
              <p className="text-[#94A3B8]">[ Aqui entra seu gráfico ou dashboard do Google Analytics ]</p>
            </div>
            <div className="bg-[#1E293B] rounded-lg p-6 mb-10">
              <p className="text-[#94A3B8]">[ Aqui entra seu gráfico ou dashboard do Google Analytics ]</p>
            </div>
            <div className="bg-[#1E293B] rounded-lg p-6 mb-10">
              <p className="text-[#94A3B8]">[ Aqui entra seu gráfico ou dashboard do Google Analytics ]</p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center py-6 border-t border-[#1E293B] bg-[#0F172A] text-[#64748B]">
        © 2025 AcademyRepository. Projeto Acadêmico.
      </footer>
    </div>
  );
}
