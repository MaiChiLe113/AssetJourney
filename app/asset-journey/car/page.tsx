"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { vinFastCars } from "@/data/mockData";
import styles from "./page.module.css";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import AirlineSeatReclineNormalRoundedIcon from "@mui/icons-material/AirlineSeatReclineNormalRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import EvStationRoundedIcon from "@mui/icons-material/EvStationRounded";

const fmtB = (n: number) => n >= 1e9 ? `${(n/1e9).toFixed(2)}B` : `${(n/1e6).toFixed(0)}M`;
const fmtM = (n: number) => `${(n/1e6).toFixed(1)}M`;

export default function CarJourneyPage() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [monthly, setMonthly] = useState(5);
  const [dpPct, setDpPct] = useState(30);
  const [selectedColor, setSelectedColor] = useState(vinFastCars[0].colors[0]);
  const [imgErr, setImgErr] = useState<Record<string, boolean>>({});

  const car = vinFastCars[idx];
  const dpAmt = (car.price * dpPct) / 100;
  const loan  = car.price - dpAmt;
  const mos   = Math.ceil(dpAmt / (monthly * 1e6));
  const timeline = mos >= 12 ? `${(mos/12).toFixed(1)} yr` : `${mos} mo`;
  const repay = Math.round((loan * 0.085 / 12) / (1 - Math.pow(1 + 0.085/12, -60)));

  const selectCar = (i: number) => { setIdx(i); setSelectedColor(vinFastCars[i].colors[0]); };

  return (
    <div className={styles.page}>

      {/* Header */}
      <div className={styles.pageHeader}>
        <div onClick={() => router.back()} className={styles.backBtn} style={{ cursor: "pointer" }}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18, color: "#1A1A1A" }} />
        </div>
        <div className={styles.headerTitle}>Car Journey</div>
        <div style={{ width: 40 }} />
      </div>

      {/* Agoda-style Sticky Search Bar */}
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBar}>
          <div className={styles.searchRow}>
            <SearchRoundedIcon sx={{ color: "var(--g400)", fontSize: 20 }} />
            <div className={styles.searchContent}>
              <div className={styles.searchLabel}>Hãng xe</div>
              <div className={styles.searchValue}>VinFast</div>
            </div>
          </div>
          <div className={styles.searchDivider} />
          <div className={styles.searchRow}>
            <FilterAltRoundedIcon sx={{ color: "var(--g400)", fontSize: 20 }} />
            <div className={styles.searchContent}>
              <div className={styles.searchLabel}>Dòng xe & Mức giá</div>
              <div className={styles.searchValue}>SUV · Dưới 1 Tỷ</div>
            </div>
          </div>
        </div>
      </div>

      {/* VinFast brand */}
      <div className={styles.brandBar}>
        <div className={styles.brandLeft}>
          <BoltRoundedIcon sx={{ fontSize: 18, color: "#16A34A" }} />
          <span>Official VinFast Partner</span>
        </div>
        <span className="chip chip-green">EV Only <BoltRoundedIcon sx={{ fontSize: 14, ml: 0.5, verticalAlign: 'middle' }} /></span>
      </div>

      {/* Model tabs */}
      <div className={styles.modelTabs}>
        {vinFastCars.map((c: any, i: number) => (
          <button key={c.id} className={`${styles.tab} ${i === idx ? styles.tabActive : ""}`} onClick={() => selectCar(i)}>
            <div className={styles.tabName}>{c.model}</div>
            <div className={styles.tabPrice}>₫{fmtB(c.price)}</div>
            {c.tag && <div className={styles.tabBadge}>{c.tag}</div>}
          </button>
        ))}
      </div>

      {/* Car image */}
      <div className={styles.carImgSection}>
        <div className={styles.carImgWrap}>
          <Image
            key={car.id + (imgErr[car.id] ? "-fb" : "")}
            src={imgErr[car.id] ? car.imageFallback : car.image}
            alt={car.model} fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            onError={() => setImgErr(p => ({ ...p, [car.id]: true }))}
            sizes="430px"
          />
        </div>
        {/* Color picker */}
        <div className={styles.colorRow}>
          <span className={styles.colorLabel}>Màu sắc</span>
          {car.colors.map((c: string) => (
            <button key={c} className={`${styles.colorDot} ${selectedColor === c ? styles.colorDotActive : ""}`}
              style={{ background: c, borderColor: c === "#FFFFFF" ? "#ccc" : c }}
              onClick={() => setSelectedColor(c)} />
          ))}
        </div>
      </div>

      {/* Car info */}
      <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.carTag}>{car.tag || "Electric Vehicle"}</div>
          <div className={styles.carModel}>{car.model}</div>
          <div className={styles.carTagline}>{car.tagline}</div>
          <div className={styles.carPrice}>₫{fmtB(car.price)}</div>
          <div className={styles.specRow}>
            <div className={styles.specItem}>
              <BoltRoundedIcon sx={{ fontSize: 20, color: "#3B82F6" }} />
              <div className={styles.specVal}>{car.range}</div>
              <div className={styles.specLbl}>Range</div>
            </div>
            <div className={styles.specItem}>
              <SpeedRoundedIcon sx={{ fontSize: 20, color: "#F59E0B" }} />
              <div className={styles.specVal}>{car.power}</div>
              <div className={styles.specLbl}>Power</div>
            </div>
            <div className={styles.specItem}>
              <AirlineSeatReclineNormalRoundedIcon sx={{ fontSize: 20, color: "#16A34A" }} />
              <div className={styles.specVal}>{car.seats}</div>
              <div className={styles.specLbl}>Seats</div>
            </div>
          </div>
        </div>
      </div>

      {/* Simulator */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Savings Simulator</div>
        <div className={styles.card}>
          <div className={styles.sliderBlock}>
            <div className={styles.sliderHeader}>
              <span>Monthly Saving</span><span className={styles.sliderVal}>₫{monthly}M/month</span>
            </div>
            <input className="range-slider" type="range" min={1} max={20} step={0.5} value={monthly}
              onChange={e => setMonthly(Number(e.target.value))} />
            <div className={styles.sliderHints}><span>₫1M</span><span>₫20M</span></div>
          </div>
          <div className={styles.sliderBlock} style={{ marginBottom: 0 }}>
            <div className={styles.sliderHeader}>
              <span>Down Payment</span><span className={styles.sliderVal}>{dpPct}% · ₫{fmtB(dpAmt)}</span>
            </div>
            <input className="range-slider" type="range" min={10} max={50} step={5} value={dpPct}
              onChange={e => setDpPct(Number(e.target.value))} />
            <div className={styles.sliderHints}><span>10%</span><span>50%</span></div>
          </div>
        </div>
      </div>

      {/* Key figures */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Key Figures</div>
        <div className={styles.figGrid}>
          {[
            { Icon: DirectionsCarRoundedIcon,  color: "#16A34A", bg: "#F0FDF4", label: "Car Price",   val: `₫${fmtB(car.price)}` },
            { Icon: SavingsRoundedIcon,         color: "#3B82F6", bg: "#EFF6FF", label: "Down Pmt",   val: `₫${fmtB(dpAmt)}` },
            { Icon: AccountBalanceRoundedIcon,  color: "#ED1C24", bg: "#FFF5F5", label: "Loan",       val: `₫${fmtB(loan)}` },
            { Icon: CalendarMonthRoundedIcon,   color: "#F59E0B", bg: "#FFF5E5", label: "Repay/mo",   val: `₫${fmtM(repay)}M` },
            { Icon: TimerRoundedIcon,           color: "#7C3AED", bg: "#F5F0FF", label: "Timeline",   val: timeline },
            { Icon: BoltRoundedIcon,            color: "#16A34A", bg: "#F0FDF4", label: "Rate",       val: "8.5% p.a." },
          ].map((f: any) => (
            <div key={f.label} className={styles.figCard}>
              <div className={styles.figIcon} style={{ background: f.bg }}>
                <f.Icon sx={{ fontSize: 22, color: f.color }} />
              </div>
              <div className={styles.figVal}>{f.val}</div>
              <div className={styles.figLabel}>{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>EV Benefits</div>
        <div className="list-group">
          {[
            { Icon: EvStationRoundedIcon, name: "Free Charging", desc: "12 tháng mạng VinFast" },
            { Icon: SecurityRoundedIcon, name: "Bảo hiểm PTI",  desc: "Giảm 15% phí bảo hiểm" },
            { Icon: BuildRoundedIcon, name: "Bảo dưỡng",      desc: "3 lần miễn phí" },
          ].map((b: any) => (
            <div key={b.name} className="list-row">
              <div className="list-row-icon" style={{ background: "#F0FDF4" }}>
                <b.Icon sx={{ color: "#16A34A" }} />
              </div>
              <div className="list-row-content">
                <div className="list-row-title">{b.name}</div>
                <div className="list-row-sub">{b.desc}</div>
              </div>
              <span className="chip chip-green">Included</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className={styles.section} style={{ paddingBottom: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        <button className="btn btn-red">Đặt lịch lái thử</button>
        <Link href="/readiness" className="btn btn-outline" style={{ display: "flex" }}>Kiểm tra sẵn sàng vay</Link>
      </div>
      <div style={{ height: 24 }} />
    </div>
  );
}
