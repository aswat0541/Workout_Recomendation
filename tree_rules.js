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
        "feature": "Water_Intake (liters)",
        "threshold": 3.0,
        "left": {
          "class": "Yoga"
        },
        "right": {
          "class": "HIIT"
        }
      },
      "right": {
        "feature": "Workout_Frequency (days/week)",
        "threshold": 3.5,
        "left": {
          "feature": "Fat_Percentage",
          "threshold": 20.300000190734863,
          "left": {
            "class": "Cardio"
          },
          "right": {
            "class": "Cardio"
          }
        },
        "right": {
          "class": "Cardio"
        }
      }
    },
    "right": {
      "feature": "Height (m)",
      "threshold": 1.9850000143051147,
      "left": {
        "feature": "Age",
        "threshold": 23.5,
        "left": {
          "feature": "Water_Intake (liters)",
          "threshold": 2.549999952316284,
          "left": {
            "feature": "Resting_BPM",
            "threshold": 53.5,
            "left": {
              "class": "Strength"
            },
            "right": {
              "class": "Strength"
            }
          },
          "right": {
            "feature": "Height (m)",
            "threshold": 1.6650000214576721,
            "left": {
              "class": "Cardio"
            },
            "right": {
              "feature": "Session_Duration (hours)",
              "threshold": 1.0449999570846558,
              "left": {
                "feature": "BMI",
                "threshold": 35.94499969482422,
                "left": {
                  "class": "Strength"
                },
                "right": {
                  "class": "HIIT"
                }
              },
              "right": {
                "class": "HIIT"
              }
            }
          }
        },
        "right": {
          "feature": "Avg_BPM",
          "threshold": 166.5,
          "left": {
            "feature": "Height (m)",
            "threshold": 1.8350000381469727,
            "left": {
              "feature": "Max_BPM",
              "threshold": 161.5,
              "left": {
                "feature": "Fat_Percentage",
                "threshold": 27.5,
                "left": {
                  "class": "Strength"
                },
                "right": {
                  "class": "Cardio"
                }
              },
              "right": {
                "feature": "Fat_Percentage",
                "threshold": 34.64999961853027,
                "left": {
                  "feature": "BMI",
                  "threshold": 42.06999969482422,
                  "left": {
                    "feature": "Avg_BPM",
                    "threshold": 159.0,
                    "left": {
                      "class": "Strength"
                    },
                    "right": {
                      "class": "Strength"
                    }
                  },
                  "right": {
                    "class": "Strength"
                  }
                },
                "right": {
                  "feature": "Age",
                  "threshold": 37.0,
                  "left": {
                    "class": "Strength"
                  },
                  "right": {
                    "class": "Strength"
                  }
                }
              }
            },
            "right": {
              "feature": "Fat_Percentage",
              "threshold": 22.75,
              "left": {
                "class": "Yoga"
              },
              "right": {
                "feature": "Height (m)",
                "threshold": 1.8550000190734863,
                "left": {
                  "feature": "Water_Intake (liters)",
                  "threshold": 3.149999976158142,
                  "left": {
                    "class": "Cardio"
                  },
                  "right": {
                    "class": "Strength"
                  }
                },
                "right": {
                  "feature": "Water_Intake (liters)",
                  "threshold": 3.549999952316284,
                  "left": {
                    "class": "Strength"
                  },
                  "right": {
                    "feature": "Age",
                    "threshold": 42.0,
                    "left": {
                      "class": "Strength"
                    },
                    "right": {
                      "class": "HIIT"
                    }
                  }
                }
              }
            }
          },
          "right": {
            "feature": "Weight (kg)",
            "threshold": 93.5,
            "left": {
              "feature": "Age",
              "threshold": 31.5,
              "left": {
                "class": "Strength"
              },
              "right": {
                "class": "Yoga"
              }
            },
            "right": {
              "class": "Strength"
            }
          }
        }
      },
      "right": {
        "class": "Cardio"
      }
    }
  },
  "right": {
    "feature": "HR_Burn_Ratio",
    "threshold": 4.638866901397705,
    "left": {
      "class": "HIIT"
    },
    "right": {
      "feature": "Session_Duration (hours)",
      "threshold": 1.9350000023841858,
      "left": {
        "feature": "Max_BPM",
        "threshold": 160.5,
        "left": {
          "class": "Cardio"
        },
        "right": {
          "feature": "Weight (kg)",
          "threshold": 125.3499984741211,
          "left": {
            "feature": "Session_Duration (hours)",
            "threshold": 1.0850000381469727,
            "left": {
              "class": "HIIT"
            },
            "right": {
              "feature": "BMI",
              "threshold": 14.730000019073486,
              "left": {
                "class": "HIIT"
              },
              "right": {
                "feature": "Water_Intake (liters)",
                "threshold": 3.549999952316284,
                "left": {
                  "feature": "Calories_Burned",
                  "threshold": 1554.5,
                  "left": {
                    "feature": "Height (m)",
                    "threshold": 1.774999976158142,
                    "left": {
                      "class": "HIIT"
                    },
                    "right": {
                      "class": "HIIT"
                    }
                  },
                  "right": {
                    "feature": "Fat_Percentage",
                    "threshold": 10.5,
                    "left": {
                      "class": "Cardio"
                    },
                    "right": {
                      "class": "HIIT"
                    }
                  }
                },
                "right": {
                  "feature": "Avg_BPM",
                  "threshold": 155.5,
                  "left": {
                    "class": "HIIT"
                  },
                  "right": {
                    "class": "Cardio"
                  }
                }
              }
            }
          },
          "right": {
            "feature": "Max_BPM",
            "threshold": 177.0,
            "left": {
              "class": "HIIT"
            },
            "right": {
              "class": "HIIT"
            }
          }
        }
      },
      "right": {
        "feature": "Weight (kg)",
        "threshold": 59.69999885559082,
        "left": {
          "class": "Strength"
        },
        "right": {
          "class": "HIIT"
        }
      }
    }
  }
};
const workoutTypes = ["Cardio", "HIIT", "Strength", "Yoga"];
