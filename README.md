# Bayes to the Future: Predicting Heart Disease with Data!

This project uses a Bayesian Network model built with the pgmpy library to predict the risk of heart disease using simulated patient data. The model identifies probabilistic relationships between variables and answers key diagnostic queries based on conditions like age, cholesterol, and fasting blood sugar levels.

## Dataset

- Original Dataset: heart_disease.csv
- Cleaned Dataset: cleaned_data.csv

The dataset was cleaned by:
1. Removing duplicate records
2. Dropping rows with missing values
3. Applying Min-Max normalization to numeric columns (age, chol, thalach, etc.)
4. Discretizing continuous columns into 'low', 'medium', and 'high' bins


## Bayesian Network Structure

Structure used:
age → fbs → target → chol
                    → thalach

- Built using: DiscreteBayesianNetwork (pgmpy)
- Trained using: Maximum Likelihood Estimation (MLE)

## Inference Performed

Example diagnostic queries and their results:

P(target | age = "medium")
→ target(0): 0.4579
→ target(1): 0.5421

P(target | fbs = "low", chol = "high")
→ target(0): 0.388
→ target(1): 0.612

These queries help predict the probability of heart disease based on patient conditions.

## Files in Repository

- bayes_heart.ipynb : Main notebook with code and results
- heart_disease.csv : Original dataset
- cleaned_data.csv  : Cleaned dataset after preprocessing
- bayesian_network.png : Visualization of the Bayesian network
- README.md : Project summary and setup instructions

## Visualization

The Bayesian Network graph is saved as bayesian_network.png and shows the relationships between medical features used in diagnosis.

## How to Run the Project

1. Install required libraries:
   pip install pandas matplotlib pgmpy scikit-learn networkx

2. Open the notebook:
   jupyter notebook bayes_heart.ipynb

3. Run each cell step-by-step to view data preprocessing, model building, inference, and visualization.


## Conclusion

This project demonstrates how Bayesian Networks can be used for healthcare risk prediction using interpretable, probabilistic models. The final model provides useful insights into heart disease prediction using patient data conditions.