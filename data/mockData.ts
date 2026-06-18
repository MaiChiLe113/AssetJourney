// ============================================================
// TechZ Asset Journey — Mock Data
// ============================================================

export const currentUser = {
  id: "u001",
  name: "Alex Nguyen",
  age: 26,
  occupation: "Software Engineer",
  income: 28_000_000, // VND/month
  avatar: "AN",
  joinedDate: "2024-03-15",
  readinessLevel: 3,
  readinessLabel: "Near Ready",
  totalSaved: 142_500_000,
  savingStreak: 8,
  uPoints: 4750,
  badges: [
    { id: "b1", name: "First Step", icon: "🎯", earned: true },
    { id: "b2", name: "3-Month Streak", icon: "🔥", earned: true },
    { id: "b3", name: "Goal Setter", icon: "🏆", earned: true },
    { id: "b4", name: "Consistent Saver", icon: "💎", earned: true },
    { id: "b5", name: "Halfway Hero", icon: "⭐", earned: false },
    { id: "b6", name: "Ready to Fly", icon: "🚀", earned: false },
  ],
};

export const savingsHistory = [
  { month: "Nov", saved: 8_200_000, target: 8_000_000 },
  { month: "Dec", saved: 8_000_000, target: 8_000_000 },
  { month: "Jan", saved: 9_500_000, target: 8_000_000 },
  { month: "Feb", saved: 7_800_000, target: 8_000_000 },
  { month: "Mar", saved: 8_000_000, target: 8_000_000 },
  { month: "Apr", saved: 10_200_000, target: 8_000_000 },
  { month: "May", saved: 8_500_000, target: 8_000_000 },
  { month: "Jun", saved: 8_000_000, target: 8_000_000 },
  { month: "Jul", saved: 9_100_000, target: 8_000_000 },
  { month: "Aug", saved: 8_300_000, target: 8_000_000 },
  { month: "Sep", saved: 8_600_000, target: 8_000_000 },
  { month: "Oct", saved: 8_300_000, target: 8_000_000 },
];

export const activeGoal = {
  id: "g001",
  type: "home" as const,
  title: "Dream Apartment",
  description: "2BR apartment in Thu Duc City",
  targetValue: 2_500_000_000,
  currentSaved: 142_500_000,
  monthlyTarget: 8_000_000,
  startDate: "2024-03-15",
  targetDate: "2030-03-15",
  progress: 5.7,
  linkedLoan: {
    amount: 1_750_000_000,
    term: 240,
    rate: 8.5,
    monthlyPayment: 15_200_000,
  },
};

export const recentActivity = [
  { id: "a1", type: "saving", description: "Auto-save completed", amount: 8_000_000, date: "2024-10-28", positive: true },
  { id: "a2", type: "reward", description: "3-month streak reward", points: 500, date: "2024-10-25", positive: true },
  { id: "a3", type: "milestone", description: "Reached 5% of home goal", date: "2024-10-20", positive: true },
  { id: "a4", type: "saving", description: "Bonus saving added", amount: 2_000_000, date: "2024-10-18", positive: true },
  { id: "a5", type: "badge", description: "Earned 'Consistent Saver' badge", date: "2024-10-15", positive: true },
];

export const nextBestActions = [
  {
    id: "nba1",
    priority: "high",
    title: "Boost your monthly saving",
    description: "Your income increased last month. Save an extra 2M VND to reach your goal 4 months earlier.",
    cta: "Adjust Plan",
    icon: "trending-up",
    color: "#28CD41",
  },
  {
    id: "nba2",
    priority: "medium",
    title: "You're Near Ready for a loan",
    description: "Prepare 2 documents now to accelerate your pre-screening when you're ready.",
    cta: "See Checklist",
    icon: "file-check",
    color: "#6490AA",
  },
  {
    id: "nba3",
    priority: "low",
    title: "Earn 300 U-Points this week",
    description: "Complete this week's Daily Challenge to unlock a dining voucher.",
    cta: "Start Challenge",
    icon: "gift",
    color: "#F7CF42",
  },
];

