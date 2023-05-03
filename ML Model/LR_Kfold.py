import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import KFold
from sklearn.metrics import r2_score
import matplotlib.pyplot as plt

# Load the data
data = pd.read_csv('india_economy.csv')

# Prepare the data
X = data['YEAR'].values.reshape(-1, 1)
y = data[' GDP'].values.reshape(-1, 1)

# Create a Linear Regression object
regressor = LinearRegression()

# Define the number of folds for cross-validation
n_splits = 5

# Create a KFold object
kf = KFold(n_splits=n_splits)

# Initialize a list to store the R-squared values for each fold
r2_scores = []

# Train the model using k-fold cross-validation
for train_index, test_index in kf.split(X):
    # Split the data into training and testing sets
    X_train, X_test = X[train_index], X[test_index]
    y_train, y_test = y[train_index], y[test_index]
    
    # Train the model on the training set
    regressor.fit(X_train, y_train)
    
    # Make predictions on the test set
    y_pred = regressor.predict(X_test)
    
    # Compute the R-squared score for the test set
    r2 = r2_score(y_test, y_pred)
    
    # Append the R-squared score to the list
    r2_scores.append(r2)

# Compute the average R-squared score across all folds
avg_r2_score = np.mean(r2_scores)

# Print the average R-squared score
print("Average R-squared score:", avg_r2_score)

# Make predictions on the entire dataset
y_pred = regressor.predict(X)

# Plot the predicted values against the actual values
plt.scatter(X, y, color='blue')
plt.plot(X, y_pred, color='red')
plt.title('GDP vs Year')
plt.xlabel('Year')
plt.ylabel('GDP')
plt.text(1990, 1.5e13, "Equation of the line: y = {:.2f}x + {:.2f}".format(regressor.coef_[0][0], regressor.intercept_[0]))
plt.savefig('linear_regression.png')
plt.show()
