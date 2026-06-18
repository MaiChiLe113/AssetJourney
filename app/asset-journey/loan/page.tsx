"use client";
import Link from "next/link";
import styles from "./page.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";

const loanProducts = [
  {
    icon: "🏠",
    iconBg: "#EFF6FF",
    name: "Vay Nhà Ở",
    subname: "Techcombank Home Loan",
    rate: "8.5%/năm",
    term: "Tối đa 25 năm",
    limit: "₫10B",
    match: 72,
    readyIn: "14 tháng",
    status: "nearly",
    bullets: ["Ân hạn gốc 12 tháng", "Giải ngân theo tiến độ", "Thẩm định nhanh 3 ngày"],
  },
  {
    icon: "🚗",
    iconBg: "#F0FDF4",
    name: "Vay Mua Xe",
    subname: "VinFast Auto Loan",
    rate: "9.2%/năm",
    term: "Tối đa 7 năm",
    limit: "₫800M",
    match: 85,
    readyIn: "6 tháng",
    status: "close",
    bullets: ["Duyệt trong 24h", "Không cần tài sản thế chấp", "Bảo hiểm kết hợp giảm 15%"],
  },
];

const factors = [
  { label: "Điểm tín dụng", value: "Tốt (680)", pct: 68, color: "#16A34A" },
  { label: "Tỉ lệ nợ/thu nhập (DTI)", value: "22% (Tốt)", pct: 78, color: "#3B82F6" },
  { label: "Lịch sử tiết kiệm", value: "8 tháng", pct: 55, color: "#F59E0B" },
  { label: "Số dư tích lũy", value: "₫143M", pct: 39, color: "#ED1C24" },
];

export default function LoanSuggestionPage() {
  const readinessScore = 68;

  return (
    <div className={styles.page}>
      <div className="page-header" style={{ background: "#fff" }}>
        <Link href="/asset-journey" className="back-btn">
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20, color: "#1A1A1A" }} />
        </Link>
        <div className="page-header-title">Gợi ý vay</div>
        <div style={{ width: 42 }} />
      </div>

      {/* Readiness score hero */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>
            <WorkspacePremiumRoundedIcon sx={{ fontSize: 14, color: "#D97706" }} />
            Level 3 — Near Ready
          </div>
          <div className={styles.heroScore}>{readinessScore}</div>
          <div className={styles.heroScoreLabel}>Asset Readiness Score</div>
          <div className={styles.heroHint}>
            Tiếp tục tích lũy 14 tháng nữa để đạt điều kiện vay tốt nhất
          </div>
        </div>
        <svg viewBox="0 0 100 60" className={styles.gauge}>
          <path d="M 10 52 A 40 40 0 0 1 90 52" fill="none" stroke="#F5F5F5" strokeWidth="8" strokeLinecap="round" />
          <path d="M 10 52 A 40 40 0 0 1 90 52" fill="none" stroke="#ED1C24" strokeWidth="8" strokeLinecap="round"
            strokeDasharray={`${(readinessScore / 100) * 125} 125`}
            style={{ transition: "stroke-dasharray 1s ease" }} />
          <text x="50" y="48" textAnchor="middle" fill="#1A1A1A" fontSize="18" fontWeight="900">{readinessScore}</text>
        </svg>
      </div>

      {/* Score factors */}
      <div className={styles.factorsSection}>
        <div className={styles.sectionLabel}>Các yếu tố đánh giá</div>
        {factors.map(f => (
          <div key={f.label} className={styles.factorRow}>
            <div className={styles.factorLabel}>{f.label}</div>
            <div className={styles.factorRight}>
              <div className={styles.factorVal} style={{ color: f.color }}>{f.value}</div>
              <div className="prog-track" style={{ width: 80, height: 4 }}>
                <div className="prog-fill" style={{ width: `${f.pct}%`, background: f.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* Loan products */}
      <div className={styles.loansSection}>
        <div className={styles.sectionLabel} style={{ padding: "14px 16px 10px" }}>Sản phẩm vay gợi ý</div>
        {loanProducts.map(lp => (
          <div key={lp.name} className={styles.loanCard}>
            <div className={styles.loanTop}>
              <div className={styles.loanIcon} style={{ background: lp.iconBg }}>{lp.icon}</div>
              <div className={styles.loanInfo}>
                <div className={styles.loanName}>{lp.name}</div>
                <div className={styles.loanSub}>{lp.subname}</div>
              </div>
              <div className={styles.loanMatch}>
                <div className={styles.loanMatchPct} style={{ color: lp.status === "close" ? "#16A34A" : "#F59E0B" }}>
                  {lp.match}%
                </div>
                <div className={styles.loanMatchLabel}>phù hợp</div>
              </div>
            </div>

            <div className={styles.loanStats}>
              <div className={styles.loanStat}>
                <TrendingUpRoundedIcon sx={{ fontSize: 14, color: "var(--g400)" }} />
                <span>{lp.rate}</span>
              </div>
              <div className={styles.loanStat}>
                <ScheduleRoundedIcon sx={{ fontSize: 14, color: "var(--g400)" }} />
                <span>{lp.term}</span>
              </div>
              <div className={styles.loanStat}>
                <AccountBalanceRoundedIcon sx={{ fontSize: 14, color: "var(--g400)" }} />
                <span>Đến {lp.limit}</span>
              </div>
            </div>

            <ul className={styles.loanBullets}>
              {lp.bullets.map(b => (
                <li key={b}>
                  <CheckCircleRoundedIcon sx={{ fontSize: 13, color: "#16A34A", flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>

            <div className={styles.readyBadge} style={{
              background: lp.status === "close" ? "#F0FDF4" : "#FFFBEB",
              color: lp.status === "close" ? "#16A34A" : "#D97706",
            }}>
              <ScheduleRoundedIcon sx={{ fontSize: 14 }} />
              Sẵn sàng trong {lp.readyIn}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <Link href="/readiness" className="btn btn-red" style={{ display: "flex" }}>
          Xem báo cáo sẵn sàng đầy đủ
        </Link>
        <div style={{ height: 10 }} />
        <button className="btn btn-outline">Đặt lịch tư vấn với RM</button>
      </div>

      <div style={{ height: 24 }} />
    </div>
  );
}
