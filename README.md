# 🏋️ Workout Experience Level Classifier + Recommender

## Problem
Users need to know their fitness level to choose safe and effective workouts. This system predicts experience level (Beginner/Intermediate/Advanced) from session data and recommends suitable exercises.

## Dataset
- 973 gym session records
- Features: Age, Gender, Weight, Height, BPMs, Duration, Calories, Fat%, Water intake, Frequency, BMI
- Target: Experience_Level (1,2,3)

## Models
- Best: Decision Tree (92% test accuracy)
- Deep Learning: 3‑layer NN with Dropout, BatchNorm, EarlyStopping

## Live Predictor
👉 [Try it here](https://aswat0541.github.io/Workout_recommendation/index.html)

