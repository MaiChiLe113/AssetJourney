"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/asset-journey/home", label: "Home Journey" },
  { href: "/asset-journey/car", label: "Car Journey" },
  { href: "/asset-journey/consumer", label: "Consumer" },
  { href: "/coach", label: "Tek Tek" },
  { href: "/readiness", label: "Readiness" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>T</span>
          <span className={styles.logoText}>
            Tech<span className={styles.logoZ}>Z</span>
          </span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <div className={styles.userChip}>
            <div className={styles.userAvatar}>AN</div>
            <span className={styles.userName}>Alex</span>
            <span className={styles.userPoints}>⭐ 4,750 pts</span>
          </div>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
