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
tree_structure = regressor.tree_
feature = tree_structure.feature
threshold = tree_structure.threshold
values = tree_structure.value

def print_node(n, indent_level=0):
    indent = '  ' * indent_level
    if tree_structure.feature[n] == -2:
        print(indent + "return {:.2f}".format(values[n][0][0]))
        return
    print(indent + "if X[{}] <= {:.2f}:".format(feature[n], threshold[n]))
    print_node(tree_structure.children_left[n], indent_level + 1)
    print(indent + "else:")
    print_node(tree_structure.children_right[n], indent_level + 1)

print_node(0)
