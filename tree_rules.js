const decisionTree = {
  "feature": "Calories_Burned",
  "threshold": 899.0,
  "left": {
    "feature": "Calories_Burned",
    "threshold": 600.5,
    "left": {
      "feature": "Calories_Burned",
      "threshold": 398.5,
      "left": {
        "class": "Yoga"
      },
      "right": {
        "class": "Cardio"
      }
    },
    "right": {
      "class": "Strength"
    }
  },
  "right": {
    "class": "HIIT"
  }
};
const workoutTypes = ["Cardio", "HIIT", "Strength", "Yoga"];
