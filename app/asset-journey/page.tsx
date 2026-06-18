"use client";
import Link from "next/link";
import Image from "next/image";
import { recentActivity, currentUser, friendActivity, techzGoals } from "@/data/mockData";
import styles from "./page.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";

// Quick action grid items inside TechZ
const quickActions = [
  {
    href: "/asset-journey/setup",
    Icon: AttachMoneyRoundedIcon,
    bg: "#FFF5F5", color: "#ED1C24",
    label: "Đặt\nmục tiêu",
  },
  {
    href: "/asset-journey/home",
    imgSrc: "/images/TechZAssetJourney.png",
    bg: "#EFF6FF", color: "#3B82F6",
    label: "Xem\nnhà",
  },
  {
    href: "/asset-journey/car",
    Icon: DirectionsCarRoundedIcon,
    bg: "#F0FDF4", color: "#16A34A",
    label: "Xem\nxe",
  },
  {
    href: "/asset-journey/loan",
    Icon: AccountBalanceRoundedIcon,
    bg: "#FFFBEB", color: "#D97706",
    label: "Gợi ý\nvay",
  },
  {
    href: "/asset-journey/schedule",
    Icon: NotificationsActiveRoundedIcon,
    bg: "#F5F0FF", color: "#7C3AED",
    label: "Nhắc\ngóp quỹ",
  },
];

