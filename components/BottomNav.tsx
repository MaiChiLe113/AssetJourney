"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";

const items = [
  { href: "/",          Icon: HomeRoundedIcon,                  label: "Trang chủ" },
  { href: "/accounts",  Icon: AccountBalanceWalletRoundedIcon,   label: "Tài khoản\n& Thẻ" },
  { href: "/transfer",  Icon: SwapHorizRoundedIcon,              label: "Chuyển tiền\n& Thanh toán" },
  { href: "/rewards",   Icon: StarsRoundedIcon,                  label: "Techcombank\nRewards", badge: "23" },
  { href: "/overview",  Icon: PieChartRoundedIcon,               label: "Tổng quan\ntài sản" },
];

export default function BottomNav() {
  const path = usePathname();
  const isActive = (href: string) => href === "/" ? path === "/" : path.startsWith(href);

  if (path !== "/") return null;

  return (
    <nav className="bottom-nav">
      {items.map(({ href, Icon, label, badge }) => {
        const active = isActive(href);
        return (
          <Link key={href} href={href} className={`bottom-nav-item ${active ? "active" : ""}`} style={{ pointerEvents: href !== "/" ? "none" : "auto", opacity: href !== "/" ? 0.6 : 1 }}>
            <div className="bottom-nav-icon">
              <Icon sx={{ fontSize: 26 }} />
              {badge && !active && <span className="bottom-nav-badge">{badge}</span>}
            </div>
            <span className="bottom-nav-label" style={{ textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.2 }}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