// ============================================================
// HOME JOURNEY
// ============================================================

export const properties = [
  {
    id: "p1",
    name: "Masteri Centre Point",
    developer: "Masterise Homes",
    district: "Thu Duc City",
    price: 2_800_000_000,
    area: 65,
    bedrooms: 2,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    tag: "Popular",
    amenities: ["Pool", "Gym", "Security", "Parking"],
  },
  {
    id: "p2",
    name: "Vinhomes Grand Park",
    developer: "Vinhomes",
    district: "District 9",
    price: 2_200_000_000,
    area: 55,
    bedrooms: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    tag: "Best Value",
    amenities: ["Park", "School", "Mall", "Hospital"],
  },
  {
    id: "p3",
    name: "The Metropole Thu Thiem",
    developer: "Swire Properties",
    district: "Thu Thiem",
    price: 5_500_000_000,
    area: 85,
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    tag: "Premium",
    amenities: ["River View", "Concierge", "Spa", "Rooftop"],
  },
  {
    id: "p4",
    name: "One Verandah",
    developer: "Mapletree",
    district: "District 2",
    price: 3_100_000_000,
    area: 70,
    bedrooms: 2,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    tag: "High-rise",
    amenities: ["Riverside", "Kids Club", "Tennis", "BBQ"],
  },
];

export const homePartners = [
  { id: "hp1", name: "OneHousing", logo: "🏠", description: "Property search & advisory", benefit: "Free property consultation" },
  { id: "hp2", name: "Masterise Homes", logo: "🏢", description: "Premium developer partner", benefit: "Priority booking access" },
  { id: "hp3", name: "Home Credit", logo: "🛋️", description: "Interior financing", benefit: "0% interest for 12 months" },
  { id: "hp4", name: "Prudential", logo: "🛡️", description: "Home insurance", benefit: "20% premium discount" },
];

// ============================================================
// CAR JOURNEY
// ============================================================

export const vinFastCars = [
  {
    id: "c1",
    model: "VF 3",
    tagline: "Smart City EV",
    price: 235_000_000,
    range: "215 km",
    power: "42 kW",
    seats: 5,
    color: "#ED1C24",
    image: "https://images.vinfastauto.com/sys-master/images/h86/h18/23278228881438/VF3-banner.png",
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/VinFast_VF_3_at_2024_Paris_Motor_Show.jpg/1200px-VinFast_VF_3_at_2024_Paris_Motor_Show.jpg",
    tag: "Most Affordable",
    colors: ["#ED1C24", "#1A1A1A", "#FFFFFF", "#6490AA"],
  },
  {
    id: "c2",
    model: "VF 5",
    tagline: "Urban Explorer",
    price: 458_000_000,
    range: "326 km",
    power: "90 kW",
    seats: 5,
    color: "#1A1A1A",
    image: "https://images.vinfastauto.com/sys-master/images/h08/hc7/23278249459742/VF5-banner.png",
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/8/87/VinFast_VF_5_Plus_%28cropped%29.jpg",
    tag: "Best Seller",
    colors: ["#1A1A1A", "#FFFFFF", "#ED1C24", "#28CD41"],
  },
  {
    id: "c3",
    model: "VF 8",
    tagline: "Premium Family SUV",
    price: 1_090_000_000,
    range: "420 km",
    power: "260 kW",
    seats: 7,
    color: "#6490AA",
    image: "https://images.vinfastauto.com/sys-master/images/h3d/h97/23278258995230/VF8-banner.png",
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/VinFast_VF_8_2022.jpg/1200px-VinFast_VF_8_2022.jpg",
    tag: "Top Pick",
    colors: ["#6490AA", "#1A1A1A", "#FFFFFF", "#F7CF42"],
  },
  {
    id: "c4",
    model: "VF 9",
    tagline: "Flagship Luxury SUV",
    price: 1_520_000_000,
    range: "568 km",
    power: "300 kW",
    seats: 7,
    color: "#1A1A1A",
    image: "https://images.vinfastauto.com/sys-master/images/h82/hf7/23278270234654/VF9-banner.png",
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/VinFast_VF_9_2022.jpg/1200px-VinFast_VF_9_2022.jpg",
    tag: "Flagship",
    colors: ["#1A1A1A", "#FFFFFF", "#6490AA"],
  },
];

