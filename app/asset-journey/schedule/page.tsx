"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

type Freq = "weekly" | "biweekly" | "monthly-start" | "monthly-mid" | "custom";

const frequencies: { id: Freq; label: string; desc: string }[] = [
  { id: "monthly-start", label: "Đầu tháng", desc: "Mỗi ngày 1 hàng tháng" },
  { id: "monthly-mid",   label: "Giữa tháng", desc: "Mỗi ngày 15 hàng tháng" },
  { id: "weekly",        label: "Mỗi tuần", desc: "Thứ Hai hàng tuần" },
  { id: "biweekly",      label: "2 tuần/lần", desc: "Cách tuần một lần" },
  { id: "custom",        label: "Tùy chỉnh", desc: "Bạn tự chọn ngày" },
];

const amounts = [1, 2, 3, 5, 8, 10, 15, 20];

export default function SchedulePage() {
  const router = useRouter();
  const [freq, setFreq] = useState<Freq>("monthly-start");
  const [amount, setAmount] = useState(8);
  const [notifOn, setNotifOn] = useState(true);
  const [saved, setSaved] = useState(false);

  const perYear = freq === "weekly" ? amount * 52 : freq === "biweekly" ? amount * 26 : amount * 12;

  return (
    <div className={styles.page}>
      <div className="page-header" style={{ background: "#fff" }}>
        <div onClick={() => router.back()} className="back-btn" style={{ cursor: "pointer" }}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20, color: "#1A1A1A" }} />
        </div>
        <div className="page-header-title">Nhắc góp quỹ</div>
        <div style={{ width: 42 }} />
      </div>

      {/* Header icon */}
      <div className={styles.headerIcon}>
        <div className={styles.iconCircle}>
          <NotificationsActiveRoundedIcon sx={{ fontSize: 36, color: "#7C3AED" }} />
        </div>
        <div className={styles.headerTitle}>Thiết lập lịch góp quỹ</div>
        <div className={styles.headerDesc}>
          Techcombank sẽ nhắc bạn chuyển tiền vào tài khoản tích lũy theo lịch đã đặt
        </div>
      </div>

      {/* Frequency */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Tần suất góp quỹ</div>
        <div className={styles.freqList}>
          {frequencies.map(f => (
            <button
              key={f.id}
              className={`${styles.freqItem} ${freq === f.id ? styles.freqActive : ""}`}
              onClick={() => setFreq(f.id)}
            >
              <div className={styles.freqLeft}>
                <div className={styles.freqLabel}>{f.label}</div>
                <div className={styles.freqDesc}>{f.desc}</div>
              </div>
              {freq === f.id
                ? <CheckCircleRoundedIcon sx={{ fontSize: 22, color: "var(--tcb-red)" }} />
                : <RadioButtonUncheckedRoundedIcon sx={{ fontSize: 22, color: "var(--g300)" }} />
              }
            </button>
          ))}
        </div>
      </div>

      {/* Amount chips */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Số tiền mỗi lần (triệu đồng)</div>
        <div className={styles.amtGrid}>
          {amounts.map(a => (
            <button
              key={a}
              className={`${styles.amtChip} ${amount === a ? styles.amtChipActive : ""}`}
              onClick={() => setAmount(a)}
            >
              ₫{a}M
            </button>
          ))}
        </div>

        {/* Custom input */}
        <div className={styles.customRow}>
          <span className={styles.customLabel}>Hoặc nhập số tiền:</span>
          <div className={styles.customInput}>
            <span>₫</span>
            <input
              type="number"
              value={amount}
              min={0.5}
              max={100}
              step={0.5}
              onChange={e => setAmount(Number(e.target.value))}
              className={styles.customInputField}
            />
            <span>M</span>
          </div>
        </div>
      </div>

      {/* Summary card */}
      <div className={styles.section}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryRow}>
            <span>Góp mỗi lần</span>
            <strong>₫{amount}M</strong>
          </div>
          <div className={styles.summaryRow}>
            <span>Tần suất</span>
            <strong>{frequencies.find(f => f.id === freq)?.label}</strong>
          </div>
          <div className="divider-sm" style={{ margin: "10px 0" }} />
          <div className={styles.summaryRow}>
            <span>Ước tính/năm</span>
            <strong style={{ color: "var(--tcb-red)" }}>₫{perYear}M</strong>
          </div>
        </div>
      </div>

      {/* Notification toggle */}
      <div className={styles.section}>
        <div className={styles.toggleRow}>
          <div>
            <div className={styles.toggleLabel}>Bật thông báo nhắc nhở</div>
            <div className={styles.toggleDesc}>Nhận thông báo push trước ngày góp 1 ngày</div>
          </div>
          <button
            className={`${styles.toggle} ${notifOn ? styles.toggleOn : ""}`}
            onClick={() => setNotifOn(n => !n)}
            aria-label="Toggle notification"
          >
            <span className={styles.toggleThumb} />
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.section} style={{ paddingBottom: 0 }}>
        {saved ? (
          <div className={styles.savedSuccess}>
            <CheckCircleRoundedIcon sx={{ fontSize: 24, color: "#16A34A" }} />
            Đã lưu lịch góp quỹ thành công!
          </div>
        ) : (
          <button className="btn btn-red" onClick={() => setSaved(true)}>
            Lưu lịch góp quỹ
          </button>
        )}
        <div style={{ height: 10 }} />
        <div onClick={() => router.back()} className="btn btn-ghost" style={{ display: "flex", marginTop: 8, cursor: "pointer", justifyContent: "center" }}>
          Quay lại
        </div>
      </div>

      <div style={{ height: 24 }} />
    </div>
  );
}
