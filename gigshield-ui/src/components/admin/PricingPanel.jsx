import { useState, useEffect } from 'react';
import PriceGraph from '../graphs/PriceGraph';
import { predictPrice } from '../../api/mlApi';

const PricingPanel = () => {
  const [priceData, setPriceData] = useState([]);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const data = [
      { name: 'Basic', price: 100 },
      { name: 'Pro', price: 200 },
      { name: 'Elite', price: 300 },
    ];
    setPriceData(data);
  }, []);

  const handlePredict = async () => {
    try {
      const result = await predictPrice({ feature1: 1, feature2: 2 });
      setPrediction(result.price[0]);
    } catch (error) {
      console.error('Prediction failed', error);
    }
  };

  return (
    <div>
      <h2>Pricing Panel</h2>
      <PriceGraph data={priceData} />
      <button onClick={handlePredict}>Predict Price</button>
      {prediction !== null && <p>Predicted Price: {prediction}</p>}
    </div>
  );
};

export default PricingPanel;