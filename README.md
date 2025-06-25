# Bayes to the Future: Predicting Heart Disease with Data

This project uses a Bayesian Network to predict the risk of heart disease using simulated patient data. The model is built using `pgmpy`, a Python library for Probabilistic Graphical Models.

---

## 📁 Dataset

- Source: https://bit.ly/3T1A7Rs
- Format: CSV
- Preprocessing done:
  - Removed duplicate rows
  - Dropped missing values
  - Applied Min-Max normalization to numeric columns
  - Discretized columns: age, chol, thalach

---

## 🧠 Bayesian Network Structure

age → fbs → target → chol, thalach

Where:
- `age`: Patient’s age (discretized)
- `fbs`: Fasting blood sugar
- `target`: Heart disease diagnosis (0 = No, 1 = Yes)
- `chol`: Serum cholesterol (discretized)
- `thalach`: Max heart rate achieved (discretized)

---

## 🛠️ Technologies Used

- Python 3.x
- pandas
- scikit-learn
- matplotlib
- pgmpy

---

## 📈 Inference Example

Query: What is the probability of heart disease if age = medium?

Result:

target(0): 45.79%  
target(1): 54.21%

---

## 📊 Visualizations

Bayesian Network Graph is saved as:
