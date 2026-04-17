import { useState, useEffect } from 'react';
import FraudGraph from '../graphs/FraudGraph';
import { predictFraud } from '../../api/mlApi';

const FraudPanel = () => {
  const [fraudData, setFraudData] = useState([]);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    // Simulate fetching fraud data from backend
    const data = [
      { name: 'Jan', fraud: 20 },
      { name: 'Feb', fraud: 30 },
      { name: 'Mar', fraud: 25 },
    ];
    setFraudData(data);
  }, []);

  const handlePredict = async () => {
    try {
      const result = await predictFraud({ feature1: 1, feature2: 2 });
      setPrediction(result.fraud[0]);
    } catch (error) {
      console.error('Prediction failed', error);
    }
  };

  return (
    <div>
      <h2>Fraud Panel</h2>
      <FraudGraph data={fraudData} />
      <button onClick={handlePredict}>Predict Fraud</button>
      {prediction !== null && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default FraudPanel;