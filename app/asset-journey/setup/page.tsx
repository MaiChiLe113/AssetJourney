"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";

type GoalType = "home" | "car" | "custom" | null;

const goalTypes = [
  {
    id: "home" as GoalType,
    Icon: HouseRoundedIcon,
    iconBg: "#EFF6FF",
    iconColor: "#3B82F6",
    title: "Nhà ở",
    desc: "Tích lũy để mua nhà hoặc chung cư đầu tiên",
    bullets: ["Căn hộ từ ₫1.5B", "Phối hợp với khoản vay ngân hàng", "Tek Tek gợi ý dự án phù hợp"],
    href: "/asset-journey/home",
  },
  {
    id: "car" as GoalType,
    Icon: DirectionsCarRoundedIcon,
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
    title: "Ô tô",
    desc: "Tích lũy để mua xe — đặc biệt là xe điện VinFast",
    bullets: ["VinFast EV từ ₫235M", "Bảo hiểm & phụ kiện kết hợp", "12 tháng sạc miễn phí"],
    href: "/asset-journey/car",
  },
  {
    id: "custom" as GoalType,
    Icon: AttachMoneyRoundedIcon,
    iconBg: "#FFF5F5",
    iconColor: "#ED1C24",
    title: "Mục tiêu tự chọn",
    desc: "Đặt số tiền mục tiêu theo nhu cầu cá nhân",
    bullets: ["Tự do đặt bất kỳ con số nào", "Theo dõi tiến độ tích lũy", "Kết nối tiết kiệm tự động"],
    href: null,
  },
];

export default function SetupGoalPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<GoalType>(null);
  const [customAmt, setCustomAmt] = useState(200);
  const [step, setStep] = useState<"choose" | "configure">("choose");

  const chosen = goalTypes.find(g => g.id === selected);

  const handleNext = () => {
    if (!selected) return;
    if (selected === "custom") { setStep("configure"); return; }
    router.push(chosen!.href!);
  };

  return (
    <div className={styles.page}>
      <div className="page-header" style={{ background: "#fff" }}>
        <Link href="/asset-journey" className="back-btn">
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20, color: "#1A1A1A" }} />
        </Link>
        <div className="page-header-title">
          {step === "choose" ? "Chọn mục tiêu" : "Cấu hình mục tiêu"}
        </div>
        <div style={{ width: 42 }} />
      </div>

      {step === "choose" && (
        <>
          <div className="large-title-block" style={{ paddingBottom: 16 }}>
            <h1 className="large-title-h1">Bạn muốn{"\n"}tích lũy để làm gì?</h1>
          </div>

          {goalTypes.map((g) => (
            <div
              key={g.id!}
              className={`prod-card ${selected === g.id ? styles.cardSelected : ""}`}
              onClick={() => setSelected(g.id)}
            >
              <div className={styles.cardTopRow}>
                <div className="prod-card-icon" style={{ marginBottom: 0 }}>
                  <div className={styles.prodIcon} style={{ background: g.iconBg }}>
                    <g.Icon sx={{ fontSize: 30, color: g.iconColor }} />
                  </div>
                </div>
                {selected === g.id && <span className={styles.checkMark}>✓</span>}
              </div>
              <div className="prod-card-eyebrow" style={{ marginTop: 12 }}>{g.desc}</div>
              <div className="prod-card-title">{g.title}</div>
              <ul className="prod-card-bullets">
                {g.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}

          <div className={styles.ctaRow}>
            <button className="btn btn-red" disabled={!selected} onClick={handleNext}>
              Tiếp tục →
            </button>
          </div>
        </>
      )}

      {step === "configure" && selected === "custom" && (
        <div className={styles.configurePage}>
          <div className="large-title-block" style={{ paddingBottom: 16 }}>
            <h1 className="large-title-h1">Số tiền{"\n"}mục tiêu</h1>
          </div>

          <div className={styles.configCard}>
            <div className={styles.amtDisplay}>
              <span className={styles.amtVal}>₫{customAmt}M</span>
              <span className={styles.amtLabel}>= {(customAmt / 1000).toFixed(1)}B VND</span>
            </div>
            <input
              className="range-slider"
              type="range"
              min={10}
              max={2000}
              step={10}
              value={customAmt}
              onChange={e => setCustomAmt(Number(e.target.value))}
            />
            <div className={styles.sliderHints}><span>₫10M</span><span>₫2B</span></div>

            <div className={styles.configStats}>
              <div className={styles.configStat}>
                <div className={styles.configStatVal}>₫{Math.round(customAmt / 18)}M</div>
                <div className={styles.configStatLbl}>Góp/tháng (18th)</div>
              </div>
              <div className={styles.configStat}>
                <div className={styles.configStatVal}>₫{Math.round(customAmt / 36)}M</div>
                <div className={styles.configStatLbl}>Góp/tháng (36th)</div>
              </div>
              <div className={styles.configStat}>
                <div className={styles.configStatVal}>7.9%</div>
                <div className={styles.configStatLbl}>Lãi suất/năm</div>
              </div>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/asset-journey/schedule" className="btn btn-red" style={{ display: "flex" }}>
              Đặt lịch góp quỹ →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
