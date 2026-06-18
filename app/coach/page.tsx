"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { coachScenarios, coachResponses, currentUser } from "@/data/mockData";
import styles from "./page.module.css";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";

interface Msg { id: string; role: "user" | "coach"; text: string; }

function renderText(text: string) {
  return text.split("\n").map((line, i) => {
    if (!line.trim()) return <br key={i} />;
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return <p key={i} style={{ margin: "2px 0" }}>{parts.map((p, j) =>
      p.startsWith("**") && p.endsWith("**") ? <strong key={j}>{p.slice(2,-2)}</strong> : p
    )}</p>;
  });
}

const WELCOME = `Hi ${currentUser.name.split(" ")[0]}! 👋 I'm Tek Tek.\n\nYou're at **Level 3 — Near Ready** with a score of **68/100**.\n\nWhat would you like to know today?`;

const MASCOTS = ["/mascot/wise.png", "/mascot/excited.png", "/mascot/pointing.png"];

export default function CoachPage() {
  const [msgs, setMsgs] = useState<Msg[]>([{ id: "w", role: "coach", text: WELCOME }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs(m => [...m, { id: `u${Date.now()}`, role: "user", text }]);
    setInput(""); setTyping(true);
    setTimeout(() => {
      const reply = coachResponses[text] || "Based on your profile, saving ₫8M/month and keeping DTI below 25% will move you to Level 4 in ~14 months. Want a breakdown?";
      setMsgs(m => [...m, { id: `c${Date.now()}`, role: "coach", text: reply }]);
      setTyping(false);
    }, 1100);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <Link href="/asset-journey" className={styles.backBtn}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18, color: "#1A1A1A" }} />
        </Link>
        <div className={styles.headerTitle}>Tek Tek</div>
        <div className={styles.liveTag}>● Live</div>
      </div>

      {/* Coach bar */}
      <div className={styles.coachBar}>
        <div className={styles.coachAvatar}>
          <Image src="/mascot/wise.png" alt="Tek Tek" width={26} height={26} />
        </div>
        <div className={styles.coachInfo}>
          <div className={styles.coachName}>Tek Tek</div>
          <div className={styles.coachDesc}>Personalized to Level 3 · 68/100</div>
        </div>
        <div className={styles.tcbTag}>
          <Image src="/images/techcblogo.png" alt="TCB" width={20} height={20} />
        </div>
      </div>

      {/* Scenario chips */}
      <div className={styles.chips}>
        {coachScenarios.map(s => (
          <button key={s.id} className={styles.chip} onClick={() => send(s.prompt)}>{s.label}</button>
        ))}
      </div>

      {/* Messages */}
      <div className={styles.messages}>
        {msgs.map((m, i) => (
          <div key={m.id} className={`${styles.row} ${m.role === "user" ? styles.rowUser : styles.rowCoach}`}>
            {m.role === "coach" && (
              <div className={styles.avatarSmall}><Image src={MASCOTS[i % MASCOTS.length]} alt="Tek Tek" width={18} height={18} /></div>
            )}
            <div className={`${styles.bubble} ${m.role === "user" ? styles.bubbleUser : styles.bubbleCoach}`}>
              {renderText(m.text)}
            </div>
          </div>
        ))}
        {typing && (
          <div className={`${styles.row} ${styles.rowCoach}`}>
            <div className={styles.avatarSmall}><Image src={MASCOTS[msgs.length % MASCOTS.length]} alt="Tek Tek" width={18} height={18} /></div>
            <div className={`${styles.bubble} ${styles.bubbleCoach}`}>
              <div className={styles.dots}><span/><span/><span/></div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className={styles.inputArea}>
        <div className={styles.inputRow}>
          <input id="coach-input" className={styles.chatInput}
            placeholder="Ask about readiness, savings plan..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send(input)}
          />
          <button id="coach-send" className={styles.sendBtn} onClick={() => send(input)} disabled={!input.trim() || typing}>
            <SendRoundedIcon sx={{ fontSize: 18, color: "#fff" }} />
          </button>
        </div>
        <div className={styles.disclaimer}>Tek Tek responses are educational only — not financial advice</div>
      </div>
    </div>
  );
}