export const carPartners = [
  { id: "cp1", name: "VinFast", logo: "⚡", description: "Official EV manufacturer", benefit: "Priority delivery & warranty" },
  { id: "cp2", name: "VinFast Charging", logo: "🔋", description: "Nationwide charging network", benefit: "12 months free charging" },
  { id: "cp3", name: "PTI Insurance", logo: "🛡️", description: "Comprehensive car insurance", benefit: "15% premium discount" },
  { id: "cp4", name: "VinFast Service", logo: "🔧", description: "Authorized service centers", benefit: "3 free maintenance services" },
];

// ============================================================
// CONSUMER JOURNEY
// ============================================================

export const consumerProducts = [
  {
    id: "prod1",
    name: "iPhone 16 Pro Max",
    category: "Smartphone",
    brand: "Apple",
    price: 34_990_000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80",
    savingMonths: 4,
    loanAvailable: true,
    tag: "Most Popular",
    specs: ["6.9\" Super Retina XDR", "A18 Pro chip", "48MP camera", "4685 mAh"],
  },
  {
    id: "prod2",
    name: "MacBook Pro 14\"",
    category: "Laptop",
    brand: "Apple",
    price: 54_990_000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
    savingMonths: 7,
    loanAvailable: true,
    tag: "Work Essential",
    specs: ["M4 Pro chip", "16GB RAM", "512GB SSD", "22hr battery"],
  },
  {
    id: "prod3",
    name: "Samsung 65\" QLED 4K",
    category: "TV",
    brand: "Samsung",
    price: 29_990_000,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80",
    savingMonths: 4,
    loanAvailable: true,
    tag: "Home Upgrade",
    specs: ["65\" QLED", "4K 120Hz", "Dolby Atmos", "Smart TV"],
  },
  {
    id: "prod4",
    name: "Dell XPS 15",
    category: "Laptop",
    brand: "Dell",
    price: 45_000_000,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
    savingMonths: 6,
    loanAvailable: true,
    tag: "Work Premium",
    specs: ["Intel Core Ultra 9", "32GB RAM", "1TB SSD", "OLED display"],
  },
  {
    id: "prod5",
    name: "Samsung Galaxy S25 Ultra",
    category: "Smartphone",
    brand: "Samsung",
    price: 32_990_000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    savingMonths: 4,
    loanAvailable: true,
    tag: "Android King",
    specs: ["6.9\" Dynamic AMOLED", "Snapdragon 8 Elite", "200MP camera", "S Pen"],
  },
  {
    id: "prod6",
    name: "LG 55\" OLED evo",
    category: "TV",
    brand: "LG",
    price: 39_990_000,
    image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80",
    savingMonths: 5,
    loanAvailable: true,
    tag: "Cinema Quality",
    specs: ["55\" OLED evo", "4K 120Hz", "Dolby Vision IQ", "webOS 24"],
  },
];

export const consumerPartners = [
  { id: "conp1", name: "FPT Shop", logo: "💻", description: "Electronics retailer", benefit: "Exclusive member pricing" },
  { id: "conp2", name: "Tiki", logo: "🛒", description: "E-commerce platform", benefit: "Free 1-day delivery" },
  { id: "conp3", name: "CellphoneS", logo: "📱", description: "Mobile specialist", benefit: "Trade-in bonus 10%" },
  { id: "conp4", name: "MediaMart", logo: "🖥️", description: "Consumer electronics", benefit: "Extended warranty 2 years" },
];

// ============================================================
// READINESS SCORE
// ============================================================

