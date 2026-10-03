'use client';

import React from "react";

const TECH_ITEMS = [
  { name: "React", slug: "react", category: "Frontend" },
  { name: "Next.js", slug: "nestjs", category: "Full-Stack" },
  { name: "TypeScript", slug: "type", category: "Language" },
  { name: "JavaScript", slug: "javascript", category: "Language" },
  { name: "Tailwind", slug: "tailwindcss", category: "UI" },
  { name: "Node.js", slug: "nodejs", category: "Backend" },
  { name: "Spring Boot", slug: "spring-boot", category: "Backend" },
  { name: "Java", slug: "java", category: "Language" },
  { name: "C++", slug: "cplusplus", category: "Language" },
  { name: "PostgreSQL", slug: "postgresql", category: "Database" },
  { name: "Redis", slug: "redis", category: "Cache" },
  { name: "Docker", slug: "docker", category: "DevOps" },
  { name: "Azure", slug: "azure", category: "Cloud" },
  { name: "Git", slug: "git", category: "Tools" },
  { name: "Linux", slug: "linux", category: "System" },
  { name: "RabbitMQ", slug: "rabbitmq", category: "Message Queue" },
];

export default function Frameworks() {
  return (
    <div className="w-full py-2">
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-xl mx-auto">
        {TECH_ITEMS.map((tech) => (
          <div
            key={tech.name}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090f16]/90 border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-950/20 transition-colors duration-200 cursor-default"
          >
            <img
              loading="lazy"
              src={`/assets/logos/${tech.slug}.svg`}
              alt={tech.name}
              className="w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-200"
              onError={(e) => {
                // Fallback gracefully if logo is missing
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-xs font-medium text-gray-300 group-hover:text-cyan-300 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}