import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
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
  Legend,
} from "recharts";
import { Menu, X } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oekqawnqnxfzysohtvbc.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9la3Fhd25xbnhmenlzb2h0dmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MTU2MDgsImV4cCI6MjA2NDI5MTYwOH0.uvP-Z_r96fnxhu4NKCXJM0T0TcoQlsQggzzTrcbprmQ";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function Header() {
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
          <a href="#inicio" className="hover:text-[#38BDF8]">
            Início
          </a>
          <a href="#features" className="hover:text-[#38BDF8]">
            Features
          </a>
          <a href="#galeria" className="hover:text-[#38BDF8]">
            Galeria
          </a>
          <a href="#roadmap" className="hover:text-[#38BDF8]">
            Roadmap
          </a>
        </nav>
      </div>
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-start space-y-4 text-white font-medium px-4">
          <a
            href="#inicio"
            className="hover:text-[#38BDF8]"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </a>
          <a
            href="#features"
            className="hover:text-[#38BDF8]"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#galeria"
            className="hover:text-[#38BDF8]"
            onClick={() => setMenuOpen(false)}
          >
            Galeria
          </a>
          <a
            href="#roadmap"
            className="hover:text-[#38BDF8]"
            onClick={() => setMenuOpen(false)}
          >
            Roadmap
          </a>
        </nav>
      )}
    </header>
  );
}

export function Roadmap() {
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
    {
      fase: "Fase 3: Qualidade e Finalização",
      status: "futuro",
      tarefas: [
        { tarefa: "📱 Ajustes de responsividade", concluida: false },
        { tarefa: "🧪 Testes manuais", concluida: false },
        { tarefa: "🚀 Deploy para produção", concluida: false },
      ],
    },
    {
      fase: "Fase 4: Integração com Backend",
      status: "futuro",
      tarefas: [
        { tarefa: "⚙️ Integração com API de autenticação", concluida: false },
        { tarefa: "🗂️ Conexão com banco de dados", concluida: false },
      ],
    },
    {
      fase: "Fase 5: Funcionalidades Avançadas",
      status: "futuro",
      tarefas: [
        { tarefa: "📁 Upload e visualização de arquivos", concluida: false },
        { tarefa: "👥 Gerenciamento de membros", concluida: false },
        { tarefa: "📊 Dashboard estatístico", concluida: false },
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative bg-[#0A0F1C] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#38BDF8] mb-4">
          Roadmap do Projeto
        </h3>
        <p className="text-[#94A3B8] mb-12">Acompanhe nosso progresso em cada etapa.</p>

        {/* Container vertical com linha conectando */}
        <div className="relative border-l-4 border-gray-700 ml-3">
          {roadmap.map((fase, i) => {
            const isLast = i === roadmap.length - 1;
            let circleColor = "bg-gray-600 border-gray-900";
            if (fase.status === "concluida")
              circleColor = "bg-green-500 border-green-700";
            else if (fase.status === "progresso")
              circleColor = "bg-yellow-400 border-yellow-600";

            return (
              <div
                key={i}
                className="mb-12 relative flex flex-col md:flex-row md:items-center"
              >
                {/* Círculo indicador */}
                <div
                  className={`w-6 h-6 rounded-full border-4 z-10 absolute -left-3 top-1 ${circleColor}`}
                />
                {/* Linha vertical até o próximo */}
                {!isLast && (
                  <div
                    className="absolute left-0 top-6 h-full border-l-4"
                    style={{
                      borderColor:
                        fase.status === "concluida"
                          ? "#22c55e"
                          : fase.status === "progresso"
                            ? "#eab308"
                            : "#4b5563",
                      height: "calc(100% - 1.5rem)",
                    }}
                  />
                )}
                {/* Conteúdo da fase */}
                <div className="pl-10 text-left">
                  <h4 className="text-xl font-semibold text-[#38BDF8] mb-3">
                    {fase.fase}
                  </h4>
                  <ul className="space-y-1 text-[#F1F5F9]">
                    {fase.tarefas.map((item, j) => (
                      <li
                        key={j}
                        className={item.concluida ? "text-green-400" : "text-gray-300"}
                      >
                        {item.tarefa}
                      </li>
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

export default function LandingPage() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [visitCount, setVisitCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [mostrarAnalise, setMostrarAnalise] = useState(false);

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
    window.gtag('event', 'botao_clicado', {
    event_category: 'interacao',
    event_label: 'Botão Importante'
      
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

  // Ref para o carrossel galeria
  const carouselRef = React.useRef(null);

  React.useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollStep = 1; // pixels por intervalo
    const delay = 20; // ms entre cada scroll

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
        {/* Hero */}
        <section
          id="inicio"
          className="relative min-h-[680px] flex flex-col justify-center items-center text-center "
        >
          <img
            src={imagensFundo[index]}
            alt="Imagem de fundo"
            className={`absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-1000 ${fade ? "opacity-30" : "opacity-0"
              }`}
            aria-hidden="true"
          />
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold max-w-4xl z-10"
          >
            {frases[index]}
          </motion.h1>
        </section>
        <div id="features"></div>
        <section className="absolute left-1/2  top-2/3 transform -translate-x-1/2 -translate-y-1/3">
          <button
            id="botaocq"
            className="bg-[#38BDF8] hover:bg-[#0ea5e9] text-[#0B1120] font-bold py-3 px-6 rounded-md transition"
            onClick={handleClick}
          >
            Começar Agora
          </button>
        </section>

        {/* Features */}
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
            <div>
              <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">Uploads via navegador (sem Git)</h3>
              <p className="text-[#94A3B8]">Arrasta e solta arquivos ou zip para subir seus arquivos.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">Baixa barreira de entrada</h3>
              <p className="text-[#94A3B8]">Login simples (sem e-mail) é ótimo para iniciantes que não querem lidar com burocracia.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">Foco no público iniciante</h3>
              <p className="text-[#94A3B8]">Você pode ajudar quem ainda está aprendendo a estruturar um projeto, entender o que é commit, versionamento etc</p>
            </div>
          </div>
        </section>
        {/* Galeria de Imagens do Projeto - Carrossel automático */}
        <section id="galeria" className="bg-[#0B1120] py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#38BDF8] mb-4">
              Galeria do Projeto
            </h3>
            <p className="text-[#94A3B8] mb-8">Imagens Ilustrativas do Projeto!</p>

            <div
              ref={carouselRef}
              className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 overflow-hidden items-center sm:items-stretch"
              style={{ scrollBehavior: "smooth" }}
            >
              {imagensGaleria.map((src, idx) => (
                <motion.div
                  key={idx}
                  className="w-full sm:min-w-[300px] rounded-xl overflow-hidden bg-[#1E293B]"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={src}
                    alt={`Imagem do Projeto ${idx + 1}`}
                    className="w-full h-60 object-cover rounded-xl"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <Roadmap />

        {/* Análise de dados */}
        {mostrarAnalise && (
          <section
            id="analise"
            className="max-w-5xl mx-auto my-16 p-8 bg-[#0F172A] rounded-xl"
          >
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
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
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
