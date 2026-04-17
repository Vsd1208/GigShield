// ML Service for handling ML-related logic
import axios from 'axios';

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'http://localhost:5000';

class MLService {
    async getPrediction(modelType, data) {
        try {
            const response = await axios.post(`${ML_SERVICE_URL}/predict/${modelType}`, data);
            return response.data;
        } catch (error) {
            throw new Error('ML prediction failed');
        }
    }

    async checkHealth() {
        try {
            const response = await axios.get(`${ML_SERVICE_URL}/health`);
            return response.data;
        } catch (error) {
            return { status: 'unhealthy' };
        }
    }
}

export default new MLService();