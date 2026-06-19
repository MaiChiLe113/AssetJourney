"use client";
import Link from "next/link";
import styles from "./page.module.css";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export default function HomePage() {
  return (
    <div className={styles.page}>


      {/* ── Hero area (beige bg + buildings) ── */}
      <div className={styles.hero}>
        {/* priority badge + bell */}
        <div className={styles.heroTop}>
          <div className={styles.priorityBadge}>
            <span>PP</span>
            <span className={styles.prioritySub}>Priority</span>
          </div>
          <button className={styles.bellBtn} aria-label="Thông báo">
            <NotificationsRoundedIcon sx={{ fontSize: 26, color: "#fff" }} />
            <span className={styles.notifBadge}>23</span>
          </button>
        </div>

        {/* balance + savings promo */}
        <div className={styles.balanceCard}>
          <div className={styles.balanceRow}>
            <div>
              <div className={styles.balanceLabel}>Số dư hiện có</div>
              <div className={styles.balanceMasked}>••••••••</div>
            </div>
            <button aria-label="Hiển thị số dư">
              <VisibilityOffRoundedIcon sx={{ fontSize: 22, color: "#595959" }} />
            </button>
          </div>

          {/* savings promo block */}
          <div className={styles.savingsPromo}>
            <div className={styles.savingsPromoIcon}>🪙</div>
            <div className={styles.savingsPromoText}>
              <div className={styles.savingsPromoTitle}>Tích lũy hiệu quả</div>
              <div className={styles.savingsPromoDesc}>
                Nhận lãi suất lên tới 7.9%/năm cho khoản tiết kiệm mở mới
              </div>
            </div>
          </div>

          <Link href="/gui-tiet-kiem" className={styles.sendNowBtn}>
            Gửi ngay
          </Link>
        </div>

        {/* buildings decoration */}
        <div className={styles.buildings} aria-hidden="true">
          <div className={styles.bld1} /><div className={styles.bld2} />
          <div className={styles.bld3} /><div className={styles.bld4} />
          <div className={styles.bld5} /><div className={styles.bld6} />
        </div>
      </div>

      {/* ── Quick actions ── */}
      <div className={styles.quickBar}>
        {/* Gửi tiết kiệm — the ONLY enterable one → routes to /gui-tiet-kiem */}
        <Link href="/gui-tiet-kiem" className={styles.quickItem}>
          <div className={styles.quickIcon}>
            <SavingsRoundedIcon sx={{ fontSize: 28, color: "#ED1C24" }} />
          </div>
          <span className={styles.quickLabel}>Gửi{"\n"}tiết kiệm</span>
        </Link>

        {/* Others — greyed out, not clickable */}
        {[
          { Icon: DiamondRoundedIcon,       label: "Quyền lợi\nhội viên" },
          { Icon: QrCodeScannerRoundedIcon, label: "Quét\nmã QR" },
          { Icon: AutoGraphRoundedIcon,     label: "Sinh lời\ntự động" },
          { Icon: GridViewRoundedIcon,      label: "Tính năng\nkhác" },
        ].map(({ Icon, label }) => (
          <button key={label} className={`${styles.quickItem} ${styles.quickItemGray}`} disabled>
            <div className={styles.quickIcon}>
              <Icon sx={{ fontSize: 28, color: "#C2C2C2" }} />
            </div>
            <span className={styles.quickLabel} style={{ color: "#999" }}>{label}</span>
          </button>
        ))}
      </div>

      {/* divider arrow */}
      <div className={styles.moreArrow}>
        <div className={styles.moreArrowLine} />
        <KeyboardArrowRightRoundedIcon sx={{ fontSize: 18, color: "#C2C2C2" }} />
      </div>

      {/* ── Dành cho bạn ── */}
      <div className={styles.forYouSection}>
        <div className={styles.forYouTitle}>Dành cho bạn</div>

        {/* savings rate promo card */}
        <div className={styles.promoScroll}>
          <div className={styles.promoCard}>
            <div className={styles.promoCardContent}>
              <div className={styles.promoCardTitle}>Gửi tiết kiệm</div>
              <div className={styles.promoCardDesc}>
                Nhận lãi suất lên tới 7.9%/năm{"\n"}cho khoản tiết kiệm mở mới
              </div>
              <Link href="/gui-tiet-kiem" className={styles.promoCardBtn}>
                Tiết kiệm ngay
              </Link>
            </div>
            <div className={styles.promoCardRight}>
              <div className={styles.promoTag}>ĐẶC QUYỀN</div>
              <div className={styles.promoJar}>🏺</div>
              <div className={styles.promoRate}>7.9%</div>
            </div>
          </div>

          {/* TechZ teaser */}
          <Link href="/gui-tiet-kiem" className={styles.promoCardAj}>
            <div className={styles.promoAjOverlay}>
              <div className={styles.promoAjTag}>
                <span className={styles.liveDot} />
                MỚI
              </div>
              <div className={styles.promoAjTextContainer}>
                <div className={styles.promoAjTitle}>TechZ Asset Journey</div>
                <div className={styles.promoAjDesc}>
                  Cùng mua nhà với OneHousing và Techcombank
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* dots indicator */}
        <div className={styles.dotRow}>
          <span className={styles.dotActive} />
          <span className={styles.dot} /><span className={styles.dot} />
          <span className={styles.dot} /><span className={styles.dot} />
        </div>
      </div>

      <div style={{ height: 16 }} />
    </div>
  );
}
