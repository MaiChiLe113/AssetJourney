"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

// The savings products list (exactly mimicking TCB Khám phá screen)
const products = [
  {
    href: null,
    imageSrc: "/images/tienGuiPhatLoc.png",
    eyebrow: "Tiền gửi Phát Lộc Online",
    title: "Yên tâm cất giữ tiền với lãi suất cố định",
    bullets: [
      "Nếu bạn muốn giữ tiền cố định, không dùng đến trong một thời gian cụ thể",
      "Phù hợp nhất cho 6 – 12 tháng",
      "Gửi từ VND 1,000,000",
    ],
    featured: false,
  },
  {
    href: "/asset-journey",   // ← TechZ — THE ONLY ENTERABLE ONE
    imageSrc: "/images/TechZAssetJourney.png",
    eyebrow: "TechZ Asset Journey · Tích lũy mục tiêu",
    title: "Gửi tiết kiệm để sở hữu tài sản đầu đời",
    bullets: [
      "Tích lũy có mục tiêu để mua nhà, xe, hoặc sản phẩm yêu thích",
      "Tek Tek cá nhân hóa kế hoạch & gợi ý sản phẩm vay phù hợp",
      "Gửi từ VND 100,000 · Phù hợp cho 12 – 36 tháng",
    ],
    featured: true,
  },
  {
    href: null,
    imageSrc: "/images/chungChiTienGuiBaoLoc.png",
    eyebrow: "Chứng chỉ tiền gửi Bảo Lộc",
    title: "Sinh lời tối ưu theo số ngày sở hữu",
    bullets: [
      "Nếu bạn có khoản tiền lớn, chưa xác định thời hạn, muốn có thể sử dụng khi cần",
      "Phù hợp nhất cho 1 ngày – 3 tháng",
      "Gửi từ VND 10,000,000",
    ],
    featured: false,
  },
  {
    href: null,
    imageSrc: "/images/tienGuiRutGocLinhHoat.png",
    eyebrow: "Tiền gửi Rút gốc linh hoạt",
    title: "Rút từng phần, không cần tất toán",
    bullets: [
      "Nếu bạn muốn có thể rút một phần gốc mà không ảnh hưởng đến số tiền còn lại",
      "Phù hợp nhất cho 6 – 12 tháng",
      "Gửi từ VND 1,000,000",
    ],
    featured: false,
  },
];

export default function GuiTietKiemPage() {
  return (
    <div className={styles.page}>

      {/* Back arrow */}
      <div className={styles.headerRow}>
        <Link href="/" className="back-btn">
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20, color: "#1A1A1A" }} />
        </Link>
      </div>

      {/* Large title — exact Image 2 style */}
      <div className="large-title-block">
        <h1 className="large-title-h1">Khám phá sản phẩm{"\n"}tiết kiệm</h1>
      </div>

      {/* Product cards */}
      {products.map((p) => {
        const cardClass = `prod-card${p.featured ? " prod-card-featured" : ""}`;
        const content = (
          <>
            {p.featured && (
              <div className={styles.featuredBadge}>
                <span className={styles.featuredDot} />
                Tính năng mới
              </div>
            )}
            <div className="prod-card-icon">
              <div className={styles.prodIcon}>
                <Image src={p.imageSrc} alt={p.title} width={48} height={48} />
              </div>
            </div>
            <div className="prod-card-eyebrow">{p.eyebrow}</div>
            <div className="prod-card-title">{p.title}</div>
            <ul className="prod-card-bullets">
              {p.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            {p.featured && (
              <div className={styles.featuredArrow}>
                Khám phá ngay →
              </div>
            )}
          </>
        );

        return p.href ? (
          <Link key={p.eyebrow} href={p.href} className={cardClass}>
            {content}
          </Link>
        ) : (
          <div key={p.eyebrow} className={`${cardClass} ${styles.cardDisabled}`}>
            {content}
          </div>
        );
      })}

      <div style={{ height: 16 }} />
    </div>
  );
}
