import { useState, useEffect } from 'react';
import { Target, Activity, DollarSign, Fingerprint } from 'lucide-react';
import PriceGraph from '../graphs/PriceGraph';
import FraudGraph from '../graphs/FraudGraph';
import RiskGraph from '../graphs/RiskGraph';
import ClaimGraph from '../graphs/ClaimGraph';

const MLDashboardPanel = () => {
  const [priceData] = useState([
    { name: 'Mon', price: 99 },
    { name: 'Tue', price: 108 },
    { name: 'Wed', price: 104 },
    { name: 'Thu', price: 115 },
    { name: 'Fri', price: 121 },
    { name: 'Sat', price: 125 },
    { name: 'Sun', price: 130 },
  ]);

  const [fraudData] = useState([
    { name: 'HSR', fraud: 0.12 },
    { name: 'KRM', fraud: 0.05 },
    { name: 'IND', fraud: 0.18 },
    { name: 'WFD', fraud: 0.03 },
    { name: 'BTM', fraud: 0.22 },
  ]);

  const [riskData] = useState([
    { name: '6 AM', risk: 0.2 },
    { name: '9 AM', risk: 0.4 },
    { name: '12 PM', risk: 0.5 },
    { name: '3 PM', risk: 0.8 },
    { name: '6 PM', risk: 0.7 },
    { name: '9 PM', risk: 0.3 },
  ]);

  const [claimData] = useState([
    { name: 'Rainfall', value: 45 },
    { name: 'AQI', value: 25 },
    { name: 'Heat', value: 20 },
    { name: 'Closure', value: 10 },
  ]);

  return (
    <div className="space-y-6">
      <div className="glass rounded-2xl p-6">
        <h3 className="text-sm font-bold text-text-primary mb-2">Machine Learning Dashboard</h3>
        <p className="text-xs text-text-muted mb-6">Real-time model inferences generating live price, risk, and fraud calculations.</p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={16} className="text-[#6C5CE7]" />
              <h4 className="text-sm font-semibold text-text-primary">Dynamic Pricing Engine (XGBoost)</h4>
            </div>
            <div className="p-4 bg-dark-surface rounded-xl border border-dark-border">
               <PriceGraph data={priceData} />
            </div>
            <p className="text-[11px] text-text-muted text-center">Predicts 7-day forward pricing based on weather patterns.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Fingerprint size={16} className="text-[#e74c3c]" />
              <h4 className="text-sm font-semibold text-text-primary">Fraud Probability Matrix</h4>
            </div>
            <div className="p-4 bg-dark-surface rounded-xl border border-dark-border">
               <FraudGraph data={fraudData} />
            </div>
            <p className="text-[11px] text-text-muted text-center">Calculates claim illegitimacy likelihood per worker zone.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={16} className="text-[#27ae60]" />
              <h4 className="text-sm font-semibold text-text-primary">Disruption Risk Forecast</h4>
            </div>
            <div className="p-4 bg-dark-surface rounded-xl border border-dark-border">
               <RiskGraph data={riskData} />
            </div>
            <p className="text-[11px] text-text-muted text-center">Intra-day volatility forecasting mapping expected events.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-[#f39c12]" />
              <h4 className="text-sm font-semibold text-text-primary">Trigger Distribution</h4>
            </div>
            <div className="p-4 bg-dark-surface rounded-xl border border-dark-border">
               <ClaimGraph data={claimData} />
            </div>
            <p className="text-[11px] text-text-muted text-center">Categorical breakdown of parametric payout triggers.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MLDashboardPanel;