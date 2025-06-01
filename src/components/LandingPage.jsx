import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Menu, X } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oekqawnqnxfzysohtvbc.supabase.co";
const SUPABASE_ANON_KEY = "SUA_CHAVE_AQUI";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Componente Header
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F172A] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-[#38BDF8]">AcademyRepository</h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
        <nav className="hidden md:flex space-x-12 text-white font-medium">
          {["Início", "Features", "Galeria", "Roadmap"].map((sec, idx) => (
            <a key={idx} href={`#${sec.toLowerCase()}`} className="hover:text-[#38BDF8]">{sec}</a>
          ))}
        </nav>
      </div>
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-start space-y-4 text-white font-medium px-4">
          {["Início", "Features", "Galeria", "Roadmap"].map((sec, idx) => (
            <a key={idx} href={`#${sec.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="hover:text-[#38BDF8]">{sec}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

// Componente Roadmap
function Roadmap() {
  const roadmap = [
    {
      fase: "Fase 1: Estrutura Inicial",
      status: "concluida",
      tarefas: [
        { tarefa: "🖼️ Landing page com carrossel", concluida: true },
        { tarefa: "🧩 Seção de Informativos", concluida: true },
        { tarefa: "🖼️ Galeria de imagens ilustrativas", concluida: true },
        { tarefa: "🔍 Pesquisa de Aceitação de Produto", concluida: true },
      ],
    },
    {
      fase: "Fase 2: Interatividade",
      status: "futuro",
      tarefas: [
        { tarefa: "🎴 Cards interativos", concluida: false },
        { tarefa: "🔐 Simulação de login", concluida: false },
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative bg-[#0A0F1C] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#38BDF8] mb-4">Roadmap do Projeto</h3>
        <p className="text-[#94A3B8] mb-12">Acompanhe nosso progresso em cada etapa.</p>
        <div className="relative border-l-4 border-gray-700 ml-3">
          {roadmap.map((fase, i) => {
            const isLast = i === roadmap.length - 1;
            const circleColor = fase.status === "concluida" ? "bg-green-500 border-green-700" : "bg-gray-600 border-gray-900";
            return (
              <div key={i} className="mb-12 relative flex flex-col md:flex-row md:items-center">
                <div className={`w-6 h-6 rounded-full border-4 z-10 absolute -left-3 top-1 ${circleColor}`} />
                {!isLast && (
                  <div
                    className="absolute left-0 top-6 h-full border-l-4"
                    style={{
                      borderColor: fase.status === "concluida" ? "#22c55e" : "#4b5563",
                      height: "calc(100% - 1.5rem)",
                    }}
                  />
                )}
                <div className="pl-10 text-left">
                  <h4 className="text-xl font-semibold text-[#38BDF8] mb-3">{fase.fase}</h4>
                  <ul className="space-y-1 text-[#F1F5F9]">
                    {fase.tarefas.map((item, j) => (
                      <li key={j} className={item.concluida ? "text-green-400" : "text-gray-300"}>{item.tarefa}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Página principal
export default function LandingPage() {
  const frases = [
    "Colabore com sua equipe de forma simples e segura",
    "Repositórios privados para projetos universitários",
    "Login rápido e compartilhamento via link curto",
  ];
  const imagensFundo = [
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    "/imagem/galeria2.png",
    "/imagem/galeria3.png",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [visitCount, setVisitCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [mostrarAnalise, setMostrarAnalise] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % frases.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  async function getPublicIP() {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      return data.ip;
    } catch (error) {
      console.error("Erro ao buscar IP:", error);
      return null;
    }
  }

  async function handleClick() {
    setMostrarAnalise(true);
    const ip = await getPublicIP();
    if (!ip) return;

    const { data } = await supabase
      .from("cliques")
      .select("ip")
      .eq("ip", ip)
      .single();

    if (!data) {
      await supabase.from("cliques").insert([{ ip }]);
      const { count } = await supabase
        .from("cliques")
        .select("*", { count: "exact", head: true });
      setClickCount(count || 0);
    }

    const secaoAnalise = document.getElementById("analise");
    if (secaoAnalise) secaoAnalise.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    (async () => {
      const ip = await getPublicIP();
      if (ip) {
        const { data } = await supabase
          .from("visitantes")
          .select("ip")
          .eq("ip", ip)
          .single();
        if (!data) {
          await supabase.from("visitantes").insert([{ ip }]);
        }
      }

      const { count: visitTotal } = await supabase
        .from("visitantes")
        .select("*", { count: "exact", head: true });
      const { count: clickTotal } = await supabase
        .from("cliques")
        .select("*", { count: "exact", head: true });

      setVisitCount(visitTotal || 0);
      setClickCount(clickTotal || 0);
    })();
  }, []);

  const chartData = [{ name: "Cliques", value: clickCount }];
  const pieData = [
    { name: "Não Interessados", value: Math.max(0, visitCount - clickCount) },
    { name: "Interessados", value: clickCount },
  ];
  const COLORS = ["#8884d8", "#82ca9d"];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const delay = 20;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    const interval = setInterval(() => {
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
        carousel.scrollLeft = 0;
      } else {
        scrollAmount += scrollStep;
        carousel.scrollLeft = scrollAmount;
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const imagensGaleria = [
    "/imagem/galeria1.png",
    "/imagem/galeria2.png",
    "/imagem/galeria3.png",
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F1F5F9] flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="inicio" className="relative min-h-[680px] flex flex-col justify-center items-center text-center">
          <img
            src={imagensFundo[index]}
            alt="Imagem de fundo"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${fade ? "opacity-30" : "opacity-0"}`}
            aria-hidden="true"
          />
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold max-w-4xl z-10"
          >
            {frases[index]}
          </motion.h1>
        </section>

        <section className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/3">
          <button
            className="bg-[#38BDF8] hover:bg-[#0ea5e9] text-[#0B1120] font-bold py-3 px-6 rounded-md transition"
            onClick={handleClick}
          >
            Começar Agora
          </button>
        </section>

        <section id="features" className="bg-[#0A0F1C] py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            {/* Features aqui */}
            {/* ... */}
          </div>
        </section>

        <section id="galeria" className="bg-[#0B1120] py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#38BDF8] mb-4">Galeria do Projeto</h3>
            <p className="text-[#94A3B8] mb-8">Imagens Ilustrativas do Projeto!</p>
            <div
              ref={carouselRef}
              className="flex space-x-6 overflow-hidden"
              style={{ scrollBehavior: "smooth" }}
            >
              {imagensGaleria.map((src, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-[300px] rounded-xl overflow-hidden bg-[#1E293B]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={src}
                    alt={`Imagem ${idx + 1}`}
                    className="w-full h-60 object-cover"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Roadmap />

        {mostrarAnalise && (
          <section id="analise" className="max-w-5xl mx-auto my-16 p-8 bg-[#0F172A] rounded-xl">
            <h3 className="text-3xl font-bold text-[#38BDF8] mb-6 text-center">
              Análise de Cliques e Visitantes
            </h3>
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
              <div className="w-full md:w-1/2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#38BDF8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
