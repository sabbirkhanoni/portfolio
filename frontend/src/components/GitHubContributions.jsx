import React, { useState, useEffect, useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import TiltCard from "./TiltCard";

// Generate 52 weeks (364 days) matching the user's provided screenshot
function generateHeatmapDays() {
  const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const days = [];
  
  // Seedable pseudo-pattern mirroring the user's screenshot:
  // Activity peaks in Oct, Nov, Dec, Feb, Mar, Apr, May, Jun
  for (let week = 0; week < 52; week++) {
    for (let day = 0; day < 7; day++) {
      let level = 0;
      let count = 0;

      // Oct (weeks 8-11)
      if ((week === 9 && day >= 1 && day <= 3) || (week === 10 && day === 1) || (week === 13 && day >= 2 && day <= 5)) {
        level = (day % 2 === 0) ? 3 : 2;
        count = level * 3;
      }
      // Dec (weeks 16-17)
      else if ((week === 16 && (day === 0 || day === 1)) || (week === 17 && day === 1)) {
        level = 2;
        count = 4;
      }
      // Feb/Mar (weeks 26-30)
      else if ((week === 27 && (day === 2 || day === 3)) || (week === 28 && (day >= 1 && day <= 3))) {
        level = (day === 1) ? 4 : 2;
        count = level * 4;
      }
      // Apr (weeks 32-35)
      else if ((week === 33 && (day === 0 || day === 1 || day === 4)) || (week === 34 && (day === 2 || day === 4))) {
        level = (day === 0) ? 3 : 2;
        count = level * 3;
      }
      // May/Jun (weeks 37-45, heavy activity matching screenshot)
      else if (
        (week === 38 && (day === 1 || day === 2)) ||
        (week === 39 && (day === 1 || day === 3 || day === 4)) ||
        (week === 40 && (day >= 0 && day <= 4)) ||
        (week === 41 && (day === 1 || day === 2 || day === 5)) ||
        (week === 43 && (day >= 0 && day <= 3)) ||
        (week === 44 && day === 4) ||
        (week === 46 && day === 5) ||
        (week === 48 && day === 3)
      ) {
        level = (week === 40 || week === 43) ? (day % 2 === 0 ? 4 : 3) : 2;
        count = level * 4;
      } else {
        // Occasional light random contributions
        if ((week * 7 + day) % 19 === 0) {
          level = 1;
          count = 1;
        } else if ((week * 7 + day) % 43 === 0) {
          level = 2;
          count = 3;
        }
      }

      const monthIndex = Math.min(11, Math.floor(week / 4.4));
      const dayOfMonth = (week * 7 + day) % 28 + 1;
      const dateStr = `${months[monthIndex]} ${dayOfMonth}`;

      days.push({
        week,
        day,
        level,
        count,
        countText: count > 0 ? `${count} contribution${count > 1 ? "s" : ""} on ${dateStr}` : `No contributions on ${dateStr}`,
      });
    }
  }
  return days;
}

export default function GitHubContributions() {
  const [stats, setStats] = useState({
    contributions: 371,
    repos: 13,
    followers: 2,
  });

  const [hoveredDay, setHoveredDay] = useState(null);
  const days = useMemo(() => generateHeatmapDays(), []);

  // Map levels to exact orange theme colors from screenshot
  const getCubeColorClass = (level) => {
    switch (level) {
      case 0:
        return "bg-[#161b22] border border-[#21262d]/60";
      case 1:
        return "bg-[#ff8c32]/30 border border-[#ff8c32]/40";
      case 2:
        return "bg-[#ff8c32]/55 border border-[#ff8c32]/65";
      case 3:
        return "bg-[#ff8c32]/80 border border-[#ff8c32]/90 shadow-[0_0_8px_rgba(255,140,50,0.4)]";
      case 4:
        return "bg-[#ff8c32] border border-orange-300 shadow-[0_0_12px_rgba(255,140,50,0.8)]";
      default:
        return "bg-[#161b22] border border-[#21262d]/60";
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-7 py-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-2 max-w-lg">
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#ff8c32] bg-[#ff8c32]/10 border border-[#ff8c32]/30 px-3.5 py-1 rounded-full uppercase">
          Open Source
        </span>
        <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Acorn, sans-serif' }}>
          GitHub Contributions
        </h3>
        <p className="text-xs md:text-sm text-gray-400 font-sans">
          Building in public, contributing to the community
        </p>
      </div>

      {/* Stats Block (Exact Amber/Orange Numbers Matching Screenshot) */}
      <div className="flex justify-center gap-10 sm:gap-20 my-2">
        {/* Stat 1: Contributions */}
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl font-black text-[#ff8c32] tracking-tight drop-shadow-[0_0_15px_rgba(255,140,50,0.3)]">
            {stats.contributions}
          </span>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">
            Contributions
          </span>
        </div>

        {/* Stat 2: Repositories */}
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl font-black text-[#ff8c32] tracking-tight drop-shadow-[0_0_15px_rgba(255,140,50,0.3)]">
            {stats.repos}
          </span>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1 text-center">
            Repositories <span className="block text-[9px] text-gray-500 font-mono">PUBLIC</span>
          </span>
        </div>

        {/* Stat 3: Followers */}
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl font-black text-[#ff8c32] tracking-tight drop-shadow-[0_0_15px_rgba(255,140,50,0.3)]">
            {stats.followers}
          </span>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">
            Followers
          </span>
        </div>
      </div>

      {/* 3D Tilt Card with Heatmap Grid */}
      <TiltCard className="w-full max-w-4xl p-6 md:p-8 rounded-3xl border border-white/10 bg-[#090d12]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
        <div className="flex flex-col gap-4 overflow-x-auto scrollbar-thin items-center justify-center">
          
          {/* Months Label Row */}
          <div className="flex text-[10px] font-mono text-gray-400 font-semibold justify-between w-full min-w-[700px] px-8 select-none">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>

          <div className="flex gap-3 min-w-[700px] w-full items-center">
            {/* Weekday Labels */}
            <div className="flex flex-col justify-between text-[10px] font-mono text-gray-400 font-semibold py-1 h-[88px] select-none">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Interactive Grid Cubes (52 columns x 7 rows) */}
            <div className="flex-1 grid grid-flow-col grid-rows-7 gap-[3.5px] py-1 relative">
              {days.map((day, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  className={`w-[11px] h-[11px] rounded-[2.5px] transition-all duration-150 cursor-pointer ${getCubeColorClass(
                    day.level
                  )} hover:scale-150 hover:z-30 hover:border-2 hover:border-[#ff8c32] hover:shadow-[0_0_14px_rgba(255,140,50,0.9)]`}
                />
              ))}
            </div>
          </div>

          {/* Active Hover Tooltip Display & Legend */}
          <div className="h-6 flex items-center justify-between w-full min-w-[700px] text-xs font-mono text-gray-400 px-3 mt-2 select-none">
            <div className="text-[#ff8c32] font-semibold text-xs transition-colors">
              {hoveredDay ? hoveredDay.countText : "Hover over any cube to view daily activity"}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[#161b22] border border-[#21262d]/60" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[#ff8c32]/30 border border-[#ff8c32]/40" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[#ff8c32]/55 border border-[#ff8c32]/65" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[#ff8c32]/80 border border-[#ff8c32]/90" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[#ff8c32] shadow-sm shadow-orange-500/50" />
              <span>More</span>
            </div>
          </div>

        </div>
      </TiltCard>

      {/* Footer Profile Link */}
      <a
        href="https://github.com/sabbirkhanoni"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gray-400 hover:text-[#ff8c32] transition-colors mt-1 group"
      >
        <FaGithub className="w-4 h-4 text-white group-hover:text-[#ff8c32] transition-colors" />
        <span>View full profile on GitHub</span>
        <LuExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
}
