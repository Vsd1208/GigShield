import { useState } from 'react'
import { Shield, ArrowLeft, Home, FileText, Award, Clock, Settings, Bell, ChevronRight, CloudRain, Wind, Thermometer, AlertTriangle, MapPin, Zap, TrendingUp, IndianRupee, Gift, Users, Star, CheckCircle2, XCircle, Phone, Eye, EyeOff, ChevronDown, Download, RefreshCw, Info, Flame, Target, Trophy, History, UserPlus, ToggleLeft, ToggleRight } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'policy', label: 'Policy', icon: FileText },
  { id: 'points', label: 'Points', icon: Award },
  { id: 'history', label: 'History', icon: Clock },
  { id: 'profile', label: 'Profile', icon: Settings },
]

export default function WorkerApp({ onBack }) {
  const [screen, setScreen] = useState('splash')
  const [activeTab, setActiveTab] = useState('home')
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [onboardStep, setOnboardStep] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState(1)
  const [showPurchase, setShowPurchase] = useState(false)
  const [showNotif, setShowNotif] = useState(false)
  const [autoRenew, setAutoRenew] = useState(true)

  // Splash screen
  if (screen === 'splash') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="absolute inset-0 gradient-primary rounded-[50px] blur-[80px] opacity-20" />
          <div className="phone-frame bg-dark relative z-10">
            <div className="h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 gradient-primary opacity-5" />
              <div className="absolute top-[20%] left-[-10%] w-[200px] h-[200px] rounded-full bg-primary/10 blur-[60px]" />
              <div className="absolute bottom-[20%] right-[-10%] w-[200px] h-[200px] rounded-full bg-accent/10 blur-[60px]" />
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-3xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/40 float">
                  <Shield size={48} className="text-white" />
                </div>
                <h1 className="text-3xl font-extrabold text-text-primary mb-2">GigShield</h1>
                <p className="text-text-secondary text-sm mb-12">Income Protection for Q-Commerce</p>
                
                <button onClick={() => { setScreen('app'); setShowOnboarding(true); setOnboardStep(0); }}
                        className="w-full py-4 gradient-primary rounded-2xl text-white font-bold text-lg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform mb-4">
                  Get Started
                </button>
                <button onClick={() => setScreen('app')}
                        className="w-full py-4 bg-dark-card border border-dark-border rounded-2xl text-text-primary font-semibold active:scale-[0.98] transition-transform mb-8">
                  I Have an Account
                </button>
                
                <button onClick={onBack} className="text-sm text-text-muted hover:text-text-secondary transition-colors">
                  ← Back to Landing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Onboarding overlay
  if (showOnboarding) {
    const steps = [
      {
        title: 'Select Your Platform',
        content: (
          <div className="space-y-3">
            {['Zepto', 'Blinkit', 'Swiggy Instamart'].map((p, i) => (
              <button key={i} className={`w-full p-4 rounded-2xl border text-left transition-all ${i === 0 ? 'border-primary/50 bg-primary/10' : 'border-dark-border bg-dark-card'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 0 ? 'gradient-primary' : 'bg-dark-surface'}`}>
                      <span className="text-white font-bold">{p[0]}</span>
                    </div>
                    <span className="font-semibold text-text-primary">{p}</span>
                  </div>
                  {i === 0 && <CheckCircle2 size={20} className="text-primary" />}
                </div>
              </button>
            ))}
          </div>
        )
      },
      {
        title: 'Your Zone Detected',
        content: (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-success/10 border-2 border-success/30 flex items-center justify-center mx-auto mb-4">
              <MapPin size={36} className="text-success" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">HSR Layout</h3>
            <p className="text-text-secondary text-sm mb-4">Zone HSR-01 • Bangalore</p>
            <div className="glass rounded-2xl p-4 text-left space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Dark Store</span>
                <span className="text-text-primary">Zepto HSR #14</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Zone Radius</span>
                <span className="text-text-primary">2.5 km</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Active Workers</span>
                <span className="text-text-primary">34 in zone</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Risk Score</span>
                <span className="text-warning font-bold">0.74</span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: 'Complete Your Profile',
        content: (
          <div className="space-y-4">
            <div>
              <label className="text-xs text-text-muted mb-1 block">Daily Working Hours</label>
              <div className="flex gap-2">
                {['4-6 hrs', '6-10 hrs', '10-14 hrs'].map((h, i) => (
                  <button key={i} className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${i === 1 ? 'gradient-primary text-white' : 'bg-dark-card border border-dark-border text-text-secondary'}`}>
                    {h}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-text-muted mb-1 block">Shift Pattern</label>
              <div className="flex gap-2">
                {['Morning', 'Afternoon', 'Full Day'].map((s, i) => (
                  <button key={i} className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${i === 2 ? 'gradient-primary text-white' : 'bg-dark-card border border-dark-border text-text-secondary'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-4 flex items-center gap-3">
              <Award size={20} className="text-primary" />
              <div>
                <p className="text-sm font-semibold text-text-primary">+100 GigPoints</p>
                <p className="text-xs text-text-secondary">For completing your profile</p>
              </div>
            </div>
          </div>
        )
      },
    ]

    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="absolute inset-0 gradient-primary rounded-[50px] blur-[80px] opacity-20" />
          <div className="phone-frame bg-dark relative z-10">
            <div className="phone-notch" />
            <div className="h-full flex flex-col pt-12 pb-6 px-5">
              {/* Progress */}
              <div className="flex gap-2 mb-8 mt-2">
                {steps.map((_, i) => (
                  <div key={i} className={`flex-1 h-1 rounded-full ${i <= onboardStep ? 'gradient-primary' : 'bg-dark-border'}`} />
                ))}
              </div>

              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Step {onboardStep + 1} of {steps.length}</p>
              <h2 className="text-2xl font-bold text-text-primary mb-6">{steps[onboardStep].title}</h2>
              
              <div className="flex-1 overflow-y-auto">
                {steps[onboardStep].content}
              </div>

              <button onClick={() => {
                if (onboardStep < steps.length - 1) setOnboardStep(onboardStep + 1)
                else { setShowOnboarding(false); setShowPurchase(true) }
              }} className="mt-4 w-full py-4 gradient-primary rounded-2xl text-white font-bold text-lg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform">
                {onboardStep < steps.length - 1 ? 'Continue' : 'Choose Your Plan →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Policy Purchase
  if (showPurchase) {
    const plans = [
      { name: 'Basic Shield', price: 49, adjusted: 53, payout: 300, hours: 6, icon: '🛡️' },
      { name: 'Pro Shield', price: 99, adjusted: 108, payout: 600, hours: 10, icon: '⚡' },
      { name: 'Elite Shield', price: 149, adjusted: 162, payout: 1000, hours: 14, icon: '💎' },
    ]

    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="absolute inset-0 gradient-primary rounded-[50px] blur-[80px] opacity-20" />
          <div className="phone-frame bg-dark relative z-10">
            <div className="phone-notch" />
            <div className="h-full flex flex-col pt-12 pb-6 px-5 overflow-y-auto">
              <button onClick={() => setShowPurchase(false)} className="flex items-center gap-2 text-text-secondary text-sm mb-4 mt-2">
                <ArrowLeft size={16} /> Back
              </button>
              <h2 className="text-2xl font-bold text-text-primary mb-1">Choose Your Shield</h2>
              <p className="text-sm text-text-secondary mb-6">AI-adjusted premiums for Zone HSR-01</p>

              {/* Risk score banner */}
              <div className="glass rounded-2xl p-4 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center">
                  <Target size={20} className="text-warning" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-text-primary">Zone Risk Score: 0.74</p>
                  <p className="text-xs text-text-secondary">Premium adjusted +9% for HSR Layout</p>
                </div>
              </div>

              {/* Plans */}
              <div className="space-y-3 mb-6">
                {plans.map((plan, i) => (
                  <button key={i} onClick={() => setSelectedPlan(i)}
                          className={`w-full p-4 rounded-2xl border text-left transition-all ${selectedPlan === i ? 'border-primary/50 bg-primary/5' : 'border-dark-border bg-dark-card'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl mt-0.5">{plan.icon}</span>
                        <div>
                          <p className="font-bold text-text-primary">{plan.name}</p>
                          <p className="text-xs text-text-secondary mt-0.5">₹{plan.payout}/disruption • {plan.hours}hrs/day</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-text-muted line-through">₹{plan.price}/wk</p>
                        <p className="text-lg font-bold text-text-primary">₹{plan.adjusted}<span className="text-xs text-text-secondary">/wk</span></p>
                      </div>
                    </div>
                    {selectedPlan === i && (
                      <div className="mt-3 pt-3 border-t border-dark-border">
                        <div className="flex items-center gap-2 text-xs text-success">
                          <CheckCircle2 size={12} />
                          <span>All 6 trigger types covered</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-success mt-1">
                          <CheckCircle2 size={12} />
                          <span>Instant UPI payout &lt;60 seconds</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-success mt-1">
                          <CheckCircle2 size={12} />
                          <span>GigPoints rewards on every event</span>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* GigPoints discount */}
              <div className="glass rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-primary" />
                    <span className="text-sm text-text-secondary">Reliable Tier Discount (5%)</span>
                  </div>
                  <span className="text-sm font-bold text-success">-₹{Math.round(plans[selectedPlan].adjusted * 0.05)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="glass rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-secondary">Weekly Premium</span>
                  <span className="text-text-primary">₹{plans[selectedPlan].adjusted}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-secondary">Loyalty Discount</span>
                  <span className="text-success">-₹{Math.round(plans[selectedPlan].adjusted * 0.05)}</span>
                </div>
                <div className="border-t border-dark-border pt-2 flex items-center justify-between">
                  <span className="font-bold text-text-primary">Total</span>
                  <span className="text-xl font-bold text-text-primary">₹{plans[selectedPlan].adjusted - Math.round(plans[selectedPlan].adjusted * 0.05)}</span>
                </div>
              </div>

              <button onClick={() => setShowPurchase(false)}
                      className="w-full py-4 gradient-primary rounded-2xl text-white font-bold text-lg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                <IndianRupee size={20} />
                Pay with UPI
              </button>
              <p className="text-center text-xs text-text-muted mt-3">Powered by Razorpay • Sandbox Mode</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Main App
  const renderTab = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setShowNotif={setShowNotif} showNotif={showNotif} setShowPurchase={setShowPurchase} />
      case 'policy': return <PolicyTab autoRenew={autoRenew} setAutoRenew={setAutoRenew} />
      case 'points': return <PointsTab />
      case 'history': return <HistoryTab />
      case 'profile': return <ProfileTab onBack={onBack} />
      default: return null
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 gradient-primary rounded-[50px] blur-[80px] opacity-20" />
        <div className="phone-frame bg-dark relative z-10">
          <div className="phone-notch" />
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto pt-10 pb-20 px-5">
              {renderTab()}
            </div>
            {/* Bottom Tab Bar */}
            <div className="absolute bottom-0 left-0 right-0 glass-strong border-t border-dark-border safe-area-bottom">
              <div className="flex items-center justify-around py-2 pb-4">
                {tabs.map(tab => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                          className={`flex flex-col items-center gap-1 px-3 py-1 transition-all ${activeTab === tab.id ? 'text-primary' : 'text-text-muted'}`}>
                    <tab.icon size={20} />
                    <span className="text-[10px] font-medium">{tab.label}</span>
                    {activeTab === tab.id && <div className="w-1 h-1 rounded-full bg-primary" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// HOME TAB
function HomeTab({ setShowNotif, showNotif, setShowPurchase }) {
  return (
    <div className="space-y-4 mt-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-text-secondary text-sm">Good afternoon,</p>
          <h2 className="text-2xl font-bold text-text-primary">Ravi Kumar</h2>
        </div>
        <button onClick={() => setShowNotif(!showNotif)} className="relative w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center">
          <Bell size={18} className="text-text-secondary" />
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-danger flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">3</span>
          </div>
        </button>
      </div>

      {showNotif && (
        <div className="glass rounded-2xl p-4 space-y-3 slide-up">
          <p className="text-xs text-text-muted uppercase tracking-wider">Notifications</p>
          {[
            { title: '₹600 Credited!', desc: 'Rainfall trigger — HSR Layout', time: '12:11 PM', type: 'success' },
            { title: 'Zone Watch Active', desc: 'AQI rising — 280, approaching 300', time: '11:30 AM', type: 'warning' },
            { title: 'Policy Renewed', desc: 'Pro Shield — Week 8 active', time: 'Yesterday', type: 'info' },
          ].map((n, i) => (
            <div key={i} className="flex items-start gap-3 p-2 rounded-xl hover:bg-dark-surface transition-colors">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${n.type === 'success' ? 'bg-success/20' : n.type === 'warning' ? 'bg-warning/20' : 'bg-primary/20'}`}>
                {n.type === 'success' ? <CheckCircle2 size={14} className="text-success" /> : n.type === 'warning' ? <AlertTriangle size={14} className="text-warning" /> : <Info size={14} className="text-primary" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-text-primary">{n.title}</p>
                <p className="text-xs text-text-secondary">{n.desc}</p>
              </div>
              <span className="text-[10px] text-text-muted">{n.time}</span>
            </div>
          ))}
        </div>
      )}

      {/* Zone Status */}
      <div className="bg-success/10 border border-success/30 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-success" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-success pulse-ring" />
            </div>
            <div>
              <p className="text-sm font-bold text-success">ZONE SAFE</p>
              <p className="text-xs text-text-secondary">HSR Layout • Zone HSR-01</p>
            </div>
          </div>
          <ChevronRight size={16} className="text-text-muted" />
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-success/20">
          <div className="text-center">
            <CloudRain size={14} className="text-text-muted mx-auto mb-1" />
            <p className="text-xs text-text-muted">Rain</p>
            <p className="text-sm font-bold text-text-primary">3mm</p>
          </div>
          <div className="text-center">
            <Thermometer size={14} className="text-text-muted mx-auto mb-1" />
            <p className="text-xs text-text-muted">Temp</p>
            <p className="text-sm font-bold text-text-primary">32°C</p>
          </div>
          <div className="text-center">
            <Wind size={14} className="text-text-muted mx-auto mb-1" />
            <p className="text-xs text-text-muted">AQI</p>
            <p className="text-sm font-bold text-text-primary">142</p>
          </div>
        </div>
      </div>

      {/* Active Policy Card */}
      <div className="glass rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-text-muted uppercase tracking-wider">Active Policy</p>
          <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/20 text-primary">Pro Shield</span>
        </div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-3xl font-bold text-text-primary">₹600</span>
          <span className="text-sm text-text-secondary">/disruption day</span>
        </div>
        <p className="text-xs text-text-secondary mb-3">Valid Mar 10 – Mar 16, 2026</p>
        <div className="h-1.5 rounded-full bg-dark-border overflow-hidden mb-1">
          <div className="h-full w-[71%] gradient-primary rounded-full" />
        </div>
        <div className="flex justify-between">
          <p className="text-[10px] text-text-muted">5 of 7 days remaining</p>
          <p className="text-[10px] text-primary font-medium">Premium: ₹103/wk</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Award size={16} className="text-primary" />
            <p className="text-xs text-text-muted">GigPoints</p>
          </div>
          <p className="text-2xl font-bold text-gradient">2,450</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-sm">🥈</span>
            <p className="text-xs text-text-secondary">Reliable Tier</p>
          </div>
        </div>
        <div className="gradient-success rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} className="text-white/80" />
            <p className="text-xs text-white/70">Net Savings</p>
          </div>
          <p className="text-2xl font-bold text-white">₹1,968</p>
          <p className="text-xs text-white/80 mt-1">556% ROI</p>
        </div>
      </div>

      {/* Streak */}
      <div className="glass rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Flame size={16} className="text-warning" />
            <p className="text-sm font-semibold text-text-primary">7-Week Streak</p>
          </div>
          <p className="text-xs text-primary">+75 pts/week</p>
        </div>
        <div className="flex gap-1.5">
          {['W1','W2','W3','W4','W5','W6','W7','W8'].map((w, i) => (
            <div key={i} className={`flex-1 py-1.5 rounded-lg text-center text-[10px] font-bold ${i < 7 ? 'gradient-primary text-white' : 'bg-dark-surface text-text-muted border border-dashed border-dark-border'}`}>
              {i < 7 ? '✓' : w}
            </div>
          ))}
        </div>
      </div>

      {/* Protection Timeline */}
      <div className="glass rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-text-muted uppercase tracking-wider">Today's Activity</p>
          <button className="text-xs text-primary font-medium">See All</button>
        </div>
        <div className="space-y-3">
          {[
            { icon: CloudRain, color: 'primary', title: 'Rainfall Trigger', time: '12:10 PM', zone: 'HSR Layout', payout: 600, pts: 200 },
            { icon: Shield, color: 'accent', title: 'Policy Active', time: '11:45 AM', zone: 'Pro Shield', payout: null, pts: null },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl bg-${item.color}/20 flex items-center justify-center`}>
                <item.icon size={16} className={`text-${item.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-primary">{item.title}</p>
                <p className="text-xs text-text-secondary">{item.time} — {item.zone}</p>
              </div>
              {item.payout && (
                <div className="text-right">
                  <p className="text-sm font-bold text-success">+₹{item.payout}</p>
                  <p className="text-xs text-primary">+{item.pts} pts</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Coverage Gap Detector */}
      <div className="bg-danger/5 border border-danger/20 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-danger mt-0.5" />
          <div>
            <p className="text-sm font-bold text-danger">Coverage Gap Alert</p>
            <p className="text-xs text-text-secondary mt-1">
              34 active Pro Shield workers received ₹600 each today. Don't miss your next protection event.
            </p>
            <button className="mt-2 px-3 py-1.5 text-xs font-semibold gradient-primary text-white rounded-lg">
              Enable Auto-Renew
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// POLICY TAB
function PolicyTab({ autoRenew, setAutoRenew }) {
  return (
    <div className="space-y-4 mt-2">
      <h2 className="text-xl font-bold text-text-primary">My Policy</h2>

      {/* Policy Certificate */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/30">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="relative p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-primary" />
              <span className="text-sm font-bold text-primary">GIGSHIELD POLICY</span>
            </div>
            <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
              <Download size={12} /> PDF
            </button>
          </div>
          <div className="space-y-2.5">
            <div className="flex justify-between">
              <span className="text-xs text-text-muted">Policy ID</span>
              <span className="text-xs font-mono text-text-primary">GS-2026-HSR-00342</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-text-muted">Holder</span>
              <span className="text-xs text-text-primary">Ravi Kumar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-text-muted">Zone</span>
              <span className="text-xs text-text-primary">HSR Layout, Bangalore</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-text-muted">Plan</span>
              <span className="text-xs text-text-primary font-semibold">Pro Shield ⚡</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-text-muted">Coverage</span>
              <span className="text-xs text-text-primary">₹600/disruption day</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-text-muted">Valid</span>
              <span className="text-xs text-text-primary">10 Mar – 16 Mar 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-text-muted">Premium</span>
              <span className="text-xs text-text-primary">₹103 (5% tier discount)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-text-muted">Tier</span>
              <span className="text-xs text-text-primary">🥈 Reliable</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-dark-border">
            <p className="text-[10px] text-text-muted mb-2">COVERED TRIGGERS</p>
            <div className="flex flex-wrap gap-1.5">
              {['Rain >15mm', 'AQI >300', 'Temp >43°C', 'Flood Alert', 'Store Closure', 'Curfew'].map((t, i) => (
                <span key={i} className="px-2 py-0.5 bg-dark-surface rounded-full text-[10px] text-text-secondary">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Risk Score */}
      <div className="glass rounded-2xl p-4">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Zone Risk Assessment</p>
        <div className="flex items-center gap-4 mb-3">
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="rgba(45,37,80,1)" strokeWidth="3" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="url(#gradient)" strokeWidth="3" strokeDasharray="74, 100" strokeLinecap="round" />
              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%" stopColor="#6C5CE7" />
                  <stop offset="100%" stopColor="#00D2D3" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-text-primary">0.74</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-warning">Moderate-High Risk</p>
            <p className="text-xs text-text-secondary">Based on 90-day zone history</p>
            <p className="text-xs text-text-muted mt-1">Premium adjustment: +9%</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: 'Rainfall Frequency', value: 72, color: '#6C5CE7' },
            { label: 'AQI History', value: 58, color: '#FDCB6E' },
            { label: 'Flood Risk', value: 45, color: '#FF6B6B' },
            { label: 'Seasonal Weight', value: 85, color: '#00D2D3' },
          ].map((r, i) => (
            <div key={i}>
              <div className="flex justify-between mb-0.5">
                <span className="text-[10px] text-text-muted">{r.label}</span>
                <span className="text-[10px] text-text-secondary">{r.value}%</span>
              </div>
              <div className="h-1 rounded-full bg-dark-border overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${r.value}%`, background: r.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-Renew */}
      <div className="glass rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <RefreshCw size={18} className="text-primary" />
          <div>
            <p className="text-sm font-semibold text-text-primary">Auto-Renew</p>
            <p className="text-xs text-text-secondary">UPI mandate active</p>
          </div>
        </div>
        <button onClick={() => setAutoRenew(!autoRenew)}
                className={`w-12 h-7 rounded-full transition-all relative ${autoRenew ? 'bg-primary' : 'bg-dark-border'}`}>
          <div className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-all ${autoRenew ? 'right-1' : 'left-1'}`} />
        </button>
      </div>

      {/* Claim Statement / EOB */}
      <div className="glass rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-text-muted uppercase tracking-wider">Latest Claim</p>
          <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
            <Download size={12} /> EOB
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-text-muted">Claim ID</span>
            <span className="text-text-primary font-mono">GS-CLM-0892</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-text-muted">Event</span>
            <span className="text-text-primary">Heavy Rainfall</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-text-muted">Triggered</span>
            <span className="text-text-primary">12:10 PM, Mar 10</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-text-muted">Payout</span>
            <span className="text-success font-bold">₹600</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-text-muted">Status</span>
            <span className="px-2 py-0.5 bg-success/20 text-success rounded-full text-[10px] font-bold">SETTLED</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-dark-border space-y-1.5">
          <p className="text-[10px] text-text-muted mb-1.5">VALIDATION CHECKS</p>
          {[
            { label: 'GPS in zone (0.8 km)', pass: true },
            { label: 'Active (3 deliveries in 30 min)', pass: true },
            { label: 'App logged in at trigger time', pass: true },
            { label: 'No duplicate claim', pass: true },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-success" />
              <span className="text-[10px] text-text-secondary">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// POINTS TAB
function PointsTab() {
  const tiers = [
    { name: 'Starter', emoji: '🥉', min: 0, max: 999, color: '#7C72A0' },
    { name: 'Reliable', emoji: '🥈', min: 1000, max: 2499, color: '#6C5CE7', current: true },
    { name: 'Veteran', emoji: '🥇', min: 2500, max: 4999, color: '#FDCB6E' },
    { name: 'Champion', emoji: '💎', min: 5000, max: 10000, color: '#00D2D3' },
  ]

  return (
    <div className="space-y-4 mt-2">
      <h2 className="text-xl font-bold text-text-primary">GigPoints</h2>

      {/* Points Hero */}
      <div className="relative overflow-hidden rounded-2xl gradient-primary p-5">
        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full bg-white/10 blur-[30px]" />
        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs">Total Balance</p>
            <p className="text-4xl font-black text-white mt-1">2,450</p>
            <p className="text-sm text-white/80 mt-1">🥈 Reliable Tier • 5% discount</p>
          </div>
          <div className="w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center bg-white/10">
            <span className="text-3xl">🥈</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-xs text-white/70 mb-1">
            <span>2,450 / 2,500 to Veteran 🥇</span>
            <span>98%</span>
          </div>
          <div className="h-2 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full w-[98%] bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Tier Progress */}
      <div className="glass rounded-2xl p-4">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Tier Roadmap</p>
        <div className="space-y-3">
          {tiers.map((tier, i) => (
            <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl ${tier.current ? 'bg-primary/10 border border-primary/30' : ''}`}>
              <span className="text-lg">{tier.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-semibold ${tier.current ? 'text-primary' : 'text-text-primary'}`}>{tier.name}</p>
                  <span className="text-[10px] text-text-muted">{tier.min.toLocaleString()}+ pts</span>
                </div>
                <p className="text-[10px] text-text-secondary">
                  {tier.name === 'Starter' && 'Standard coverage'}
                  {tier.name === 'Reliable' && '5% premium discount'}
                  {tier.name === 'Veteran' && '10% off + priority payout'}
                  {tier.name === 'Champion' && '15% off + free week/quarter'}
                </p>
              </div>
              {tier.current && <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded-full bg-primary/10">YOU</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Points */}
      <div className="glass rounded-2xl p-4">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Recent Points</p>
        <div className="space-y-2.5">
          {[
            { action: 'Payout received', pts: 200, time: 'Today, 12:11 PM' },
            { action: 'Active during disruption', pts: 100, time: 'Today, 12:10 PM' },
            { action: 'Streak bonus (Week 7)', pts: 75, time: 'Sunday' },
            { action: 'Policy renewal', pts: 50, time: 'Sunday' },
            { action: 'Referral: Suresh M.', pts: 500, time: 'Last week' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-1">
              <div>
                <p className="text-sm text-text-primary">{item.action}</p>
                <p className="text-[10px] text-text-muted">{item.time}</p>
              </div>
              <span className="text-sm font-bold text-primary">+{item.pts}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Redemption */}
      <div className="glass rounded-2xl p-4">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Next Reward Milestones</p>
        <div className="space-y-2.5">
          {[
            { pts: 2500, reward: '10% waiver + priority payout', progress: 98 },
            { pts: 5000, reward: '1 free week every 13 weeks', progress: 49 },
            { pts: 7500, reward: '₹500 bonus coverage top-up', progress: 33 },
          ].map((m, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-dark-surface">
              <div className="flex justify-between mb-1">
                <p className="text-xs text-text-primary font-medium">{m.reward}</p>
                <span className="text-[10px] text-primary">{m.pts.toLocaleString()} pts</span>
              </div>
              <div className="h-1 rounded-full bg-dark-border overflow-hidden">
                <div className="h-full gradient-primary rounded-full" style={{ width: `${m.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral */}
      <div className="glass rounded-2xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <UserPlus size={18} className="text-accent" />
          <p className="text-sm font-bold text-text-primary">Refer Zone Partners</p>
        </div>
        <p className="text-xs text-text-secondary mb-3">Both get ₹50 off next week + you earn 500 pts</p>
        <div className="flex gap-2">
          <div className="flex-1 bg-dark-surface rounded-xl p-2.5 text-center">
            <p className="text-xs text-text-muted">Your Referrals</p>
            <p className="text-lg font-bold text-text-primary">3</p>
          </div>
          <div className="flex-1 bg-dark-surface rounded-xl p-2.5 text-center">
            <p className="text-xs text-text-muted">Zone Milestone</p>
            <p className="text-lg font-bold text-accent">20/34</p>
          </div>
        </div>
        <button className="mt-3 w-full py-2.5 bg-accent/10 border border-accent/30 rounded-xl text-accent text-sm font-semibold">
          Share Referral Link
        </button>
      </div>
    </div>
  )
}

// HISTORY TAB
function HistoryTab() {
  return (
    <div className="space-y-4 mt-2">
      <h2 className="text-xl font-bold text-text-primary">Protection History</h2>

      {/* Savings Dashboard */}
      <div className="glass rounded-2xl p-5">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Lifetime Savings</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-text-muted">Premiums Paid</p>
            <p className="text-lg font-bold text-text-primary">₹432</p>
          </div>
          <div>
            <p className="text-xs text-text-muted">Payouts Received</p>
            <p className="text-lg font-bold text-success">₹2,400</p>
          </div>
        </div>
        <div className="border-t border-dark-border pt-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-secondary">Net Savings</p>
            <p className="text-2xl font-black text-gradient">₹1,968</p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-text-muted">Return on Protection</p>
            <p className="text-sm font-bold text-success">556%</p>
          </div>
          <p className="text-[10px] text-text-muted mt-2 italic">"For every ₹1 you paid, you got ₹5.56 back"</p>
        </div>
      </div>

      {/* This Week Summary */}
      <div className="glass rounded-2xl p-4">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3">This Week</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <p className="text-lg font-bold text-text-primary">₹1,200</p>
            <p className="text-[10px] text-text-muted">Protected</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-primary">725</p>
            <p className="text-[10px] text-text-muted">Points Earned</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-accent">2</p>
            <p className="text-[10px] text-text-muted">Triggers</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="glass rounded-2xl p-4">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Protection Timeline</p>
        <div className="space-y-4">
          <p className="text-[10px] font-semibold text-text-muted">TODAY</p>
          {[
            { icon: CloudRain, color: 'bg-primary/20', iconColor: 'text-primary', title: 'Rainfall Trigger', sub: 'HSR Layout — 19mm/hr', time: '12:10 PM', payout: '+₹600', pts: '+200' },
            { icon: Shield, color: 'bg-accent/20', iconColor: 'text-accent', title: 'Policy Active', sub: 'Pro Shield — Week 8', time: '11:45 AM', payout: null, pts: null },
          ].map((e, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-xl ${e.color} flex items-center justify-center shrink-0`}>
                <e.icon size={16} className={e.iconColor} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary">{e.title}</p>
                <p className="text-xs text-text-secondary">{e.sub}</p>
                <p className="text-[10px] text-text-muted">{e.time}</p>
              </div>
              {e.payout && (
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-success">{e.payout}</p>
                  <p className="text-xs text-primary">{e.pts} pts</p>
                </div>
              )}
            </div>
          ))}

          <p className="text-[10px] font-semibold text-text-muted pt-2">YESTERDAY</p>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-warning/20 flex items-center justify-center shrink-0">
              <Wind size={16} className="text-warning" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">AQI Trigger</p>
              <p className="text-xs text-text-secondary">HSR Layout — AQI 320</p>
              <p className="text-[10px] text-text-muted">3:20 PM</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-success">+₹600</p>
              <p className="text-xs text-primary">+200 pts</p>
            </div>
          </div>

          <p className="text-[10px] font-semibold text-text-muted pt-2">THIS WEEK</p>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-danger/20 flex items-center justify-center shrink-0">
              <AlertTriangle size={16} className="text-danger" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">Dark Store Closure</p>
              <p className="text-xs text-text-secondary">Koramangala — Local strike</p>
              <p className="text-[10px] text-text-muted">Mar 8, 2:15 PM</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-success">+₹600</p>
              <p className="text-xs text-primary">+200 pts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Zone History */}
      <div className="glass rounded-2xl p-4">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Zone: HSR Layout — Last 30 Days</p>
        <div className="space-y-2.5">
          {[
            { date: 'Mar 10', event: 'Heavy Rain (19mm/hr)', hours: 4, workers: 34, total: '₹20,400' },
            { date: 'Mar 08', event: 'AQI 320', hours: 2, workers: 31, total: '₹18,600' },
            { date: 'Mar 03', event: 'Dark Store Closure', hours: 3, workers: 28, total: '₹16,800' },
            { date: 'Feb 28', event: 'Extreme Heat (44°C)', hours: 6, workers: 40, total: '₹24,000' },
          ].map((z, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-dark-surface">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-bold text-text-primary">{z.date} — {z.event}</p>
              </div>
              <div className="flex gap-3 text-[10px] text-text-muted">
                <span>{z.hours} hrs</span>
                <span>•</span>
                <span>{z.workers} workers paid</span>
                <span>•</span>
                <span className="text-success font-medium">{z.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// PROFILE TAB
function ProfileTab({ onBack }) {
  return (
    <div className="space-y-4 mt-2">
      <h2 className="text-xl font-bold text-text-primary">Profile</h2>

      <div className="glass rounded-2xl p-5 text-center">
        <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3">
          <span className="text-3xl font-bold text-white">R</span>
        </div>
        <h3 className="text-lg font-bold text-text-primary">Ravi Kumar</h3>
        <p className="text-sm text-text-secondary">Zepto Partner • HSR Layout</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-sm">🥈</span>
          <span className="text-xs text-primary font-semibold">Reliable Tier • 2,450 pts</span>
        </div>
      </div>

      <div className="glass rounded-2xl p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-xs text-text-muted">Mobile</span>
          <span className="text-xs text-text-primary">+91 98765 43210</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-text-muted">Platform</span>
          <span className="text-xs text-text-primary">Zepto</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-text-muted">Zone</span>
          <span className="text-xs text-text-primary">HSR-01, Bangalore</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-text-muted">Shift</span>
          <span className="text-xs text-text-primary">Full Day (10 hrs)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-text-muted">Member Since</span>
          <span className="text-xs text-text-primary">Jan 2026 (Week 1)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-text-muted">UPI</span>
          <span className="text-xs text-text-primary">ravi@okicici</span>
        </div>
      </div>

      <div className="glass rounded-2xl p-4 space-y-3">
        {[
          { label: 'Notification Settings', icon: Bell },
          { label: 'Payment Methods', icon: IndianRupee },
          { label: 'Language / भाषा', icon: Settings },
          { label: 'Help & Support', icon: Info },
        ].map((item, i) => (
          <button key={i} className="w-full flex items-center justify-between py-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-3">
              <item.icon size={16} className="text-text-muted" />
              <span className="text-sm text-text-primary">{item.label}</span>
            </div>
            <ChevronRight size={14} className="text-text-muted" />
          </button>
        ))}
      </div>

      <button onClick={onBack} className="w-full py-3 bg-dark-card border border-dark-border rounded-2xl text-text-secondary font-medium text-sm">
        ← Back to Landing Page
      </button>
    </div>
  )
}
