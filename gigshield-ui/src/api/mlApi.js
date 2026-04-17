import { apiFetch } from '../lib/api.js';

export async function predictFraud(data) {
  return apiFetch('/api/ml/fraud', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function predictPrice(data) {
  return apiFetch('/api/ml/price', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function predictRisk(data) {
  return apiFetch('/api/ml/risk', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function predictClaim(data) {
  return apiFetch('/api/ml/claim', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}