import { useState, useEffect } from 'react';
import { Target, Activity, DollarSign, Fingerprint } from 'lucide-react';
import PriceGraph from '../graphs/PriceGraph';
import FraudGraph from '../graphs/FraudGraph';
import RiskGraph from '../graphs/RiskGraph';
import ClaimGraph from '../graphs/ClaimGraph';
import { getMlAnalytics } from '../../api/mlApi';

const MLDashboardPanel = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const data = await getMlAnalytics();
        setAnalytics(data);
      } catch (err) {
        console.error('Failed to load ML Analytics:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 space-y-4">
        <div className="w-8 h-8 rounded-full border-4 border-[#6C5CE7] border-t-transparent animate-spin"></div>
        <p className="text-sm font-medium text-text-muted">Loading ML models and inferences...</p>
      </div>
    );
  }

  if (!analytics || !analytics.graphs) {
    return (
      <div className="p-6 text-sm text-danger text-center glass rounded-xl">
        Failed to dynamically load ML insights. Make sure the backend and ml-service are running.
      </div>
    );
  }

  const { price, fraud, risk, claim } = analytics.graphs;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass rounded-2xl p-6">
        <h3 className="text-sm font-bold text-text-primary mb-2">Machine Learning Dashboard</h3>
        <p className="text-xs text-text-muted mb-6">Real-time model inferences generating live price, risk, and fraud calculations directly from the python engine.</p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={16} className="text-[#6C5CE7]" />
              <h4 className="text-sm font-semibold text-text-primary">Dynamic Pricing Engine (XGBoost)</h4>
            </div>
            <div className="p-4 bg-dark-surface rounded-xl border border-dark-border">
               <PriceGraph data={price} />
            </div>
            <p className="text-[11px] text-text-muted text-center">Predicts 7-day forward pricing based on weather patterns.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Fingerprint size={16} className="text-[#e74c3c]" />
              <h4 className="text-sm font-semibold text-text-primary">Fraud Probability Matrix</h4>
            </div>
            <div className="p-4 bg-dark-surface rounded-xl border border-dark-border">
               <FraudGraph data={fraud} />
            </div>
            <p className="text-[11px] text-text-muted text-center">Calculates claim illegitimacy likelihood per worker zone.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={16} className="text-[#27ae60]" />
              <h4 className="text-sm font-semibold text-text-primary">Disruption Risk Forecast</h4>
            </div>
            <div className="p-4 bg-dark-surface rounded-xl border border-dark-border">
               <RiskGraph data={risk} />
            </div>
            <p className="text-[11px] text-text-muted text-center">Intra-day volatility forecasting mapping expected events.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-[#f39c12]" />
              <h4 className="text-sm font-semibold text-text-primary">Trigger Distribution</h4>
            </div>
            <div className="p-4 bg-dark-surface rounded-xl border border-dark-border">
               <ClaimGraph data={claim} />
            </div>
            <p className="text-[11px] text-text-muted text-center">Categorical breakdown of parametric payout triggers.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MLDashboardPanel;