// TekTek Recommendations (Pagination cards with real BG)
const recommendations = [
  {
    type: "house",
    title: "Masteri Centre Point",
    desc: "Q.9 · 2BR · 65m²",
    price: "₫2.8B",
    match: "Phù hợp với bạn",
    href: "/asset-journey/home",
    bgImg: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    type: "car",
    title: "VinFast VF 5",
    desc: "EV · 326km range",
    price: "₫458M",
    match: "Phổ biến nhất",
    href: "/asset-journey/car",
    bgImg: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
  },
  {
    type: "house",
    title: "Vinhomes Grand Park",
    desc: "Q.9 · 2BR · 55m²",
    price: "₫2.2B",
    match: "Vừa ngân sách",
    href: "/asset-journey/home",
    bgImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
  {
    type: "car",
    title: "VinFast VF 3",
    desc: "Smart City EV",
    price: "₫235M",
    match: "Dễ mua nhất",
    href: "/asset-journey/car",
    bgImg: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80",
  },
];

export default function AssetJourneyPage() {
  // Mock: user has a home goal in progress
  const goal = {
    type: "home",
    label: "Alex's Dream House",
    target: 2_500_000_000,
    saved: 143_000_000,
  };
  const pct = Math.round((goal.saved / goal.target) * 100);
  const fmtM = (n: number) => `${(n / 1e6).toFixed(0)}M`;

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

      {/* TCB Logo ribbon (border removed via CSS update) */}
      <div className={styles.logoRibbon}>
        <Image src="/images/techcblogo.png" alt="TCB" width={24} height={24} style={{ objectFit: 'contain' }} />
        <span className={styles.logoText}>Techcombank · Tích lũy thông minh</span>
      </div>

      {/* Streak & U-Points Bar */}
      <div className={styles.gamifyBar}>
        <div className={styles.gamifyItem}>
          <LocalFireDepartmentRoundedIcon sx={{ fontSize: 18, color: '#ED1C24' }} />
          <span className={styles.gamifyVal}>{currentUser.savingStreak} ngày</span>
          <span className={styles.gamifyLabel}>liên tiếp</span>
        </div>
        <div className={styles.gamifyDivider} />
        <div className={styles.gamifyItem}>
          <DiamondRoundedIcon sx={{ fontSize: 18, color: '#3B82F6' }} />
          <span className={styles.gamifyVal}>{currentUser.uPoints.toLocaleString('vi-VN')}</span>
          <span className={styles.gamifyLabel}>U-Points</span>
        </div>
        <div className={styles.gamifyDivider} />
        <div className={styles.gamifyItem}>
          <WorkspacePremiumRoundedIcon sx={{ fontSize: 18, color: '#D97706' }} />
          <span className={styles.gamifyVal}>Lv.{currentUser.readinessLevel}</span>
          <span className={styles.gamifyLabel}>Hạng</span>
        </div>
      </div>

      {/* ── Active Goal Card with Real Background & Mascot ── */}
      <div className={styles.goalSection}>
        <Link href="/asset-journey/goal/tg1" style={{ textDecoration: 'none', display: 'block' }}>
          <div className={styles.goalCard} style={{ backgroundImage: `url('${techzGoals[0].bgImage}')` }}>
            <div className={styles.goalOverlay}>
              <div className={styles.goalTop}>
                <div className={styles.goalLeft}>
                  <div className={styles.goalEyebrow}>Mục tiêu của bạn</div>
                  <div className={styles.goalTitle}>{techzGoals[0].name}</div>
                </div>
                <div className={styles.goalEdit}>Chỉnh sửa</div>
              </div>
            
            <div className={styles.goalAmts}>
              <div>
                <div className={styles.goalAmtLabel}>Đã tích luỹ</div>
                <div className={styles.goalAmtVal}>{(techzGoals[0].saved / 1000000).toLocaleString('vi-VN')}M</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className={styles.goalAmtLabel}>Mục tiêu</div>
                <div className={styles.goalAmtValTarget}>{(techzGoals[0].target / 1000000).toLocaleString('vi-VN')}M</div>
              </div>
            </div>

            <div className={styles.progTrackWrapper}>
              <div className={styles.progFillGlow} style={{ width: `${techzGoals[0].progress}%` }} />
            </div>
            
              <div className={styles.goalMeta}>
                <span className={styles.pctText}>{techzGoals[0].progress}% Đã hoàn thành</span>
                <span className={styles.metaText}>~{Math.ceil(techzGoals[0].daysLeft / 30)} tháng còn lại</span>
              </div>
            </div>
          </div>
        </Link>
        
        {/* Under Goal Stats */}
        <div className={styles.goalStats}>
          <div className={styles.goalStat}>
            <div className={styles.goalStatVal}>₫8M</div>
            <div className={styles.goalStatLbl}>Góp/tháng</div>
          </div>
          <div className={styles.goalStatDiv} />
          <div className={styles.goalStat}>
            <div className={styles.goalStatVal}>7.9%</div>
            <div className={styles.goalStatLbl}>Lãi suất/năm</div>
          </div>
          <div className={styles.goalStatDiv} />
          <div className={styles.goalStat}>
            <div className={styles.goalStatVal} style={{ color: "#D97706" }}><WorkspacePremiumRoundedIcon sx={{ fontSize: 16, mr: 0.5 }} /> Lv.3</div>
            <div className={styles.goalStatLbl}>Sẵn sàng vay</div>
          </div>
        </div>
        
        {/* TekTek Motivation Message */}
        <div style={{ marginTop: 12, padding: "10px 14px", background: "#fff", borderRadius: "var(--r-lg)", display: "flex", gap: "10px", alignItems: "flex-start", border: "1px solid rgba(237, 28, 36, 0.1)" }}>
          <div style={{ width: 36, height: 36, background: '#f8f9fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Image src="/mascot/confident.png" alt="TekTek" width={24} height={24} style={{ objectFit: 'contain' }} />
          </div>
          <div style={{ fontSize: 13, color: "var(--g700)", lineHeight: 1.4, flex: 1 }}>
            <strong style={{ color: "var(--tcb-red)", display: "block", marginBottom: 2 }}>TekTek Coach:</strong>
            "Hành trình vạn dặm bắt đầu từ một bước chân. Bạn đã làm rất tốt, tiếp tục tích lũy để sớm sở hữu ngôi nhà mơ ước nhé!"
          </div>
        </div>
      </div>

      {/* ── Quick Action Grid ── */}
      <div className={styles.quickSection}>
        <div className={styles.quickGrid}>
          {quickActions.map(({ href, Icon, imgSrc, bg, color, label }) => (
            <Link key={href} href={href} className={styles.quickCell}>
              <div className={styles.quickCellIcon} style={{ background: bg }}>
                {Icon && <Icon sx={{ fontSize: 28, color }} />}
                {imgSrc && <Image src={imgSrc} alt={label} width={28} height={28} />}
              </div>
              <span className={styles.quickCellLabel}>{label}</span>
            </Link>
          ))}
          {/* TekTek Coach uses mascot */}
          <Link href="/coach" className={styles.quickCell}>
            <div className={styles.quickCellIcon} style={{ background: "#fff", padding: 4 }}>
              <Image src="/mascot/wise.png" alt="Coach" width={40} height={40} style={{ objectFit: "contain" }} />
            </div>
            <span className={styles.quickCellLabel}>TekTek{"\n"}Coach</span>
          </Link>
        </div>
      </div>

      {/* ── TechZ Deals Banner ── */}
      <div className={styles.dealsBanner}>
        <div className={styles.dealsBannerLeft}>
          <CardGiftcardRoundedIcon sx={{ fontSize: 22, color: '#fff' }} />
          <div>
            <div className={styles.dealsBannerTitle}>Ưu đãi độc quyền TechZ</div>
            <div className={styles.dealsBannerDesc}>Giảm đến 5% bất động sản & 12 tháng sạc miễn phí</div>
          </div>
        </div>
        <Link href="/asset-journey/setup" className={styles.dealsBannerBtn}>Khám phá →</Link>
      </div>

      {/* ── Friend Activity Nudge ── */}
      <div className={styles.friendNudge}>
        <div className="sec-head" style={{ paddingBottom: 8 }}>
          <span className="sec-head-title" style={{ fontSize: 14 }}>🤝 Bạn bè đang tiết kiệm</span>
        </div>
        {friendActivity.slice(0, 2).map((fa) => (
          <div key={fa.id} className={styles.friendNudgeItem}>
            <div className={styles.friendAvatar}>{fa.avatar}</div>
            <div className={styles.friendText}>
              {fa.action === 'saved' && `${fa.name} vừa gửi ₫${(fa.amount ?? 0).toLocaleString('vi-VN')}`}
              {fa.action === 'streak' && `${fa.name} đạt chuỗi ${fa.streakDays} ngày! 🔥`}
              {fa.action === 'invite' && `${fa.name} mời bạn tham gia chiến dịch`}
            </div>
            <span className={styles.friendTime}>{fa.time}</span>
          </div>
        ))}
        <div className={styles.friendNudgeCta}>Bạn thì sao? Gửi ngay →</div>
      </div>

      <div className="divider" />

      {/* ── TekTek Recommendations (Pagination Style) ── */}
      <div className={styles.recSection}>
        <div className="sec-head" style={{ paddingBottom: 12 }}>
          <span className="sec-head-title">
            <Image src="/mascot/pointing.png" alt="TekTek" width={24} height={24} style={{ verticalAlign: "middle", marginRight: 6 }} />
            {" "}TekTek gợi ý cho bạn
          </span>
        </div>

        <div className={styles.recCarousel}>
          {recommendations.map((r, idx) => (
            <Link key={idx} href={r.href} className={styles.recCard} style={{ backgroundImage: `url(${r.bgImg})` }}>
              <div className={styles.recCardOverlay}>
                <div className={styles.recCardTag}>{r.match}</div>
                <div className={styles.recCardBottom}>
                  <div className={styles.recCardTitle}>{r.title}</div>
                  <div className={styles.recCardDesc}>{r.desc}</div>
                  <div className={styles.recCardPrice}>{r.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* ── Progress snapshot ── */}
      <div>
        <div className="sec-head">
          <span className="sec-head-title">
            <TrendingUpRoundedIcon sx={{ fontSize: 18, verticalAlign: "middle", color: "#16A34A" }} />
            {" "}Hành trình của bạn
          </span>
        </div>
        <div className={styles.journeySteps}>
          {[
            { step: 1, label: "Chọn mục tiêu",       done: true  },
            { step: 2, label: "Kế hoạch tài chính",   done: true  },
            { step: 3, label: "Tích lũy định kỳ",     done: false, active: true },
            { step: 4, label: "Sẵn sàng vay",         done: false },
            { step: 5, label: "Sở hữu tài sản",       done: false },
          ].map((s, i, arr) => (
            <div key={s.step} className={styles.step}>
              <div className={styles.stepDotWrap}>
                <div className={styles.stepDot} style={{
                  background: s.done ? "var(--tcb-red)" : s.active ? "var(--tcb-red)" : "var(--g200)",
                  border: s.active ? "3px solid var(--tcb-red-mid)" : "none",
                }}>
                  {s.done && <span>✓</span>}
                </div>
                {i < arr.length - 1 && (
                  <div className={styles.stepLine} style={{ background: s.done ? "var(--tcb-red)" : "var(--g200)" }} />
                )}
              </div>
              <div className={styles.stepLabel} style={{ color: s.done || s.active ? "var(--g900)" : "var(--g400)", fontWeight: s.active ? 700 : 400 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="divider" />

      {/* ── Lịch Sử Hoạt Động Gần Đây ── */}
      <div className={styles.activitySection}>
        <div className="sec-head">
          <span className="sec-head-title">Lịch sử hoạt động gần đây</span>
        </div>
        <div className={styles.activityList}>
          {recentActivity.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={styles.activityIcon}>
                {activity.type === 'saving' ? <AttachMoneyRoundedIcon sx={{ color: "#16A34A" }} /> : 
                 activity.type === 'reward' ? <WorkspacePremiumRoundedIcon sx={{ color: "#D97706" }} /> : 
                 activity.type === 'milestone' ? <TrendingUpRoundedIcon sx={{ color: "#3B82F6" }} /> : 
                 <AutoAwesomeRoundedIcon sx={{ color: "#7C3AED" }} />}
              </div>
              <div className={styles.activityContent}>
                <div className={styles.activityTitle}>{activity.description}</div>
                <div className={styles.activityDate}>{activity.date}</div>
              </div>
              <div className={styles.activityRight}>
                {activity.amount && (
                  <span className={activity.positive ? styles.amtPositive : styles.amtNegative}>
                    {activity.positive ? '+' : '-'}₫{fmtM(activity.amount)}
                  </span>
                )}
                {activity.points && (
                  <span className={styles.pointsPositive}>+{activity.points} pts</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 24 }} />
    </div>
  );
}
