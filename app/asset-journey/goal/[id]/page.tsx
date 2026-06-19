"use client";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { techzGoals, friendActivity, friendLeaderboard, tekTekMessages, uPointActions, streakCalendar } from "@/data/mockData";
import styles from "./page.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";

// Icon mapping for actions
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const IconMap: Record<string, any> = {
  savings: SavingsRoundedIcon,
  visibility: VisibilityRoundedIcon,
  group_add: GroupAddRoundedIcon,
  local_fire_department: LocalFireDepartmentRoundedIcon,
  emoji_events: EmojiEventsRoundedIcon,
  flag: FlagRoundedIcon,
  trending_up: TrendingUpRoundedIcon,
  chat: ChatRoundedIcon
};

export default function GoalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  // Find goal, fallback to first if not found
  const goal = techzGoals.find(g => g.id === id) || techzGoals[0];

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <Link href={`/asset-journey/${goal.id}`} className={styles.iconBtnWhite}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20 }} />
        </Link>
        <div className={styles.headerTitle}>Chi tiết mục tiêu</div>
        <div style={{ width: 40 }} /> {/* Spacer */}
      </div>

      {/* HERO CARD */}
      <div className={styles.heroSection}>
        <div className={styles.heroCard} style={{ backgroundImage: `url(${goal.bgImage})` }}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroTop}>
              <div className={styles.heroFlag}>
                <AssistantPhotoRoundedIcon sx={{ fontSize: 16 }} />
              </div>
            </div>
            <div className={styles.heroBottom}>
              <div className={styles.goalName}>{goal.name}</div>
              <div className={styles.accNum}>{goal.accountNumber}</div>
            </div>
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progTop}>
            <span className={styles.progLabel}>Tiến độ</span>
            <span className={styles.progPct}>{goal.progress}%</span>
          </div>
          <div className="prog-track" style={{ marginBottom: 12 }}>
            <div className="prog-fill" style={{ width: `${goal.progress}%` }} />
          </div>
          <div className={styles.progAmts}>
            <span className={styles.progAmtVal}>{(goal.saved).toLocaleString('vi-VN')} đ</span>
            <span className={styles.progAmtTarget}>/ {(goal.target).toLocaleString('vi-VN')} đ</span>
          </div>
          <div className={styles.daysLeft}>Còn {goal.daysLeft} ngày</div>
        </div>
      </div>

      <div className="divider" />

      {/* STREAK & U-POINTS */}
      <div className={styles.section}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIconBg} style={{ background: '#FEE2E2', color: '#EF4444' }}>
              <LocalFireDepartmentRoundedIcon />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statVal}>{goal.streakDays} ngày</div>
              <div className={styles.statLabel}>liên tiếp</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIconBg} style={{ background: '#DBEAFE', color: '#3B82F6' }}>
              <DiamondRoundedIcon />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statVal}>{(goal.uPointsEarned).toLocaleString('vi-VN')}</div>
              <div className={styles.statLabel}>U-Points</div>
            </div>
          </div>
        </div>

        <div className={styles.calendarCard}>
          <div className={styles.calDaysRow}>
            <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
          </div>
          <div className={styles.calGrid}>
            {/* Pad to start on correct day of week, simplifying for mockup */}
            <div className={styles.calCellEmpty} />
            {streakCalendar.map((saved, idx) => (
              <div key={idx} className={`${styles.calCell} ${saved ? styles.calCellSaved : styles.calCellMissed}`} />
            ))}
          </div>
          <div className={styles.milestoneText}>
            Gửi thêm 3 ngày nữa để mở khoá huy hiệu 'Kiên Trì'! 🏅
          </div>
        </div>

        <div className={styles.actionsBox}>
          <div className={styles.actionsBoxTitle}>Cách nhận thêm U-Points</div>
          <div className={styles.actionsList}>
            {uPointActions.map((action, idx) => {
              const Icon = IconMap[action.icon] || StarRoundedIcon;
              return (
                <div key={idx} className={styles.actionRow}>
                  <div className={styles.actionRowLeft}>
                    <div className={styles.actionIconSm}><Icon sx={{ fontSize: 16 }} /></div>
                    <span>{action.action}</span>
                  </div>
                  <div className={styles.actionPoints}>+{action.points} pts</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* TEKTEK COACHING */}
      <div className={styles.coachSection}>
        <div className={styles.coachCard}>
          <div className={styles.mascotBg}>
            <Image src={tekTekMessages.consistent.mascot} alt="TekTek" width={48} height={48} style={{ objectFit: 'contain' }} />
          </div>
          <div className={styles.coachMsg}>{tekTekMessages.consistent.message}</div>
        </div>
      </div>

      <div className="divider" />

      {/* FRIEND ACTIVITY */}
      <div className={styles.section}>
        <div className="sec-head" style={{ marginBottom: 12 }}>
          <span className="sec-head-title" style={{ fontSize: 14 }}>Bạn bè đang tiết kiệm</span>
        </div>
        <div className={styles.activityList}>
          {friendActivity.map(fa => (
            <div key={fa.id} className={styles.faRow}>
              <div className={styles.faAvatar}>{fa.avatar}</div>
              <div className={styles.faText}>
                {fa.action === 'saved' && <span><b>{fa.name}</b> vừa gửi ₫{(fa.amount ?? 0).toLocaleString('vi-VN')} cho '{fa.goal}'</span>}
                {fa.action === 'streak' && <span><b>{fa.name}</b> đạt chuỗi {fa.streakDays} ngày! 🔥</span>}
                {fa.action === 'invite' && <span><b>{fa.name}</b> mời bạn tham gia '{fa.campaign}'</span>}
                {fa.action === 'milestone' && <span><b>{fa.name}</b> {fa.milestone}</span>}
              </div>
              <div className={styles.faTime}>{fa.time}</div>
            </div>
          ))}
        </div>
        <div className={styles.nudgeCard}>Bạn thì sao? Gửi ngay →</div>
      </div>

      <div className="divider" />

      {/* LEADERBOARD */}
      <div className={styles.section}>
        <div className="sec-head" style={{ marginBottom: 12 }}>
          <span className="sec-head-title" style={{ fontSize: 14 }}>Chiến dịch: Mua nhà trước 30</span>
        </div>
        <div className={styles.leaderboardBox}>
          {friendLeaderboard.map((lb) => (
            <div key={lb.rank} className={`${styles.lbRow} ${lb.isYou ? styles.lbRowYou : ''}`}>
              <div className={styles.lbRank}>
                {lb.rank === 1 ? '🥇' : lb.rank === 2 ? '🥈' : lb.rank === 3 ? '🥉' : lb.rank}
              </div>
              <div className={styles.lbAvatar}>{lb.avatar}</div>
              <div className={styles.lbName}>{lb.name}</div>
              <div className={styles.lbInfo}>
                <div className={styles.lbAmt}>{(lb.saved).toLocaleString('vi-VN')} đ</div>
                <div className={styles.lbStreak}>{lb.streakDays} ngày 🔥</div>
              </div>
            </div>
          ))}
        </div>
        <button className={`btn btn-outline`} style={{ width: '100%', marginTop: 12 }}>
          Mời thêm bạn
        </button>
      </div>

      <div className="divider" />

      {/* QUICK ACTIONS */}
      <div className={styles.section} style={{ paddingBottom: 32 }}>
        <button className={`btn btn-red`} style={{ width: '100%', marginBottom: 12 }}>Gửi thêm ngay</button>
        <button className={`btn btn-outline`} style={{ width: '100%' }}>Xem lịch sử giao dịch</button>
      </div>

    </div>
  );
}
