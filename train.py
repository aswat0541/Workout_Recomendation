import pandas as pd
import numpy as np
import json
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split

df = pd.read_csv('gym_data.csv')
target = 'Experience_Level'
X = df.drop(columns=[target])
y = df[target]

le = LabelEncoder()
y_enc = le.fit_transform(y)
levels = le.classes_.tolist()  # [1,2,3]
print("Experience levels:", levels)

X['BMI_Class'] = pd.cut(X['BMI'], bins=[0,18.5,24.9,29.9,100], labels=[0,1,2,3])
X['HR_Burn_Ratio'] = X['Calories_Burned'] / (X['Max_BPM'] + 1)
X['Gender_Code'] = X['Gender'].map({'Male':0, 'Female':1})

feature_cols = ['Age', 'Gender_Code', 'Weight (kg)', 'Height (m)', 'Max_BPM', 'Avg_BPM',
                'Resting_BPM', 'Session_Duration (hours)', 'Calories_Burned',
                'Fat_Percentage', 'Water_Intake (liters)', 'Workout_Frequency (days/week)',
                'BMI', 'BMI_Class', 'HR_Burn_Ratio']
X = X[feature_cols]

X_train, X_test, y_train, y_test = train_test_split(X, y_enc, test_size=0.2, random_state=42, stratify=y_enc)

dt = DecisionTreeClassifier(random_state=42, class_weight='balanced')
dt.fit(X_train, y_train)

acc = (dt.predict(X_test) == y_test).mean()
print(f"Test Accuracy: {acc:.4f}")  # Should be ~0.92

tree_ = dt.tree_
def export_tree(node):
    if tree_.feature[node] != -2:
        return {
            "feature": feature_cols[tree_.feature[node]],
            "threshold": float(tree_.threshold[node]),
            "left": export_tree(tree_.children_left[node]),
            "right": export_tree(tree_.children_right[node])
        }
    else:
        class_id = np.argmax(tree_.value[node][0])
        return {"class": str(levels[class_id])}

tree_json = export_tree(0)
with open('tree_rules.js', 'w') as f:
    f.write("const decisionTree = " + json.dumps(tree_json, indent=2) + ";\n")
    f.write("const experienceLevels = " + json.dumps([str(l) for l in levels]) + ";\n")
print("✅ tree_rules.js generated.")