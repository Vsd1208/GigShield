import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.linear_model import LogisticRegression
import pickle
import os

# Function to train and save model
def train_model(data_path, model_path, model_type='classifier', target_col='target'):
    if not os.path.exists(data_path):
        print(f"Data file {data_path} not found.")
        return

    df = pd.read_csv(data_path)
    if df.empty:
        print(f"Data file {data_path} is empty.")
        return

    X = df.drop(columns=[target_col])
    y = df[target_col]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    if model_type == 'classifier':
        model = RandomForestClassifier(n_estimators=100, random_state=42)
    else:
        model = RandomForestRegressor(n_estimators=100, random_state=42)

    model.fit(X_train, y_train)

    with open(model_path, 'wb') as f:
        pickle.dump(model, f)

    print(f"Model saved to {model_path}")

# Train models
train_model('datasets/fraud_data.csv', 'fraud_model.pkl', 'classifier')
train_model('datasets/insurance_data.csv', 'price_model.pkl', 'regressor')
train_model('datasets/risk_data.csv', 'risk_model.pkl', 'regressor')
train_model('datasets/claims_data.csv', 'claim_model.pkl', 'classifier')

print("All models trained and saved.")