export const readinessData = {
  level: 3,
  label: "Near Ready",
  score: 68,
  factors: [
    { name: "Income Stability", score: 85, weight: 20, status: "strong", description: "Consistent monthly salary for 18+ months" },
    { name: "Saving Streak", score: 80, weight: 20, status: "strong", description: "8-month uninterrupted saving streak" },
    { name: "Cash Flow", score: 72, weight: 15, status: "good", description: "Positive net cash flow, room to increase saving" },
    { name: "Debt-to-Income (DTI)", score: 65, weight: 20, status: "moderate", description: "DTI at 28% — aim for below 25% for optimal scoring" },
    { name: "Down Payment Ready", score: 42, weight: 15, status: "building", description: "Currently at 5.7% — target is 30%" },
    { name: "Credit History (CIC)", score: 70, weight: 10, status: "good", description: "Clean credit record, limited history length" },
  ],
  improvements: [
    { priority: 1, action: "Reduce monthly subscription spending by 15%", impact: "+8 pts DTI score" },
    { priority: 2, action: "Maintain saving streak for 4 more months", impact: "+5 pts streak bonus" },
    { priority: 3, action: "Add 2M VND/month to down payment fund", impact: "Reach 10% in 7 months" },
  ],
};

// ============================================================
// FINANCIAL COACH
// ============================================================

export const coachScenarios = [
  { id: "s1", label: "Why am I Level 3?", prompt: "Explain my current readiness level" },
  { id: "s2", label: "How to reach Level 4?", prompt: "What do I need to do to reach Pre-approved status?" },
  { id: "s3", label: "Safe loan amount?", prompt: "What's a safe loan amount for my current income?" },
  { id: "s4", label: "Simulate saving more", prompt: "What if I save 10M VND/month instead of 8M?" },
  { id: "s5", label: "Prepare loan docs", prompt: "What documents do I need to prepare for a home loan?" },
  { id: "s6", label: "DTI explanation", prompt: "Explain my Debt-to-Income ratio and how to improve it" },
];

