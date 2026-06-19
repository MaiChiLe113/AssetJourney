"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { properties } from "@/data/mockData";
import styles from "./page.module.css";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import DomainRoundedIcon from "@mui/icons-material/DomainRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";

const fmt = (n: number) =>
  n >= 1e9 ? `${(n / 1e9).toFixed(2)}B` : `${(n / 1e6).toFixed(0)}M`;

export default function HomeJourneyPage() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [monthly, setMonthly] = useState(8);
  const [dpPct, setDpPct] = useState(30);

  const p = properties[idx];
  const dpAmt = (p.price * dpPct) / 100;
  const loan  = p.price - dpAmt;
  const mos   = Math.ceil(dpAmt / (monthly * 1e6));
  const timeline = mos >= 12 ? `${(mos / 12).toFixed(1)} years` : `${mos} months`;
  const repay = Math.round((loan * 0.085 / 12) / (1 - Math.pow(1 + 0.085 / 12, -240)));
  const saved = 142_500_000;
  const pct = Math.min((saved / dpAmt) * 100, 100);

  const figs = [
    { Icon: ApartmentRoundedIcon,   color: "#ED1C24", bg: "#FFF5F5", label: "Property", value: `₫${fmt(p.price)}` },
    { Icon: SavingsRoundedIcon,     color: "#3B82F6", bg: "#EFF6FF", label: "Down Pmt", value: `₫${fmt(dpAmt)}` },
    { Icon: AccountBalanceRoundedIcon, color: "#16A34A", bg: "#F0FDF4", label: "Loan",  value: `₫${fmt(loan)}` },
    { Icon: CalendarMonthRoundedIcon, color: "#F59E0B", bg: "#FFF5E5", label: "Repay/mo", value: `₫${fmt(repay)}M` },
    { Icon: TimerRoundedIcon,        color: "#7C3AED", bg: "#F5F0FF", label: "Timeline", value: timeline },
    { Icon: CheckCircleRoundedIcon,  color: "#16A34A", bg: "#F0FDF4", label: "Saved",   value: `₫${fmt(saved)}` },
  ];

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div onClick={() => router.back()} className={styles.backBtn} style={{ cursor: "pointer" }}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18, color: "#1A1A1A" }} />
        </div>
        <div className={styles.headerTitle}>Home Journey</div>
        <div style={{ width: 40 }} />
      </div>

      {/* Agoda-style Sticky Search Bar */}
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBar}>
          <div className={styles.searchRow}>
            <SearchRoundedIcon sx={{ color: "var(--g400)", fontSize: 20 }} />
            <div className={styles.searchContent}>
              <div className={styles.searchLabel}>Địa điểm</div>
              <div className={styles.searchValue}>TP. Hồ Chí Minh</div>
            </div>
          </div>
          <div className={styles.searchDivider} />
          <div className={styles.searchRow}>
            <FilterAltRoundedIcon sx={{ color: "var(--g400)", fontSize: 20 }} />
            <div className={styles.searchContent}>
              <div className={styles.searchLabel}>Mức giá & Loại</div>
              <div className={styles.searchValue}>Dưới 3 Tỷ · Chung cư</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero photo */}
      <div className={styles.heroImg}>
        <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div className={styles.heroGrad} />
        <div className={styles.heroInfo}>
          <div className={styles.heroBadge}>{p.developer}</div>
          <div className={styles.heroName}>{p.name}</div>
          <div className={styles.heroMeta}><LocationOnRoundedIcon sx={{ fontSize: 14, verticalAlign: 'middle', mb: '2px' }}/> {p.district} · {p.area}m² · {p.bedrooms}BR</div>
        </div>
      </div>

      {/* Property picker pills */}
      <div className={styles.pillScroll}>
        {properties.map((pr: any, i: number) => (
          <button
            key={pr.id}
            className={`${styles.pill} ${i === idx ? styles.pillActive : ""}`}
            onClick={() => setIdx(i)}
          >
            {pr.name.split(" ").slice(0, 2).join(" ")}
          </button>
        ))}
      </div>

      {/* Progress summary */}
      <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.progressRow}>
            <div>
              <div className={styles.miniLabel}>Saved so far</div>
              <div className={styles.bigNum}>₫143M</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className={styles.miniLabel}>Down payment target</div>
              <div className={styles.bigNum}>₫{fmt(dpAmt)}</div>
            </div>
          </div>
          <div className="progress-track" style={{ marginTop: 14 }}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className={styles.progressMeta}>
            <span style={{ color: "var(--tcb-red)", fontWeight: 700 }}>{pct.toFixed(1)}% complete</span>
            <span style={{ color: "var(--text-tertiary)", fontSize: 12 }}>~{timeline} at ₫{monthly}M/mo</span>
          </div>
        </div>
      </div>

      {/* Sliders */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Savings Simulator</div>
        <div className={styles.card}>
          {/* Monthly saving */}
          <div className={styles.sliderBlock}>
            <div className={styles.sliderHeader}>
              <span>Monthly Saving</span>
              <span className={styles.sliderVal}>₫{monthly}M / month</span>
            </div>
            <input className="range-slider" type="range" min={2} max={30} step={1} value={monthly}
              onChange={e => setMonthly(Number(e.target.value))} />
            <div className={styles.sliderHints}><span>₫2M</span><span>₫30M</span></div>
          </div>
          {/* Down payment */}
          <div className={styles.sliderBlock} style={{ marginBottom: 0 }}>
            <div className={styles.sliderHeader}>
              <span>Down Payment</span>
              <span className={styles.sliderVal}>{dpPct}% · ₫{fmt(dpAmt)}</span>
            </div>
            <input className="range-slider" type="range" min={10} max={50} step={5} value={dpPct}
              onChange={e => setDpPct(Number(e.target.value))} />
            <div className={styles.sliderHints}><span>10%</span><span>50%</span></div>
          </div>
        </div>
      </div>

      {/* Key figures grid */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Key Figures</div>
        <div className={styles.figGrid}>
          {figs.map((f: any) => (
            <div key={f.label} className={styles.figCard}>
              <div className={styles.figIcon} style={{ background: f.bg }}>
                <f.Icon sx={{ fontSize: 22, color: f.color }} />
              </div>
              <div className={styles.figVal}>{f.value}</div>
              <div className={styles.figLabel}>{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Tiện ích</div>
        <div className={styles.amenities}>
          {p.amenities.map((a: string) => (
            <span key={a} className="chip chip-gray"><CheckCircleRoundedIcon sx={{ fontSize: 14, mr: 0.5, color: '#16A34A' }} /> {a}</span>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Ecosystem Partners</div>
        <div className="list-group">
          {[
            { Icon: StorefrontRoundedIcon, name: "OneHousing", desc: "Marketplace chính thức" },
            { Icon: DomainRoundedIcon, name: "Masterise Homes", desc: "Chủ đầu tư cao cấp" },
            { Icon: CreditCardRoundedIcon, name: "Home Credit", desc: "Tài chính nội thất" },
          ].map((p: any) => (
            <div key={p.name} className="list-row">
              <div className="list-row-icon" style={{ background: "#FFF5F5" }}>
                <p.Icon sx={{ color: "var(--tcb-red)" }} />
              </div>
              <div className="list-row-content">
                <div className="list-row-title">{p.name}</div>
                <div className="list-row-sub">{p.desc}</div>
              </div>
              <span className="chip chip-red">Đối tác</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.section} style={{ paddingBottom: 0, gap: 10, display: "flex", flexDirection: "column" }}>
        <button className="btn btn-red">Kết nối với RM Advisor</button>
        <Link href="/readiness" className="btn btn-outline" style={{ display: "flex" }}>Xem báo cáo sẵn sàng vay</Link>
      </div>

      <div style={{ height: 24 }} />
    </div>
  );
}
