import pandas as pd
import matplotlib.pyplot as plt
from sklearn.tree import DecisionTreeRegressor

# load data
data = pd.read_csv('india_economy.csv')
X = data.iloc[:, :-1].values
y = data.iloc[:, -1].values

# fit the model
regressor = DecisionTreeRegressor(random_state=0)
regressor.fit(X, y)

# predict values
y_pred = regressor.predict(X)

# plot the results
plt.scatter(X, y, color='red')
plt.plot(X, y_pred, color='blue')
plt.title('GDP prediction using Decision Tree Regression')
plt.xlabel('Year')
plt.ylabel('GDP')
plt.savefig('decision_tree_regression.png')

# print the equation of the line
print("Decision Tree Regression Equation:")
print("GDP = ", end="")
for i, coef in enumerate(regressor.tree_.value):
    if i == 0:
        print("{:.2f}".format(coef[0][0]), end="")
    else:
        feature = regressor.tree_.feature[i-1]
        threshold = regressor.tree_.threshold[i-1]
        if threshold < 0:
            print(" - {:.2f}".format(abs(threshold)), end="")
        else:
            print(" + {:.2f}".format(threshold), end="")
        print(" * X[{}]".format(feature), end="")
print()
