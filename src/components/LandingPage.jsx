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
            onClick={() => setMenuOpen(false)}  // FECHA MENU AO CLICAR
          >
            Início
          </a>
          <a
            href="#features"
            className="hover:text-[#38BDF8]"
            onClick={() => setMenuOpen(false)}  // FECHA MENU AO CLICAR
          >
            Features
          </a>
          <a
            href="#galeria"
            className="hover:text-[#38BDF8]"
            onClick={() => setMenuOpen(false)}  // FECHA MENU AO CLICAR
          >
            Galeria
          </a>
          <a
            href="#roadmap"
            className="hover:text-[#38BDF8]"
            onClick={() => setMenuOpen(false)}  // FECHA MENU AO CLICAR
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

  const naoInteressados = visitCount - clickCount;
  const porcentagemInteresse =
    visitCount > 0 ? Math.round((clickCount / visitCount) * 100) : 0;

  const dadosGraficoBarra = [
    { nome: "Visitantes", valor: visitCount },
    { nome: "Interessados", valor: clickCount },
  ];

  const dadosGraficoPizza = [
    { name: "Interessados", value: clickCount, color: "#38BDF8" },
    { name: "Não Interessados", value: naoInteressados, color: "#334155" },
  ];

  return (
    <>
      <Header />
      <section
        id="inicio"
        className="relative h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `url(${imagensFundo[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <AnimatePresence>
            {fade && (
              <motion.h2
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {frases[index]}
              </motion.h2>
            )}
          </AnimatePresence>
          <button
            onClick={handleClick}
            className="mt-6 rounded bg-[#38BDF8] px-6 py-3 font-semibold text-[#0F172A] hover:bg-[#0c8ad0] transition"
          >
            Quero ser um usuário
          </button>
        </div>
      </section>

      <section
        id="features"
        className="py-16 bg-[#0F172A] text-white max-w-7xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Por que usar o AcademyRepository?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Simplicidade</h3>
            <p>
              Interface amigável para iniciantes em tecnologia, sem complexidades
              desnecessárias.
            </p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Privacidade</h3>
            <p>
              Repositórios privados para garantir segurança e controle total dos
              seus projetos.
            </p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Acesso rápido</h3>
            <p>
              Login simplificado e compartilhamento fácil com links curtos.
            </p>
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="py-16 bg-[#0A0F1C] text-white max-w-7xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {imagensFundo.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Imagem da galeria ${i + 1}`}
              className="rounded-lg shadow-lg w-full object-cover h-64"
            />
          ))}
        </div>
      </section>

      <Roadmap />

      {mostrarAnalise && (
        <section
          id="analise"
          className="py-16 bg-[#0F172A] text-white max-w-7xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            Análise de Interesse dos Visitantes
          </h2>
          <p className="text-center mb-12 text-[#94A3B8]">
            Total de visitantes: {visitCount} <br />
            Total de interessados: {clickCount} ({porcentagemInteresse}%)
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <ResponsiveContainer width={300} height={300}>
              <BarChart data={dadosGraficoBarra} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="valor" fill="#38BDF8" />
              </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width={300} height={300}>
              <PieChart>
                <Pie
                  data={dadosGraficoPizza}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dadosGraficoPizza.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      )}
    </>
  );
}