export const coachResponses: Record<string, string> = {
  "Explain my current readiness level": `You're currently at **Level 3 — Near Ready**. 🎯

Here's what this means for you:

**What's working well:**
- Your income has been stable for 18+ months ✅
- Your 8-month saving streak shows strong financial discipline ✅
- Your credit history is clean ✅

**What's holding you back from Level 4:**
- Your **DTI (Debt-to-Income ratio)** is at 28% — lenders prefer below 25%
- Your **down payment** is currently 5.7% — most home loans require 20-30%

**Good news:** You're only about 14 months away from Level 4 if you maintain your current pace! I'd recommend focusing on reducing discretionary spending to bring that DTI down faster.`,

  "What do I need to do to reach Pre-approved status?": `To reach **Level 4 — Pre-approved Candidate**, you need to hit these targets: 📈

| Factor | Current | Target |
|--------|---------|--------|
| DTI | 28% | ≤25% |
| Down Payment | 5.7% | ≥15% |
| Saving Streak | 8 months | 12+ months |

**My 3-step action plan for you:**

1. **Cut DTI now** — Review subscriptions and discretionary spending. Reducing monthly obligations by ~1.5M VND will bring DTI to 24%

2. **Increase saving by 2M/month** — This gets your down payment to 15% in approximately 12 months

3. **Stay consistent** — Don't break your saving streak. Missing one month resets the clock on streak bonuses

Estimated time to Level 4: **12-14 months** 🚀`,

  "What's a safe loan amount for my current income?": `Based on your income of **28M VND/month**, here's a safe borrowing analysis: 💰

**Safe Loan Parameters:**
- Maximum DTI after loan: 35%
- Current obligations: ~7.8M VND/month
- Available for loan repayment: **~2.0M VND/month**

**Loan Options:**
| Term | Safe Loan Amount | Monthly Payment |
|------|-----------------|-----------------|
| 15 years | ~200M VND | 1.9M VND |
| 20 years | ~250M VND | 2.0M VND |
| 25 years | ~285M VND | 1.95M VND |

⚠️ **Important note:** These figures assume current income levels. For a 2.5B VND apartment, you'd need a down payment of ~750M VND before the loan becomes comfortable. Keep saving — you're building that foundation right now.`,

  "What if I save 10M VND/month instead of 8M?": `Great thinking! Let me simulate that for you 📊

**Scenario: Increasing to 10M VND/month (+2M VND)**

| Metric | Current (8M/month) | New (10M/month) |
|--------|--------------------|-----------------|
| Time to 30% down | 52 months | 41 months |
| Time to Level 4 | ~14 months | ~10 months |
| Annual savings | 96M VND | 120M VND |
| 5-year total | 480M VND | 600M VND |

**You'd save 11 months** off your timeline to reach the down payment target! 🎉

This is absolutely achievable. Based on your cash flow, after your current obligations you have approximately 12-13M VND available. Increasing to 10M saves with a comfortable 2-3M VND buffer.

**My recommendation:** Try the increase for 2 months. If it feels comfortable, make it permanent. I can set up a gradual increase starting next month.`,

  "What documents do I need to prepare for a home loan?": `Here's your **Home Loan Document Checklist** 📋

**Personal Documents:**
- [ ] National ID card (both sides)
- [ ] Household registration (Hộ khẩu) or KT3
- [ ] Passport (if applicable)

**Income Documents:**
- [ ] 3 months recent payslips
- [ ] 6 months bank statements showing salary credits
- [ ] Employment contract or confirmation letter
- [ ] Tax finalization certificate (last year)

**Property Documents:**
- [ ] Sale & Purchase Agreement (SPA)
- [ ] Land Use Rights Certificate or project approval
- [ ] Developer's legal documents

**Financial Position:**
- [ ] Existing loan statements (if any)
- [ ] 12 months saving history (your TechZ account qualifies!)

**Good news:** Your TechZ saving history is a strong supporting document — it demonstrates financial discipline to loan officers. Would you like me to generate a savings summary report you can share with your RM?`,

  "Explain my Debt-to-Income ratio and how to improve it": `Your **Debt-to-Income (DTI) ratio** is currently **28%** 📊

**What is DTI?**
DTI = Monthly debt obligations ÷ Gross monthly income
Your DTI: 7.8M VND ÷ 28M VND = 28%

**Why it matters:**
- Below 25%: Excellent — best loan terms
- 25-35%: Acceptable — standard terms  
- 35-45%: Borderline — may affect approval
- Above 45%: High risk — loan likely rejected

**Your current obligations (~7.8M/month):**
- Rent: ~5M VND
- Phone plan: ~500K VND
- Subscriptions: ~800K VND
- Other: ~1.5M VND

**3 Ways to Improve Your DTI:**

1. **Pay off small debts first** — Eliminating a 500K/month obligation drops DTI by 1.8%
2. **Renegotiate rent** — Moving to a cheaper place (save 1M/month) drops DTI by 3.6%
3. **Increase income** — A 3M raise would drop DTI to 23% instantly

**Target:** Reach 25% DTI within 6 months → unlocks Level 4 ⬆️`,
};

// ============================================================
// PLATFORM STATS (Landing page)
// ============================================================

export const platformStats = [
  { label: "Active Savers", value: "48,200+", icon: "users" },
  { label: "Total Saved", value: "₫2.3T+", icon: "piggy-bank" },
  { label: "Goals Achieved", value: "3,891", icon: "trophy" },
  { label: "Avg. Readiness Score", value: "67/100", icon: "star" },
];

export const testimonials = [
  {
    id: "t1",
    name: "Minh Tran",
    age: 27,
    goal: "Home Journey",
    quote: "After 18 months with TechZ, I got pre-approved for my first apartment. The Financial Coach explained everything I needed to fix.",
    avatar: "MT",
    level: 4,
  },
  {
    id: "t2",
    name: "Linh Pham",
    age: 24,
    goal: "Car Journey",
    quote: "I picked my VF 8 on day one, set my savings target, and now I'm 60% there after just 14 months. The streak rewards kept me going!",
    avatar: "LP",
    level: 3,
  },
  {
    id: "t3",
    name: "Duc Hoang",
    age: 22,
    goal: "Consumer Journey",
    quote: "Saved up for my MacBook Pro in 5 months and got a 0% loan for the rest. Never thought I'd own one this fast.",
    avatar: "DH",
    level: 2,
  },
];
