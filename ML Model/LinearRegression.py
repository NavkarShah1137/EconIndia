import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

# Load data from CSV file
data = pd.read_csv('india_economy.csv')

# Split data into X and y
X = data['YEAR'].values.reshape(-1, 1)
y = data[' GDP'].values.reshape(-1, 1)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)

# Create a linear regression model
reg = LinearRegression()

# Fit the model to the training data
reg.fit(X_train, y_train)

# Compute the predicted values for the testing set
y_pred = reg.predict(X_test)

# Compute the model accuracy on the testing set
accuracy = r2_score(y_test, y_pred)

# Plot the data and the linear regression line
plt.scatter(X, y, color='blue')
plt.plot(X, reg.predict(X), color='red')

# Add equation of the linear regression line to the plot
equation = 'y = {:.2f}x + {:.2f}'.format(reg.coef_[0][0], reg.intercept_[0])
plt.text(0.05, 0.95, equation, fontsize=12, transform=plt.gca().transAxes)

plt.title('Indian Economy Trained Model')
plt.xlabel('Year')
plt.ylabel('GDP')
plt.savefig('indian_economy_trained.png')
plt.show()

# Print the equation of the linear regression line and model accuracy to the console
print('Equation of the linear regression line: y = {:.2f}x + {:.2f}'.format(reg.coef_[0][0], reg.intercept_[0]))
print('Model accuracy (R2 score): {:.4f}'.format(accuracy))

