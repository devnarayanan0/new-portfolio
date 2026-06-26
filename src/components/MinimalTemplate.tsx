import { UserProfile } from "../types";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  ArrowUpRight, 
  Mail, 
  Github, 
  Linkedin, 
  Calendar, 
  Code, 
  Award, 
  BookOpen, 
  Briefcase, 
  Phone, 
  Cpu, 
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
  Trophy,
  Brain,
  Cloud,
  Database,
  Terminal,
  Server,
  GitBranch,
  Share2,
  Zap,
  Workflow,
  Bug,
  Binary,
  Network,
  Monitor,
  Boxes,
  Repeat,
  FastForward,
  Link,
  Leaf,
  Bolt,
  FileText
} from "lucide-react";

interface MinimalTemplateProps {
  profile: UserProfile;
}

export default function MinimalTemplate({ profile }: MinimalTemplateProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Render individual skill logo with realistic colored branding
  const renderSkillLogo = (skill: string) => {
    const s = skill.toLowerCase().trim();
    
    // Cloud & DevOps
    if (s.includes("azure")) {
      return (
        <svg className="w-3.5 h-3.5 shrink-0 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.4 19L1.2 13.1H9.2L5.4 19ZM11.1 19L16.2 11.2H8.4L3.8 19H11.1ZM12.7 19H22.8L15.3 5L12.7 19Z" />
        </svg>
      );
    }
    if (s.includes("aws")) {
      return (
        <svg className="w-3.5 h-3.5 shrink-0 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.23 15.65C9.72 15.65 8.78 14.86 8.78 13.56C8.78 12.06 10.05 11.28 12.33 11.24C12.33 11.24 13.43 11.23 13.8 11.22V10.65C13.8 9.87 13.11 9.38 12.03 9.38C10.97 9.38 10.08 9.77 9.54 10.15L8.93 8.75C9.8 8.1 11.14 7.65 12.64 7.65C14.73 7.65 15.93 8.68 15.93 10.64V15.5H13.93V14.5C13.2 15.28 12.09 15.65 11.23 15.65Z" />
        </svg>
      );
    }
    if (s.includes("docker")) {
      return (
        <svg className="w-3.5 h-3.5 shrink-0 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 8.871h-1.996v1.985h1.996V8.871zM13.983 6.327h-1.996v1.982h1.996V6.327zM16.485 8.871h-1.995v1.985h1.995V8.871zM16.485 6.327h-1.995v1.982h1.995V6.327zM11.478 8.871h-1.995v1.985h1.995V8.871zM11.478 6.327H9.483v1.982h1.995V6.327zM8.977 8.871H6.98v1.985h1.997V8.871zM13.983 3.78h-1.996V5.76h1.996V3.78zm10.016 8.121c-.326-.067-.624-.093-.913-.093-1.21 0-2.234.82-2.492 1.933a3.832 3.832 0 01-3.664-2.583h-1.53v2.83H1.417c-.12 1.15.54 2.22 1.63 2.62 1.09.4 2.3-.08 2.83-1.12.53 1.04 1.74 1.52 2.83 1.12 1.09-.4 1.75-1.47 1.63-2.62V13.8h2.008v1.982h2.518V13.8h1.22c.264 1.11 1.288 1.93 2.492 1.93.289 0 .587-.03.913-.1a3.87 3.87 0 001.272 2.146c1.196.953 2.921.905 4.07-.123a3.81 3.81 0 001.144-2.825c0-1.848-1.512-3.111-3.616-3.111z" />
        </svg>
      );
    }
    if (s.includes("kubernetes")) {
      return (
        <svg className="w-3.5 h-3.5 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.01 2.25L3.84 5.92L2.25 14.1L8.38 21.75L15.65 21.75L21.78 14.1L20.21 5.92L12.01 2.25ZM12.01 5L17.79 7.6L18.9 13.35L14.62 18.7H9.41L5.12 13.35L6.24 7.6L12.01 5ZM12.01 9.38A2.63 2.63 0 1 0 12.01 14.63A2.63 2.63 0 0 0 12.01 9.38Z" />
        </svg>
      );
    }
    if (s.includes("jenkins")) {
      return (
        <svg className="w-3.5 h-3.5 shrink-0 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.83 17.22C13.56 17.38 13.25 17.5 12.92 17.5C12.19 17.5 11.62 17 11.5 16.21H12.92C13.06 16.21 13.19 16.14 13.26 16.03C13.34 15.92 13.34 15.77 13.27 15.66L11.5 13H14C14.55 13 15 12.55 15 12C15 11.45 14.55 11 14 11H11.5L13.27 8.34C13.34 8.23 13.34 8.08 13.26 7.97C13.19 7.86 13.06 7.79 12.92 7.79H11.5C11.62 7 12.19 6.5 12.92 6.5C13.25 6.5 13.56 6.62 13.83 6.78C14.07 6.92 14.38 6.84 14.52 6.6C14.66 6.36 14.58 6.05 14.34 5.91C13.92 5.66 13.44 5.5 12.92 5.5C11.5 5.5 10.43 6.46 10.11 7.79H9C8.45 7.79 8 8.24 8 8.79C8 9.34 8.45 9.79 9 9.79H10.02L8.52 12C8.36 12.24 8.36 12.56 8.52 12.8L10.02 15.01H9C8.45 15.01 8 15.46 8 16.01C8 16.56 8.45 17.01 9 17.01H10.11C10.43 18.34 11.5 19.3 12.92 19.3C13.44 19.3 13.92 19.14 14.34 18.89C14.58 18.75 14.66 18.44 14.52 18.2C14.38 17.96 14.07 17.88 13.83 17.22Z" />
        </svg>
      );
    }
    if (s.includes("github")) {
      return (
        <svg className="w-3.5 h-3.5 shrink-0 text-slate-800 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    }
    
    // Languages
    if (s === "java") {
      return (
        <svg className="w-3.5 h-3.5 shrink-0 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9 15.5C9 14.67 9.67 14 10.5 14H13.5C14.33 14 15 14.67 15 15.5V17H9V15.5ZM10.5 7.5C10.5 6.67 11.17 6 12 6C12.83 6 13.5 6.67 13.5 7.5V12H10.5V7.5Z" />
        </svg>
      );
    }
    if (s === "c++") {
      return (
        <span className="text-[8px] px-1 bg-blue-600 text-white font-black rounded font-mono shrink-0">C++</span>
      );
    }
    if (s === "python") {
      return (
        <svg className="w-3.5 h-3.5 shrink-0 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-3 5.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm6 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      );
    }
    if (s === "go") {
      return (
        <span className="text-[9px] text-cyan-500 font-extrabold tracking-tighter shrink-0 font-mono">GO</span>
      );
    }
    if (s === "javascript" || s === "js") {
      return (
        <span className="text-[8px] px-1 bg-yellow-400 text-black font-black rounded font-mono shrink-0">JS</span>
      );
    }
    if (s === "typescript" || s === "ts") {
      return (
        <span className="text-[8px] px-1 bg-blue-500 text-white font-black rounded font-mono shrink-0">TS</span>
      );
    }

    // Frameworks & Tech
    if (s.includes("spring boot")) {
      return <Leaf className="w-3.5 h-3.5 shrink-0 text-emerald-500" />;
    }
    if (s.includes("fastapi")) {
      return <Bolt className="w-3.5 h-3.5 shrink-0 text-teal-500" />;
    }
    if (s.includes("postgresql")) {
      return <Database className="w-3.5 h-3.5 shrink-0 text-sky-700" />;
    }
    if (s.includes("express.js") || s === "express") {
      return <Terminal className="w-3.5 h-3.5 shrink-0 text-neutral-600" />;
    }
    if (s.includes("microservices")) {
      return <GitBranch className="w-3.5 h-3.5 shrink-0 text-indigo-500" />;
    }
    if (s.includes("rest api")) {
      return <Share2 className="w-3.5 h-3.5 shrink-0 text-violet-500" />;
    }

    // AI/ML
    if (s.includes("llm")) {
      return <Brain className="w-3.5 h-3.5 shrink-0 text-pink-500" />;
    }
    if (s.includes("langchain")) {
      return <Link className="w-3.5 h-3.5 shrink-0 text-emerald-600" />;
    }
    if (s.includes("vectordb")) {
      return <Database className="w-3.5 h-3.5 shrink-0 text-indigo-600" />;
    }
    if (s.includes("tensorflow")) {
      return <Cpu className="w-3.5 h-3.5 shrink-0 text-amber-600" />;
    }
    if (s.includes("keras")) {
      return <Layers className="w-3.5 h-3.5 shrink-0 text-rose-600" />;
    }
    if (s.includes("pandas")) {
      return <Sparkles className="w-3.5 h-3.5 shrink-0 text-blue-400" />;
    }
    if (s.includes("numpy")) {
      return <Cpu className="w-3.5 h-3.5 shrink-0 text-teal-600" />;
    }

    // Systems & Concurrency
    if (s.includes("distributed")) {
      return <Server className="w-3.5 h-3.5 shrink-0 text-violet-600" />;
    }
    if (s.includes("threading") || s.includes("concurrency")) {
      return <Repeat className="w-3.5 h-3.5 shrink-0 text-orange-600" />;
    }
    if (s.includes("design")) {
      return <Workflow className="w-3.5 h-3.5 shrink-0 text-blue-500" />;
    }
    if (s.includes("debugging")) {
      return <Bug className="w-3.5 h-3.5 shrink-0 text-red-500" />;
    }

    // CS Fundamentals
    if (s.includes("structure")) {
      return <Binary className="w-3.5 h-3.5 shrink-0 text-teal-500" />;
    }
    if (s.includes("network")) {
      return <Network className="w-3.5 h-3.5 shrink-0 text-emerald-500" />;
    }
    if (s.includes("operating")) {
      return <Monitor className="w-3.5 h-3.5 shrink-0 text-indigo-500" />;
    }
    if (s.includes("dbms")) {
      return <Database className="w-3.5 h-3.5 shrink-0 text-cyan-600" />;
    }
    if (s.includes("oops")) {
      return <Boxes className="w-3.5 h-3.5 shrink-0 text-purple-500" />;
    }

    // Default fallbacks
    return <Sparkles className="w-3.5 h-3.5 shrink-0 text-yellow-500" />;
  };

  // Category Icon Mapper
  const getCategoryIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("cloud") || lower.includes("devops")) {
      return <Cloud className="w-5 h-5 text-indigo-600" />;
    }
    if (lower.includes("ai") || lower.includes("ml") || lower.includes("machine")) {
      return <Brain className="w-5 h-5 text-pink-600" />;
    }
    if (lower.includes("framework") || lower.includes("technologies") || lower.includes("tech")) {
      return <Layers className="w-5 h-5 text-blue-600" />;
    }
    if (lower.includes("language") || lower.includes("programming")) {
      return <Code className="w-5 h-5 text-emerald-600" />;
    }
    if (lower.includes("system") || lower.includes("concurrency")) {
      return <Cpu className="w-5 h-5 text-orange-600" />;
    }
    if (lower.includes("fundamental") || lower.includes("cs")) {
      return <BookOpen className="w-5 h-5 text-teal-600" />;
    }
    return <Sparkles className="w-5 h-5 text-yellow-600" />;
  };

  return (
    <div className="relative min-h-screen bg-gray-50 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] text-black font-sans antialiased overflow-y-auto selection:bg-black selection:text-white p-4 md:p-8 flex flex-col items-center justify-center">
      {/* Dynamic top scroll status */}
      <motion.div 
        id="scroll-bar"
        className="fixed top-0 left-0 right-0 h-2 bg-black origin-left z-50"
        style={{ scaleX }}
      />

      {/* Main geometric canvas frame wrapping everything with high-contrast translucent glass effect */}
      <div className="w-full max-w-7xl border-8 border-black bg-white/80 backdrop-blur-xl flex flex-col justify-between min-h-[calc(100vh-4rem)] relative shadow-2xl shadow-black/10">
        
        {/* ================= HEADER SECTION ================= */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end p-8 md:p-10 border-b-4 border-black gap-6 bg-white/40">
          <div className="space-y-2">
            <div className="inline-block border border-black px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest font-black bg-black text-white">
              PORTFOLIO SUITE v2.0
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
              {profile.name}
            </h1>
            <p className="text-xs md:text-sm tracking-[0.25em] font-bold uppercase opacity-75 flex flex-wrap gap-2 items-center">
              <span>{profile.role}</span>
              <span className="opacity-40">&bull;</span>
              <span>CHENNAI &mdash; CHANDIGARH</span>
            </p>
          </div>
        </header>

        {/* ================= INTRO & ABOUT SECTION ================= */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 border-b-4 border-black bg-white/40">
          {/* Left Column (Bio statement & details) */}
          <div className="lg:col-span-7 p-8 md:p-10 border-b border-black lg:border-b-0 lg:border-r border-black flex flex-col justify-between gap-12 bg-white/50">
            <div className="space-y-6">
              <div className="inline-block border border-black px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                Featured Ethos
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter uppercase">
                ARCHITECTING THE FUTURE OF SCALABLE SYSTEMS.
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-xl font-medium">
                {profile.bio}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="#booking" 
                  className="inline-flex items-center gap-2 border-4 border-black bg-black text-white px-6 py-3 text-xs font-mono font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  Book A Session <Calendar className="w-4 h-4 ml-1" />
                </a>
                <a 
                  href="/resume.pdf" 
                  download="Dev_Narayanan_Resume.pdf"
                  className="inline-flex items-center gap-2 border-4 border-black bg-white text-black px-6 py-3 text-xs font-mono font-black uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  Download Resume <FileText className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Quick Stats Grid without Leetcode stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-black/10">
              <div>
                <span className="block text-[10px] font-mono uppercase opacity-50 font-bold">[01] Specialization</span>
                <span className="text-xl font-black tracking-tight uppercase">High Concurrency</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase opacity-50 font-bold">[02] Scale Level</span>
                <span className="text-xl font-black tracking-tight uppercase">10K+ File syncs</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase opacity-50 font-bold">[03] Core Focus</span>
                <span className="text-xl font-black tracking-tight uppercase">Distributed & ML</span>
              </div>
            </div>
          </div>

          {/* Right Column (Bio Summary & Digital Directories) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white/20">
            <div className="p-8 md:p-10 border-b border-black space-y-6">
              <div className="inline-block border border-black px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white">
                Professional Digest
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight">Summary Profile</h3>
                <p className="text-xs md:text-sm leading-relaxed opacity-80 font-medium">
                  Dev Narayanan is a systems-focused developer engineering robust database state-synchronization platforms, modern natural language vector pipelines, and highly concurrent service architectures. Experienced in microservices, secure authorization, and containerized workflows.
                </p>
                <div className="border-t border-black/10 pt-4 space-y-3 font-mono text-xs font-bold">
                  <div className="flex justify-between">
                    <span className="opacity-50">STATUS:</span>
                    <span>ACTIVE &bull; RUNNING SYSTEMS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-50">LOCATIONS:</span>
                    <span>CHENNAI &amp; MANDI, IN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Contacts Panel (Keep only Digital Directories) */}
            <div className="p-8 md:p-10 space-y-4 bg-white/50">
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-50 font-bold block">
                Digital Directories
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold tracking-tight">
                <a 
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 border border-black p-2.5 bg-white/80 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
                <a 
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 border border-black p-2.5 bg-white/80 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+91 {profile.phone}</span>
                </a>
                <a 
                  href={`https://${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black p-2.5 bg-white/80 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>GitHub Profile</span>
                </a>
                <a 
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black p-2.5 bg-white/80 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
                {profile.leetcode && (
                  <a 
                    href={`https://${profile.leetcode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-black p-2.5 bg-white/80 hover:bg-black hover:text-white transition-colors duration-300 col-span-1 sm:col-span-2 justify-center"
                  >
                    <Code className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>LeetCode Profile</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECH STACK LAYOUT SECTION ================= */}
        <section id="tech-stack" className="p-8 md:p-10 border-b-4 border-black bg-white/40 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-black pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-50">
                Architectural Layers
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                TECHNICAL SPECS
              </h2>
            </div>
            <p className="text-xs max-w-sm leading-relaxed opacity-70 uppercase font-mono font-semibold">
              Fine-tuned expertise across cloud-native environments, automated ML workflows, robust backends, and low-latency system-level routines.
            </p>
          </div>

          {/* Categorized Tech Stack Grid precisely ordered with icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.skills.map((category, idx) => (
              <div 
                key={idx}
                className="border border-black p-6 bg-white/80 group hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[240px] shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-black group-hover:border-white pb-3 transition-colors">
                    <span className="text-[10px] font-mono font-bold opacity-65 group-hover:text-white">
                      [{idx < 9 ? `0${idx + 1}` : idx + 1}]
                    </span>
                    <div className="flex items-center gap-2 bg-black/5 group-hover:bg-white/10 p-1 rounded-md transition-colors">
                      {getCategoryIcon(category.categoryName)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black tracking-tight uppercase group-hover:text-white flex items-center gap-2">
                    {category.categoryName}
                  </h3>
                </div>

                <div className="mt-6">
                  <ul className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-[11px] font-mono font-bold border border-black/5 group-hover:border-white/10 bg-black/5 group-hover:bg-white/5 p-2 rounded transition-all">
                        <div className="flex items-center justify-center w-5 h-5 bg-white border border-black/10 rounded group-hover:border-white/20 shrink-0 shadow-sm text-black">
                          {renderSkillLogo(skill)}
                        </div>
                        <span className="truncate">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= EXPERIENCE TIMELINE SECTION ================= */}
        <section id="experience" className="border-b-4 border-black bg-white/40">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Header Sidebar */}
            <div className="lg:col-span-4 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between bg-white/20">
              <div className="space-y-4">
                <div className="inline-block border border-black px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                  Service Records
                </div>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
                  PROFESSIONAL<br />CHRONOLOGY
                </h2>
                <p className="text-sm opacity-75 max-w-xs leading-relaxed">
                  Consistently delivering robust database synchronization systems, generative AI systems, and high-performance APIs.
                </p>
              </div>

              <div className="hidden lg:block pt-12">
                <div className="w-full aspect-square border border-black/20 flex items-center justify-center relative overflow-hidden bg-white/50 backdrop-blur-md">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px] opacity-10" />
                  <Briefcase className="w-12 h-12 text-black/60 z-10" />
                </div>
              </div>
            </div>

            {/* Right Timeline List */}
            <div className="lg:col-span-8 flex flex-col divide-y divide-black bg-white/50">
              {profile.experience.map((exp, idx) => (
                <div key={idx} className="p-8 md:p-10 group hover:bg-black hover:text-white transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-black/10 group-hover:border-white/20 pb-4 transition-colors">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-widest opacity-60 group-hover:text-gray-300 font-bold">
                        {exp.role} &mdash; {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold bg-black text-white group-hover:bg-white group-hover:text-black border border-black px-3 py-1 uppercase shrink-0 transition-colors">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs md:text-sm leading-relaxed font-medium">
                        <span className="font-mono text-black group-hover:text-white opacity-40 shrink-0 select-none">
                          &bull;
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PROJECTS GRID SECTION ================= */}
        <section id="projects" className="p-8 md:p-10 border-b-4 border-black bg-white/40 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-black pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-50">
                Production Artifacts
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                CORE PROJECTS
              </h2>
            </div>
            <p className="text-xs max-w-sm leading-relaxed opacity-70 uppercase font-mono font-semibold">
              Live-deployed software showcasing full-stack capabilities, system synchronization, and state-of-the-art NLP vector workflows.
            </p>
          </div>

          {/* High-fidelity full columns projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {profile.projects.map((project, idx) => (
              <div 
                key={idx}
                className="border-4 border-black p-8 bg-white/90 backdrop-blur-md flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-300 min-h-[440px]"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-bold uppercase border border-black group-hover:border-white px-2 py-0.5 bg-black text-white group-hover:bg-white group-hover:text-black transition-colors">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono opacity-50 font-bold">
                      [{idx < 9 ? `0${idx + 1}` : idx + 1}]
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl font-black tracking-tight uppercase group-hover:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest font-black opacity-75 group-hover:text-gray-300">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-black/10 group-hover:border-white/20">
                    {project.description.map((bullet, bIdx) => (
                      <p key={bIdx} className="text-xs md:text-sm leading-relaxed opacity-85 group-hover:opacity-95 font-medium">
                        &bull; {bullet}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10 group-hover:border-white/20 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="text-[9px] font-mono font-bold uppercase border border-black group-hover:border-white px-2 py-0.5 bg-white text-black group-hover:bg-black group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROFESSIONAL CERTIFICATIONS ================= */}
        <section id="certifications" className="p-8 md:p-10 border-b-4 border-black bg-white/40 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-black pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-50">
                Validation Systems
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                PROFESSIONAL CERTIFICATIONS
              </h2>
            </div>
            <p className="text-xs max-w-sm leading-relaxed opacity-70 uppercase font-mono font-semibold">
              Rigorous credential validation from key platform vendors confirming advanced architecture and cloud development abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.certificates.map((cert, idx) => (
              <div 
                key={idx} 
                className="border border-black p-5 bg-white/80 hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[140px] shadow-sm group"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold opacity-40">[{idx < 9 ? `0${idx + 1}` : idx + 1}]</span>
                    <h3 className="text-sm font-black uppercase tracking-tight">{cert.name}</h3>
                  </div>
                  <span className="text-[9px] font-mono font-black uppercase border border-black bg-black text-white px-2 py-0.5 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    {cert.issuer}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] font-mono opacity-50 font-bold border-t border-black/10 pt-3 group-hover:border-white/20">
                  <span>VERIFIED ID STATUS</span>
                  <span className="text-emerald-600 font-extrabold">ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMPETITIVE PROGRAMMING ================= */}
        <section id="competitive-programming" className="p-8 md:p-10 border-b-4 border-black bg-white/40 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-black pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-50">
                Algorithmic Intel
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                COMPETITIVE PROGRAMMING
              </h2>
            </div>
            <p className="text-xs max-w-sm leading-relaxed opacity-70 uppercase font-mono font-semibold">
              Consistently active on core data structure problems, evaluating complexity, and solving algorithmic challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.competitiveProgramming.map((cp, idx) => (
              <div key={idx} className="border border-black p-6 bg-white/80 hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[160px] shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-black/10 pb-2">
                    <span className="text-lg font-black uppercase tracking-wider">{cp.platform}</span>
                    <span className="text-[10px] font-mono uppercase bg-black text-white px-2.5 py-0.5 font-bold">
                      {cp.username}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm font-mono font-bold opacity-80 leading-relaxed">
                    {cp.details}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-[10px] font-mono opacity-55 font-bold">
                  <span>ALGORITHMIC MATRIX PROFILES</span>
                  <span>ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HONORS & ACHIEVEMENTS SECTION ================= */}
        <section className="p-8 md:p-10 border-b-4 border-black bg-white/40 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-black pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-50">
                Industry Awards
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                DISTINCTIONS
              </h2>
            </div>
            <p className="text-xs max-w-sm leading-relaxed opacity-70 uppercase font-mono font-semibold">
              National recognition in software hackathons, cloud architectures, and technological development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.achievements.map((ach, idx) => (
              <div key={idx} className="border border-black p-6 bg-white/80 hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[180px]">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-black/10 pb-2">
                    <Trophy className="w-4 h-4 text-black group-hover:text-white" />
                    {ach.date && (
                      <span className="text-[10px] font-mono font-bold opacity-60 uppercase">
                        {ach.date}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tight leading-tight">
                    {ach.title}
                  </h4>
                  <p className="text-xs leading-relaxed opacity-75">
                    {ach.details}
                  </p>
                </div>
                <div className="text-[10px] font-mono opacity-30 mt-4 uppercase">
                  Verified Event [{idx + 1}]
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CAL.COM MEETING SCHEDULER SECTION ================= */}
        <section id="booking" className="grid grid-cols-1 lg:grid-cols-12 border-b border-black bg-white/45 backdrop-blur-md">
          {/* Info Side with streamlined layout */}
          <div className="lg:col-span-5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between bg-white/30">
            <div className="space-y-6">
              <div className="inline-block border border-black px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white">
                MEETING ENGINE
              </div>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
                BOOK A<br />SESSION INSTANTLY
              </h2>
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a 
                  href={profile.calComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-black px-5 py-2.5 font-mono text-xs font-black uppercase bg-black text-white hover:bg-white hover:text-black transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none"
                >
                  Open External Terminal <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-black px-5 py-2.5 font-mono text-xs font-black uppercase bg-white text-black hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none"
                >
                  Navigate to About Me &uarr;
                </a>
              </div>
            </div>

            <div className="pt-12 text-[10px] font-mono opacity-30 uppercase tracking-widest">
              Cal.com Scheduling Terminal
            </div>
          </div>

          {/* Interactive Scheduler Embed */}
          <div className="lg:col-span-7 p-4 bg-white/50 flex items-center justify-center min-h-[550px]">
            <div className="w-full h-full border-4 border-black p-2 bg-white/95">
              <iframe
                src={`${profile.calComUrl}?embed=true`}
                className="w-full h-[520px] bg-white"
                title="Cal.com Booking Widget"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-10 min-h-[6rem] gap-6 bg-white/40 border-t-4 border-black">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase">
            Available for collaboration &mdash; {profile.email} &bull; +91 {profile.phone}
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-black bg-black transition-transform hover:scale-110" />
              <div className="w-3.5 h-3.5 rounded-full border-2 border-black transition-transform hover:scale-110" />
              <div className="w-3.5 h-3.5 rounded-full border-2 border-black transition-transform hover:scale-110" />
            </div>
            <div className="text-[10px] font-mono opacity-60 font-bold">
              13.0827&deg; N, 80.2707&deg; E
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
