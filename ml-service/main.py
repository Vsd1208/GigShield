from flask import Flask, request, jsonify
import pickle
import pandas as pd
import os

app = Flask(__name__)

# Load models if they exist
models = {}
model_files = {
    'fraud': 'fraud_model.pkl',
    'price': 'price_model.pkl',
    'risk': 'risk_model.pkl',
    'claim': 'claim_model.pkl'
}

for key, file in model_files.items():
    if os.path.exists(file):
        models[key] = pickle.load(open(file, 'rb'))

@app.route('/predict/<model_type>', methods=['POST'])
def predict(model_type):
    try:
        if model_type not in models:
            return jsonify({'error': f'Model {model_type} not loaded'}), 404
        
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No JSON data provided'}), 400
        
        df = pd.DataFrame([data])
        prediction = models[model_type].predict(df)
        return jsonify({model_type: prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)