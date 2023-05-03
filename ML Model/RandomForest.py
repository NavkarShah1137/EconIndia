import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Load data
data = pd.read_csv('india_gdp.csv')

# Extract year from date column and create new Year column
data['Year'] = pd.to_datetime(data['Date']).dt.year

# Drop Date column
data = data.drop(['Date'], axis=1)

# Split data into input features and target variable
X = data.drop(['GDP'], axis=1)
y = data['GDP']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Random Forest model
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Make predictions on testing set and evaluate performance
y_pred = rf.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
print("Mean squared error: ", mse)

# Get feature importances
importances = pd.DataFrame({'Feature': X.columns, 'Importance': rf.feature_importances_})
importances = importances.sort_values(by='Importance', ascending=False)
print(importances)
