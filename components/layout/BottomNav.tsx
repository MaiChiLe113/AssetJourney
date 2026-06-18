"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const navItems = [
  { href: "/",              Icon: HomeRoundedIcon,         label: "Home" },
  { href: "/asset-journey", Icon: TrackChangesRoundedIcon, label: "Journey", dot: true },
  { href: "/readiness",     Icon: BarChartRoundedIcon,     label: "Readiness" },
  { href: "/coach",         Icon: SmartToyRoundedIcon,     label: "Tek Tek" },
  { href: "/profile",       Icon: PersonRoundedIcon,       label: "Me" },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="bottom-nav">
      {navItems.map(({ href, Icon, label, dot }) => {
        const active = isActive(href);
        return (
          <Link key={href} href={href} className={`bottom-nav-item ${active ? "active" : ""}`}>
            <div className="bottom-nav-icon">
              <Icon sx={{ fontSize: 26, color: active ? "var(--tcb-red)" : "var(--gray-400)" }} />
              {dot && !active && <span className="bottom-nav-dot" />}
            </div>
            <span className="bottom-nav-label" style={{ color: active ? "var(--tcb-red)" : "var(--gray-400)" }}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
