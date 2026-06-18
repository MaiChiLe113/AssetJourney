"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  savingTerms, 
  partnerHouseDeals, 
  partnerCarDeals, 
  tekTekMessages, 
  uPointActions 
} from "@/data/mockData";
import styles from "./page.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import CallSplitRoundedIcon from "@mui/icons-material/CallSplitRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

type GoalType = 'home' | 'car' | 'custom' | null;
type MaturityAction = 'withdraw_all' | 'continue_all' | 'withdraw_interest' | null;
type Step = 1 | 2 | 3 | 4 | 5 | 6 | 'success';

export default function SetupWizardPage() {
  const [step, setStep] = useState<Step>(1);
  
  // Form State
  const [goalType, setGoalType] = useState<GoalType>(null);
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState<number>(3000000000); // Default 3B
  const [selectedTermIndex, setSelectedTermIndex] = useState<number | null>(null);
  const [maturityAction, setMaturityAction] = useState<MaturityAction>(null);
  const [remindersEnabled, setRemindersEnabled] = useState(true);

  // Computed
  const selectedTerm = selectedTermIndex !== null ? savingTerms[selectedTermIndex] : null;
  const monthlyCalc = Math.round(targetAmount / (selectedTerm?.months || 36));

  const handleSelectType = (type: GoalType) => {
    setGoalType(type);
    if (type === 'home') setGoalName("Nhà mơ ước");
    else if (type === 'car') setGoalName("Xe VinFast");
    else setGoalName("");
    
    if (type === 'home') setTargetAmount(3000000000);
    else if (type === 'car') setTargetAmount(458000000);
    else setTargetAmount(50000000);
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) setStep(5);
    else if (step === 5) setStep(6);
    else if (step === 6) setStep('success');
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
    else if (step === 5) setStep(4);
    else if (step === 6) setStep(5);
  };

  const renderHeader = (currentStep: number, hideStep = false) => (
    <div className={styles.header}>
      {currentStep > 1 ? (
        <button className={styles.iconBtn} onClick={handleBack}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20 }} />
        </button>
      ) : (
        <Link href="/asset-journey" className={styles.iconBtn}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20 }} />
        </Link>
      )}
      {!hideStep && <div className={styles.stepIndicator}>{currentStep}/6</div>}
      <Link href="/asset-journey" className={styles.iconBtn}>
        <CloseRoundedIcon sx={{ fontSize: 24 }} />
      </Link>
    </div>
  );

  const renderTekTek = (mascot: string, message: string) => (
    <div className={styles.tekTekBubble}>
      <div className={styles.mascotBg}>
        <Image src={mascot} alt="TekTek" width={36} height={36} style={{ objectFit: 'contain' }} />
      </div>
      <div className={styles.tekTekMsg}>{message}</div>
    </div>
  );

  return (
    <div className={styles.page}>
      
      {/* STEP 1: Goal Type */}
      {step === 1 && (
        <div className={`${styles.stepContainer} ${styles.animateFadeUp}`}>
          {renderHeader(1, true)}
          <div className={styles.content}>
            <h1 className={styles.title}>Bạn muốn tích luỹ để làm gì?</h1>
            
            <div className={styles.cardsList}>
              <div 
                className={`${styles.typeCard} ${goalType === 'home' ? styles.typeCardSelected : ''}`}
                onClick={() => handleSelectType('home')}
              >
                <div className={styles.typeIconBg} style={{ backgroundColor: '#DBEAFE' }}>
                  <HouseRoundedIcon sx={{ color: '#2563EB', fontSize: 28 }} />
                </div>
                <div className={styles.typeInfo}>
                  <div className={styles.typeTitle}>Nhà ở · OneHousing</div>
                  <div className={styles.typeDesc}>Tích lũy mua nhà với ưu đãi đặc biệt từ OneHousing</div>
                  <div className={styles.techzBadge}>Giảm đến 5% qua TechZ</div>
                </div>
                {goalType === 'home' && <div className={styles.checkCircle} />}
              </div>

              <div 
                className={`${styles.typeCard} ${goalType === 'car' ? styles.typeCardSelected : ''}`}
                onClick={() => handleSelectType('car')}
              >
                <div className={styles.typeIconBg} style={{ backgroundColor: '#DCFCE7' }}>
                  <DirectionsCarRoundedIcon sx={{ color: '#16A34A', fontSize: 28 }} />
                </div>
                <div className={styles.typeInfo}>
                  <div className={styles.typeTitle}>Ô tô · VinFast</div>
                  <div className={styles.typeDesc}>Sở hữu xe điện VinFast với deal độc quyền TechZ</div>
                  <div className={styles.techzBadge}>12 tháng sạc miễn phí</div>
                </div>
                {goalType === 'car' && <div className={styles.checkCircle} />}
              </div>

              <div 
                className={`${styles.typeCard} ${goalType === 'custom' ? styles.typeCardSelected : ''}`}
                onClick={() => handleSelectType('custom')}
              >
                <div className={styles.typeIconBg} style={{ backgroundColor: '#FEE2E2' }}>
                  <AutoAwesomeRoundedIcon sx={{ color: '#DC2626', fontSize: 28 }} />
                </div>
                <div className={styles.typeInfo}>
                  <div className={styles.typeTitle}>Mục tiêu khác</div>
                  <div className={styles.typeDesc}>Tự đặt tên và cấu hình mục tiêu tiết kiệm theo ý bạn</div>
                  <div className={styles.typeHint}>VD: tiêu dùng hàng ngày</div>
                </div>
                {goalType === 'custom' && <div className={styles.checkCircle} />}
              </div>
            </div>

            <div className={styles.bottomArea}>
              {renderTekTek(tekTekMessages.welcome.mascot, tekTekMessages.welcome.message)}
              <button 
                className={`btn btn-red ${styles.continueBtn}`} 
                disabled={!goalType}
                onClick={handleNext}
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Name & Target Amount */}
      {step === 2 && (
        <div className={`${styles.stepContainer} ${styles.animateFadeUp}`}>
          {renderHeader(2)}
          <div className={styles.content}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Tên mục tiêu</label>
              <input 
                className={styles.textInput}
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                placeholder="VD: Nhà chung cư, Tiêu dùng..."
              />
            </div>

            <div className={styles.inputGroup} style={{ marginTop: 24 }}>
              <label className={styles.label} style={{ textAlign: 'center' }}>Số tiền mục tiêu (VND)</label>
              <div className={styles.amountDisplay}>
                {targetAmount.toLocaleString('vi-VN')} đ
              </div>
              
              <input 
                type="range"
                className="range-slider"
                min={1000000}
                max={10000000000}
                step={1000000}
                value={targetAmount}
                onChange={(e) => setTargetAmount(Number(e.target.value))}
                style={{ marginTop: 16 }}
              />
              <div className={styles.sliderHints}>
                <span>1 triệu</span>
                <span>10 tỷ</span>
              </div>
            </div>

            <div className={styles.calcBox}>
              <div className={styles.calcLabel}>Mỗi tháng cần gửi khoảng</div>
              <div className={styles.calcVal}>~₫{(monthlyCalc / 1000000).toFixed(1)}M</div>
            </div>

            <div className={styles.uPointChip}>
              <StarRoundedIcon sx={{ fontSize: 16, color: '#D97706' }} />
              +10 U-Points mỗi lần gửi đúng hẹn
            </div>

            <div className={styles.bottomArea}>
              {renderTekTek(tekTekMessages.saving.mascot, tekTekMessages.saving.message.replace('₫8M', `₫${(monthlyCalc/1000000).toFixed(1)}M`).replace('36', '36'))}
              <button 
                className={`btn btn-red ${styles.continueBtn}`} 
                disabled={!goalName || targetAmount < 1000000}
                onClick={handleNext}
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Duration & Interest */}
      {step === 3 && (
        <div className={`${styles.stepContainer} ${styles.animateFadeUp}`}>
          {renderHeader(3)}
          <div className={styles.content}>
            <h1 className={styles.title}>Tôi muốn đạt mục tiêu trong...</h1>
            <div className={styles.blueLink}>Lãi suất tôi sẽ nhận là bao nhiêu?</div>
            
            <div className={styles.termList}>
              {savingTerms.map((term, index) => (
                <div 
                  key={index} 
                  className={`${styles.termCard} ${selectedTermIndex === index ? styles.termCardSelected : ''}`}
                  onClick={() => setSelectedTermIndex(index)}
                >
                  <div className={styles.termMonths}>{term.months} <span>tháng</span></div>
                  <div className={styles.termDetails}>
                    <div className={styles.termRate}>Tối đa {term.maxRate.toFixed(2)}%/năm</div>
                    <div className={styles.termDate}>Đến {term.maturityDate}</div>
                  </div>
                  {selectedTermIndex === index && <div className={styles.checkCircleSmall} />}
                </div>
              ))}
            </div>

            <div className={styles.bottomArea}>
              {renderTekTek(tekTekMessages.term.mascot, tekTekMessages.term.message)}
              <button 
                className={`btn btn-red ${styles.continueBtn}`} 
                disabled={selectedTermIndex === null}
                onClick={handleNext}
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: Maturity Action */}
      {step === 4 && (
        <div className={`${styles.stepContainer} ${styles.animateFadeUp}`}>
          <div className={styles.heroHeader} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80')" }}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroTop}>
              <button className={styles.iconBtnWhite} onClick={handleBack}>
                <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20 }} />
              </button>
              <Link href="/asset-journey" className={styles.iconBtnWhite}>
                <CloseRoundedIcon sx={{ fontSize: 24 }} />
              </Link>
            </div>
          </div>
          
          <div className={styles.contentOverlap}>
            <h1 className={styles.title}>Khi mục tiêu đến hạn, bạn muốn làm gì?</h1>
            <div className={styles.subtitle}>Vào ngày {selectedTerm?.maturityDate}</div>

            <div className={styles.actionList}>
              <div 
                className={`${styles.actionCard} ${maturityAction === 'withdraw_all' ? styles.actionCardSelected : ''}`}
                onClick={() => setMaturityAction('withdraw_all')}
              >
                <div className={styles.actionIconBg} style={{ backgroundColor: '#DBEAFE', color: '#2563EB' }}>
                  <AccountBalanceWalletRoundedIcon />
                </div>
                <div>
                  <div className={styles.actionTitle}>Rút toàn bộ cả tiền gốc và lãi</div>
                  <div className={styles.actionDesc}>Tự động chuyển tiền gốc và lãi vào tài khoản thanh toán của bạn, đồng thời đóng tài khoản TechZ Asset Journey.</div>
                </div>
                {maturityAction === 'withdraw_all' && <div className={styles.checkCircleSmall} />}
              </div>

              <div 
                className={`${styles.actionCard} ${maturityAction === 'continue_all' ? styles.actionCardSelected : ''}`}
                onClick={() => setMaturityAction('continue_all')}
              >
                <div className={styles.actionIconBg} style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                  <AutorenewRoundedIcon />
                </div>
                <div>
                  <div className={styles.actionTitle}>Gửi tiếp cả tiền gốc và lãi</div>
                  <div className={styles.actionDesc}>Tự động gửi tiếp cả tiền gốc và lãi với kỳ hạn tiết kiệm tương đương.</div>
                </div>
                {maturityAction === 'continue_all' && <div className={styles.checkCircleSmall} />}
              </div>

              <div 
                className={`${styles.actionCard} ${maturityAction === 'withdraw_interest' ? styles.actionCardSelected : ''}`}
                onClick={() => setMaturityAction('withdraw_interest')}
              >
                <div className={styles.actionIconBg} style={{ backgroundColor: '#FEF9C3', color: '#CA8A04' }}>
                  <CallSplitRoundedIcon />
                </div>
                <div>
                  <div className={styles.actionTitle}>Rút tiền lãi và gửi tiếp gốc</div>
                  <div className={styles.actionDesc}>Tiền gốc sẽ tự động gửi tiếp với kỳ hạn tương đương. Toàn bộ lãi sẽ được chuyển vào Tài khoản thanh toán của bạn.</div>
                </div>
                {maturityAction === 'withdraw_interest' && <div className={styles.checkCircleSmall} />}
              </div>
            </div>

            <div className={styles.bottomAreaNoSpace}>
              <button 
                className={`btn btn-red ${styles.continueBtn}`} 
                disabled={!maturityAction}
                onClick={handleNext}
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 5: TechZ Partner Deals */}
      {step === 5 && (
        <div className={`${styles.stepContainer} ${styles.animateFadeUp}`}>
          {renderHeader(5)}
          
          <div className={styles.dealsBanner}>
            <AutoFixHighRoundedIcon sx={{ fontSize: 20 }} />
            <span>ƯU ĐÃI ĐỘC QUYỀN TECHZ</span>
          </div>

          <div className={styles.contentDeals}>
            {goalType === 'home' && (
              <>
                <div className={styles.sectionTitle}>BẢNG XẾP HẠNG BĐS ĐỐI TÁC · ONEHOUSING</div>
                <div className={styles.dealsList}>
                  {partnerHouseDeals.map((deal, idx) => (
                    <div key={deal.id} className={`${styles.dealCard} ${idx === 0 ? styles.dealCardFeatured : ''}`}>
                      <div className={styles.dealImg} style={{ backgroundImage: `url(${deal.image})` }} />
                      <div className={styles.dealInfo}>
                        <div className={styles.dealBrand}>{deal.brand}</div>
                        <div className={styles.dealName}>{deal.name}</div>
                        <div className={styles.dealDesc}>{deal.desc}</div>
                        <div className={styles.dealPrice}>{deal.price.toLocaleString('vi-VN')} đ</div>
                        <div className={styles.dealChips}>
                          <span className={styles.chipOutline}>Lãi ròng {deal.rate}%</span>
                          {deal.techzDeal && <span className={styles.techzBadgeSmall}>{deal.techzDeal}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {goalType === 'car' && (
              <>
                <div className={styles.sectionTitle}>DÒNG XE ĐIỆN ĐỐI TÁC · VINFAST</div>
                <div className={styles.dealsList}>
                  {partnerCarDeals.map((deal, idx) => (
                    <div key={deal.id} className={`${styles.dealCard} ${idx === 0 ? styles.dealCardFeatured : ''}`}>
                      <div className={styles.dealImg} style={{ backgroundImage: `url(${deal.image})` }} />
                      <div className={styles.dealInfo}>
                        <div className={styles.dealBrand}>{deal.brand}</div>
                        <div className={styles.dealName}>{deal.name}</div>
                        <div className={styles.dealDesc}>{deal.desc}</div>
                        <div className={styles.dealPrice}>{deal.price.toLocaleString('vi-VN')} đ</div>
                        <div className={styles.dealChips}>
                          <span className={styles.chipOutline}>Lãi ròng {deal.rate}%</span>
                          {deal.techzDeal && <span className={styles.techzBadgeSmall}>{deal.techzDeal}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {goalType === 'custom' && (
              <>
                <div className={styles.sectionTitle}>GỢI Ý TÀI SẢN PHÙ HỢP</div>
                <div className={styles.dealsList}>
                  {partnerHouseDeals.slice(0, 2).map((deal) => (
                    <div key={deal.id} className={styles.dealCard}>
                      <div className={styles.dealImg} style={{ backgroundImage: `url(${deal.image})` }} />
                      <div className={styles.dealInfo}>
                        <div className={styles.dealBrand}>{deal.brand}</div>
                        <div className={styles.dealName}>{deal.name}</div>
                        <div className={styles.dealPrice}>{deal.price.toLocaleString('vi-VN')} đ</div>
                        {deal.techzDeal && <div className={styles.techzBadgeSmall} style={{ marginTop: 4 }}>{deal.techzDeal}</div>}
                      </div>
                    </div>
                  ))}
                  {partnerCarDeals.slice(0, 2).map((deal) => (
                    <div key={deal.id} className={styles.dealCard}>
                      <div className={styles.dealImg} style={{ backgroundImage: `url(${deal.image})` }} />
                      <div className={styles.dealInfo}>
                        <div className={styles.dealBrand}>{deal.brand}</div>
                        <div className={styles.dealName}>{deal.name}</div>
                        <div className={styles.dealPrice}>{deal.price.toLocaleString('vi-VN')} đ</div>
                        {deal.techzDeal && <div className={styles.techzBadgeSmall} style={{ marginTop: 4 }}>{deal.techzDeal}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className={styles.bottomAreaNoSpace}>
              {renderTekTek(tekTekMessages.deal.mascot, tekTekMessages.deal.message)}
              <button 
                className={`btn btn-red ${styles.continueBtn}`} 
                onClick={handleNext}
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: Confirm */}
      {step === 6 && (
        <div className={`${styles.stepContainer} ${styles.animateFadeUp} ${styles.grayBg}`}>
          {renderHeader(6)}
          
          <div className={styles.contentConfirm}>
            <h1 className={styles.titleConfirm}>Xác nhận mở TechZ Asset Journey</h1>
            
            <div className={styles.summaryCard}>
              <div className={styles.sumRow}>
                <div className={styles.sumLabel}>Loại mục tiêu</div>
                <div className={styles.sumVal}>{goalType === 'home' ? 'Nhà ở' : goalType === 'car' ? 'Ô tô' : 'Mục tiêu khác'}</div>
              </div>
              <div className={styles.sumRow}>
                <div className={styles.sumLabel}>Tên mục tiêu</div>
                <div className={styles.sumVal}>{goalName}</div>
              </div>
              <div className={styles.sumRow}>
                <div className={styles.sumLabel}>Số tiền mục tiêu</div>
                <div className={styles.sumValRed}>{targetAmount.toLocaleString('vi-VN')} đ</div>
              </div>
              <div className={styles.sumRow}>
                <div className={styles.sumLabel}>Kỳ hạn & Lãi suất</div>
                <div className={styles.sumVal}>{selectedTerm?.months} tháng • Lãi {selectedTerm?.maxRate}%/năm</div>
              </div>
              <div className={styles.sumRow}>
                <div className={styles.sumLabel}>Khi đến hạn</div>
                <div className={styles.sumVal}>
                  {maturityAction === 'withdraw_all' ? 'Rút cả gốc & lãi' :
                   maturityAction === 'continue_all' ? 'Gửi tiếp cả gốc & lãi' : 'Rút lãi, gửi gốc'}
                </div>
              </div>
            </div>

            <div className={styles.uPointPreviewCard}>
              <div className={styles.uPointPreviewTitle}>Bạn sẽ nhận được:</div>
              <div className={styles.uPointPreviewList}>
                <div className={styles.uPointPreviewItem}>
                  <DiamondRoundedIcon sx={{ fontSize: 16, color: '#3B82F6' }} />
                  <span><b>+200 U-Points</b> cho lần mở mục tiêu đầu tiên</span>
                </div>
                <div className={styles.uPointPreviewItem}>
                  <StarRoundedIcon sx={{ fontSize: 16, color: '#D97706' }} />
                  <span><b>+10 U-Points</b> mỗi lần gửi đúng hẹn</span>
                </div>
                <div className={styles.uPointPreviewItem}>
                  <LocalFireDepartmentRoundedIcon sx={{ fontSize: 16, color: '#EF4444' }} />
                  <span><b>+50 U-Points</b> khi duy trì chuỗi 7 ngày</span>
                </div>
                <div className={styles.uPointPreviewItem}>
                  <GroupAddRoundedIcon sx={{ fontSize: 16, color: '#8B5CF6' }} />
                  <span><b>+100 U-Points</b> khi mời bạn bè tham gia</span>
                </div>
              </div>
            </div>

            <div className={styles.inviteCard}>
              <div className={styles.inviteLeft}>
                <div className={styles.inviteTitle}>Mời bạn bè cùng tiết kiệm</div>
                <div className={styles.inviteDesc}>Nhận thêm U-Points và cùng nhau xây dựng chuỗi!</div>
              </div>
              <div className={styles.inviteIcon}>
                <ShareRoundedIcon sx={{ fontSize: 20 }} />
              </div>
            </div>

            <div className={styles.toggleRow}>
              <div className={styles.toggleText}>Nhắc gửi tiết kiệm hàng tháng</div>
              <div 
                className={`${styles.toggle} ${remindersEnabled ? styles.toggleOn : ''}`}
                onClick={() => setRemindersEnabled(!remindersEnabled)}
              >
                <div className={styles.toggleThumb} />
              </div>
            </div>

            <div className={styles.bottomAreaNoSpace}>
              <button 
                className={`btn btn-red ${styles.continueBtn}`} 
                onClick={handleNext}
              >
                Xác nhận mở TechZ Asset Journey
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS OVERLAY */}
      {step === 'success' && (
        <div className={styles.successOverlay}>
          <div className={styles.confetti} />
          <div className={styles.successContent}>
            <div className={styles.mascotLargeBg}>
              <Image src="/mascot/celebrate.png" alt="Celebrate" width={100} height={100} style={{ objectFit: 'contain' }} />
            </div>
            
            <h1 className={styles.successTitle}>Chúc mừng!</h1>
            <p className={styles.successSubtitle}>Hành trình tích luỹ đã bắt đầu! 🎉</p>
            
            <div className={styles.earnedBadge}>
              <DiamondRoundedIcon sx={{ fontSize: 24, color: '#fff' }} />
              <span>+200 U-Points</span>
            </div>

            <div className={styles.successSummary}>
              <div className={styles.ssTitle}>{goalName}</div>
              <div className={styles.ssAmt}>{targetAmount.toLocaleString('vi-VN')} đ</div>
              <div className={styles.ssTerm}>{selectedTerm?.months} tháng • Tự động góp quỹ</div>
            </div>

            <Link href="/asset-journey/goal/tg1" className={`btn btn-red ${styles.continueBtn}`} style={{ marginTop: 32 }}>
              Đến bảng điều khiển mục tiêu
            </Link>
            <Link href="/asset-journey" className={styles.linkSecondary}>
              Về trang chủ TechZ Asset Journey
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
