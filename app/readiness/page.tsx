"use client";
import Link from "next/link";
import { readinessData } from "@/data/mockData";
import styles from "./page.module.css";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const levelColor: Record<number, string> = { 1:"#6490AA", 2:"#F59E0B", 3:"#EA580C", 4:"#16A34A", 5:"#ED1C24" };
const levelLabel: Record<number, string> = { 1:"Explorer", 2:"Builder", 3:"Near Ready", 4:"Pre-approved", 5:"Ready" };
const statusCfg: Record<string, { color: string; bg: string; text: string }> = {
  strong:   { color:"#16A34A", bg:"#F0FDF4", text:"Strong" },
  good:     { color:"#3B82F6", bg:"#EFF6FF", text:"Good" },
  moderate: { color:"#F59E0B", bg:"#FFF5E5", text:"Moderate" },
  building: { color:"#EA580C", bg:"#FFF3EB", text:"Building" },
};

export default function ReadinessPage() {
  const { score, level, factors, improvements } = readinessData;
  const lc = levelColor[level];

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <Link href="/asset-journey" className={styles.backBtn}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18, color: "#1A1A1A" }} />
        </Link>
        <div className={styles.headerTitle}>Readiness Score</div>
        <div style={{ width: 40 }} />
      </div>

      {/* Score Hero */}
      <div className={styles.scoreHero}>
        <svg viewBox="0 0 160 92" className={styles.gauge}>
          <path d="M 16 82 A 64 64 0 0 1 144 82" fill="none" stroke="#F5F5F5" strokeWidth="13" strokeLinecap="round" />
          <path d="M 16 82 A 64 64 0 0 1 144 82" fill="none" stroke={lc} strokeWidth="13" strokeLinecap="round"
            strokeDasharray={`${(score/100)*201} 201`} style={{ transition:"stroke-dasharray 1.2s ease" }} />
          <text x="80" y="72" textAnchor="middle" fill="#1A1A1A" fontSize="30" fontWeight="900">{score}</text>
          <text x="80" y="84" textAnchor="middle" fill="#999" fontSize="10" fontWeight="500">/ 100</text>
        </svg>

        <div className={styles.levelPill} style={{ background: `${lc}18`, color: lc }}>
          <WorkspacePremiumRoundedIcon sx={{ fontSize: 16, color: lc }} />
          Level {level} — {levelLabel[level]}
        </div>
        <div className={styles.scoreHint}>
          Consistent saving for ~14 more months will unlock <strong>Level {Math.min(level+1,5)} — {levelLabel[Math.min(level+1,5)]}</strong>
        </div>
      </div>

      {/* Level dots */}
      <div className={styles.levelDots}>
        <div className={styles.levelLine} />
        {[1,2,3,4,5].map(l => (
          <div key={l} className={styles.levelDotGroup}>
            <div className={styles.dot} style={
              l <= level
                ? { background: levelColor[l], color:"#fff", boxShadow:`0 0 0 3px ${levelColor[l]}28` }
                : { background:"#F5F5F5", color:"#999", border:"1.5px solid #E0E0E0" }
            }>
              {l <= level ? "✓" : l}
            </div>
            <div className={styles.dotLabel} style={{ color: l <= level ? levelColor[l] : "#999" }}>
              {levelLabel[l].split(" ")[0]}
            </div>
          </div>
        ))}
      </div>

      {/* Factor breakdown */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Score Breakdown</div>
        {factors.map(f => {
          const cfg = statusCfg[f.status] || statusCfg.building;
          return (
            <div key={f.name} className={styles.factorCard}>
              <div className={styles.factorTop}>
                <div className={styles.factorName}>{f.name}</div>
                <div className={styles.factorRight}>
                  <div className={styles.factorScore} style={{ color: cfg.color }}>{f.score}</div>
                  <div className={styles.factorBadge} style={{ background: cfg.bg, color: cfg.color }}>{cfg.text}</div>
                </div>
              </div>
              <div className="progress-track" style={{ height: 5, margin: "8px 0 6px" }}>
                <div className="progress-fill" style={{ width:`${f.score}%`, background:`linear-gradient(90deg, ${cfg.color}, ${cfg.color}88)` }} />
              </div>
              <div className={styles.factorDesc}>{f.description}</div>
            </div>
          );
        })}
      </div>

      {/* Improvement roadmap */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          <TrendingUpRoundedIcon sx={{ fontSize: 14, color:"var(--text-tertiary)" }} /> How to Improve
        </div>
        <div className="list-group">
          {improvements.map(item => (
            <div key={item.priority} className="list-row">
              <div className={styles.pBadge}>{item.priority}</div>
              <div className="list-row-content">
                <div className="list-row-title">{item.action}</div>
              </div>
              <span className="chip chip-green">{item.impact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className={styles.section} style={{ display:"flex", flexDirection:"column", gap:10, paddingBottom:0 }}>
        <Link href="/coach" className="btn btn-red" style={{ display:"flex" }}>🤖 Ask Tek Tek How to Improve</Link>
        <button className="btn btn-outline">Request Pre-Screening</button>
        <p className={styles.disclaimer}>⚠️ Readiness score is informational only. Credit decisions follow Techcombank's internal risk policy.</p>
      </div>

      <div style={{ height: 24 }} />
    </div>
  );
}
