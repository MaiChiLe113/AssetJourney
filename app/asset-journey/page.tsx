"use client";
import Link from "next/link";
import { techzGoals } from "@/data/mockData";
import styles from "./page.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function AssetJourneyListPage() {
  const fmtM = (n: number) => n >= 1e6 ? `${(n / 1e6).toFixed(0)}M` : n.toLocaleString('vi-VN');

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className="page-header" style={{ position: "relative", zIndex: 10 }}>
        <Link href="/gui-tiet-kiem" className="back-btn">
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20, color: "#1A1A1A" }} />
        </Link>
        <div className="page-header-title">TechZ Asset Journey</div>
        <div style={{ width: 42 }} />
      </div>

      <div style={{ padding: "16px" }}>
        {/* Create New Goal Card */}
        <Link href="/asset-journey/setup" style={{ textDecoration: 'none' }}>
          <div className={styles.createNewCard}>
            <div className={styles.createNewIcon}>
              <AddRoundedIcon sx={{ color: "#3B82F6", fontSize: 24 }} />
            </div>
            <div className={styles.createNewText}>
              <div className={styles.createNewTitle}>Tạo mục tiêu mới</div>
              <div className={styles.createNewDesc}>
                Tự đặt ra mục tiêu tích luỹ sẽ giúp bạn tập trung vươn tới ước mơ
              </div>
            </div>
          </div>
        </Link>

        {/* List of Goals */}
        <div className={styles.goalList}>
          {techzGoals.map(goal => (
            <Link key={goal.id} href={`/asset-journey/${goal.id}`} style={{ textDecoration: 'none' }}>
              <div className={styles.goalListCard}>
                <div className={styles.goalListCardTop} style={{ backgroundImage: `url('${goal.bgImage}')` }}>
                  <div className={styles.goalListCardOverlay}>
                    <div className={styles.goalListCardTitle}>{goal.name}</div>
                    <div className={styles.goalListCardAcc}>{goal.accountNumber}</div>
                  </div>
                </div>
                <div className={styles.goalListCardBottom}>
                  <div className={styles.goalListCardRow}>
                    <span className={styles.goalListCardProgress}>{goal.progress}%</span>
                    <span className={styles.goalListCardSaved}>{fmtM(goal.saved)}</span>
                  </div>
                  <div className={styles.goalListCardRow}>
                    <span className={styles.goalListCardDays}>Còn {goal.daysLeft} ngày</span>
                    <span className={styles.goalListCardTarget}>VND {goal.target.toLocaleString('vi-VN')}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
