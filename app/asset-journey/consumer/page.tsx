"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { consumerProducts, consumerPartners } from "@/data/mockData";
import styles from "./page.module.css";

const categories = ["All", "Smartphone", "Laptop", "TV"];
const formatM = (val: number) => `₫${(val / 1_000_000).toFixed(1)}M`;

export default function ConsumerJourneyPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(consumerProducts[0]);
  const [monthlySaving, setMonthlySaving] = useState(5);

  const filtered =
    activeCategory === "All"
      ? consumerProducts
      : consumerProducts.filter((p) => p.category === activeCategory);

  const downPayment = selectedProduct.price * 0.4;
  const loanAmount = selectedProduct.price - downPayment;
  const monthsToDown = Math.ceil(downPayment / (monthlySaving * 1_000_000));
  const monthlyRepay = Math.round(
    (loanAmount * 0.07) / 12 / (1 - Math.pow(1 + 0.07 / 12, -12))
  );

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgGlow} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-eyebrow">Consumer Journey</div>
            <h1 className={`text-large-title ${styles.heroTitle}`}>
              Save Smart,
              <br />
              <span style={{ color: "var(--color-warning-yellow)" }}>Own What You Love</span>
            </h1>
            <p className={styles.heroSubtitle}>
              iPhone, MacBook, Smart TV — pick your dream gadget and
              get a personalised saving plan with zero-interest loan options.
            </p>
            <div className={styles.heroBadges}>
              <span className="badge badge-yellow">📱 Consumer Journey</span>
              <span className="badge badge-white">Partners: FPT · Tiki · CellphoneS</span>
              <span className="badge badge-green">3–18 months</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: 80 }}>

        {/* Category filter */}
        <section className={styles.section}>
          <div className={styles.filterRow}>
            <h2 className="text-title2">Choose Your Product</h2>
            <div className={styles.categoryTabs}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.categoryTab} ${activeCategory === cat ? styles.categoryTabActive : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <p className={styles.sectionDesc}>Tap a product to build your savings plan.</p>

          <div className={styles.productGrid}>
            {filtered.map((product) => (
              <button
                key={product.id}
                className={`${styles.productCard} ${selectedProduct.id === product.id ? styles.productSelected : ""}`}
                onClick={() => setSelectedProduct(product)}
              >
                <div className={styles.productImageWrap}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                  <span className="tag">{product.tag}</span>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.productBrand}>{product.brand}</div>
                  <div className={styles.productName}>{product.name}</div>
                  <div className={styles.productCategory}>{product.category}</div>
                  <div className={styles.productPrice}>{formatM(product.price)}</div>
                  <div className={styles.productSavingTime}>
                    ⏱ ~{product.savingMonths} months to save
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Savings plan */}
        <section className={styles.section}>
          <div className={styles.simulatorGrid}>
            <div>
              <h2 className="text-title2">Your Saving Plan</h2>
              <p className={styles.sectionDesc}>
                Building toward: <strong style={{ color: "var(--text-primary)" }}>{selectedProduct.name}</strong>
              </p>

              {/* Product detail */}
              <div className={styles.productDetail}>
                <div className={styles.productDetailImageWrap}>
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="200px"
                  />
                </div>
                <div className={styles.productDetailInfo}>
                  <div className={styles.productDetailName}>{selectedProduct.name}</div>
                  <div className={styles.productDetailPrice}>{formatM(selectedProduct.price)}</div>
                  <div className={styles.productDetailSpecs}>
                    {selectedProduct.specs.map((spec) => (
                      <span key={spec} className={styles.specChip}>{spec}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.sliderBlock}>
                <div className={styles.sliderLabel}>
                  <span>Monthly Saving</span>
                  <span className={styles.sliderValue}>₫{monthlySaving}M / month</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={0.5}
                  value={monthlySaving}
                  onChange={(e) => setMonthlySaving(Number(e.target.value))}
                  className="slider"
                />
                <div className={styles.sliderRange}><span>₫1M</span><span>₫20M</span></div>
              </div>
            </div>

            {/* Plan card */}
            <div className={styles.planCard}>
              <div className={styles.planCardTitle}>Savings Plan</div>
              <div className={styles.planProperty}>
                <span className={styles.planPropertyName}>{selectedProduct.name}</span>
                <span className={styles.planPropertyPrice}>{formatM(selectedProduct.price)}</span>
              </div>
              <div className={styles.planDivider} />
              <div className={styles.planRows}>
                {[
                  { label: "Save for down payment (40%)", value: formatM(downPayment) },
                  { label: "Consumer loan needed", value: formatM(loanAmount) },
                  { label: "Est. monthly repayment", value: formatM(monthlyRepay), highlight: true },
                  { label: "Time to down payment", value: `${monthsToDown} months`, highlight: true },
                ].map((row) => (
                  <div key={row.label} className={`${styles.planRow} ${row.highlight ? styles.planRowHighlight : ""}`}>
                    <span className={styles.planRowLabel}>{row.label}</span>
                    <span className={styles.planRowValue}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.planDivider} />
              <div className={styles.instantOption}>
                <div className={styles.instantTitle}>⚡ Buy Now, Pay Later</div>
                <div className={styles.instantDesc}>
                  If you&apos;re Level 2+, you may qualify for an instant consumer loan
                  to purchase now and repay over 6–12 months.
                </div>
                <Link href="/readiness" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 12, display: "flex" }}>
                  Check My Eligibility
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className={styles.section}>
          <h2 className="text-title2" style={{ marginBottom: 24 }}>Shopping Partners</h2>
          <div className={styles.partnerGrid}>
            {consumerPartners.map((p) => (
              <div key={p.id} className={styles.partnerCard}>
                <div className={styles.partnerLogo}>{p.logo}</div>
                <div className={styles.partnerInfo}>
                  <div className={styles.partnerName}>{p.name}</div>
                  <div className={styles.partnerDesc}>{p.description}</div>
                </div>
                <div className={styles.partnerBenefit}>
                  <span className="badge badge-yellow">✓ {p.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
