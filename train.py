import pandas as pd
import numpy as np
import json
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# -----------------------------
# 1. LOAD DATA
# -----------------------------
df = pd.read_csv('gym_data.csv')
df.columns = df.columns.str.strip()

# -----------------------------
# 2. FIX DATA (IMPORTANT STEP)
# -----------------------------
# Reassign workout type based on Calories_Burned

def assign_workout(cal):
    if cal < 400:
        return 'Yoga'
    elif cal < 600:
        return 'Cardio'
    elif cal < 900:
        return 'Strength'
    else:
        return 'HIIT'

df['Workout_Type'] = df['Calories_Burned'].apply(assign_workout)

# -----------------------------
# 3. TARGET & FEATURES
# -----------------------------
X = df.drop(columns=['Workout_Type'])
y = df['Workout_Type']

# Encode target
le = LabelEncoder()
y_enc = le.fit_transform(y)
workout_classes = le.classes_.tolist()

# -----------------------------
# 4. DATA CLEANING
# -----------------------------
X['Gender'] = X['Gender'].astype(str).str.strip().str.lower()
X['Gender_Code'] = X['Gender'].map({'male': 0, 'female': 1})

# -----------------------------
# 5. FEATURE ENGINEERING
# -----------------------------
X['BMI_Class'] = pd.cut(
    X['BMI'],
    bins=[0, 18.5, 24.9, 29.9, 100],
    labels=[0, 1, 2, 3]
).astype(int)

X['HR_Burn_Ratio'] = X['Calories_Burned'] / (X['Max_BPM'] + 1)

# -----------------------------
# 6. SELECT FEATURES
# -----------------------------
feature_cols = [
    'Age', 'Gender_Code', 'Weight (kg)', 'Height (m)',
    'Max_BPM', 'Avg_BPM', 'Resting_BPM',
    'Session_Duration (hours)', 'Calories_Burned',
    'Fat_Percentage', 'Water_Intake (liters)',
    'Workout_Frequency (days/week)', 'BMI',
    'BMI_Class', 'HR_Burn_Ratio'
]

X = X[feature_cols]

# Convert to numeric & clean
X = X.apply(pd.to_numeric, errors='coerce').fillna(0)

# -----------------------------
# 7. TRAIN-TEST SPLIT
# -----------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y_enc,
    test_size=0.2,
    random_state=42,
    stratify=y_enc
)

# -----------------------------
# 8. TRAIN MODEL
# -----------------------------
dt = DecisionTreeClassifier(max_depth=10, random_state=42)
dt.fit(X_train, y_train)

# -----------------------------
# 9. EVALUATE
# -----------------------------
y_pred = dt.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f"\n🔥 FINAL Accuracy: {accuracy:.4f}")

# -----------------------------
# 10. EXPORT TREE
# -----------------------------
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
        return {"class": workout_classes[class_id]}

tree_json = export_tree(0)

with open('tree_rules.js', 'w') as f:
    f.write("const decisionTree = " + json.dumps(tree_json, indent=2) + ";\n")
    f.write("const workoutTypes = " + json.dumps(workout_classes) + ";\n")

print("✅ tree_rules.js generated!")