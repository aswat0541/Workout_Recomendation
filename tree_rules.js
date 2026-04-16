const decisionTree = {
  "feature": "Session_Duration (hours)",
  "threshold": 1.5049999952316284,
  "left": {
    "feature": "Workout_Frequency (days/week)",
    "threshold": 3.5,
    "left": {
      "feature": "Workout_Frequency (days/week)",
      "threshold": 2.5,
      "left": {
        "class": "1"
      },
      "right": {
        "feature": "Session_Duration (hours)",
        "threshold": 0.9850000143051147,
        "left": {
          "class": "1"
        },
        "right": {
          "feature": "HR_Burn_Ratio",
          "threshold": 5.132963418960571,
          "left": {
            "feature": "Water_Intake (liters)",
            "threshold": 1.6500000357627869,
            "left": {
              "feature": "Avg_BPM",
              "threshold": 120.5,
              "left": {
                "class": "2"
              },
              "right": {
                "class": "1"
              }
            },
            "right": {
              "feature": "HR_Burn_Ratio",
              "threshold": 4.794785976409912,
              "left": {
                "feature": "Resting_BPM",
                "threshold": 54.5,
                "left": {
                  "class": "2"
                },
                "right": {
                  "feature": "Max_BPM",
                  "threshold": 193.5,
                  "left": {
                    "feature": "Session_Duration (hours)",
                    "threshold": 1.0549999475479126,
                    "left": {
                      "feature": "HR_Burn_Ratio",
                      "threshold": 4.6335227489471436,
                      "left": {
                        "feature": "Age",
                        "threshold": 19.5,
                        "left": {
                          "class": "1"
                        },
                        "right": {
                          "feature": "Max_BPM",
                          "threshold": 190.5,
                          "left": {
                            "class": "2"
                          },
                          "right": {
                            "feature": "Gender_Code",
                            "threshold": 0.5,
                            "left": {
                              "class": "2"
                            },
                            "right": {
                              "class": "1"
                            }
                          }
                        }
                      },
                      "right": {
                        "class": "1"
                      }
                    },
                    "right": {
                      "feature": "Max_BPM",
                      "threshold": 178.5,
                      "left": {
                        "feature": "BMI",
                        "threshold": 29.84000015258789,
                        "left": {
                          "feature": "Calories_Burned",
                          "threshold": 709.5,
                          "left": {
                            "feature": "Water_Intake (liters)",
                            "threshold": 2.5,
                            "left": {
                              "class": "1"
                            },
                            "right": {
                              "class": "2"
                            }
                          },
                          "right": {
                            "feature": "Water_Intake (liters)",
                            "threshold": 3.149999976158142,
                            "left": {
                              "class": "2"
                            },
                            "right": {
                              "class": "1"
                            }
                          }
                        },
                        "right": {
                          "class": "1"
                        }
                      },
                      "right": {
                        "feature": "HR_Burn_Ratio",
                        "threshold": 4.696532964706421,
                        "left": {
                          "feature": "Avg_BPM",
                          "threshold": 128.0,
                          "left": {
                            "feature": "Avg_BPM",
                            "threshold": 124.0,
                            "left": {
                              "class": "1"
                            },
                            "right": {
                              "class": "2"
                            }
                          },
                          "right": {
                            "class": "1"
                          }
                        },
                        "right": {
                          "class": "2"
                        }
                      }
                    }
                  },
                  "right": {
                    "feature": "Avg_BPM",
                    "threshold": 157.5,
                    "left": {
                      "feature": "Session_Duration (hours)",
                      "threshold": 1.4399999976158142,
                      "left": {
                        "class": "2"
                      },
                      "right": {
                        "class": "1"
                      }
                    },
                    "right": {
                      "feature": "Resting_BPM",
                      "threshold": 67.0,
                      "left": {
                        "class": "1"
                      },
                      "right": {
                        "class": "2"
                      }
                    }
                  }
                }
              },
              "right": {
                "feature": "BMI",
                "threshold": 29.399999618530273,
                "left": {
                  "feature": "Calories_Burned",
                  "threshold": 882.0,
                  "left": {
                    "feature": "Calories_Burned",
                    "threshold": 858.5,
                    "left": {
                      "feature": "Height (m)",
                      "threshold": 1.875,
                      "left": {
                        "feature": "HR_Burn_Ratio",
                        "threshold": 5.039120674133301,
                        "left": {
                          "class": "1"
                        },
                        "right": {
                          "feature": "HR_Burn_Ratio",
                          "threshold": 5.102409601211548,
                          "left": {
                            "class": "2"
                          },
                          "right": {
                            "class": "1"
                          }
                        }
                      },
                      "right": {
                        "class": "2"
                      }
                    },
                    "right": {
                      "class": "2"
                    }
                  },
                  "right": {
                    "class": "1"
                  }
                },
                "right": {
                  "class": "2"
                }
              }
            }
          },
          "right": {
            "feature": "Height (m)",
            "threshold": 1.6549999713897705,
            "left": {
              "feature": "Calories_Burned",
              "threshold": 1154.5,
              "left": {
                "feature": "Weight (kg)",
                "threshold": 56.30000114440918,
                "left": {
                  "feature": "Weight (kg)",
                  "threshold": 52.79999923706055,
                  "left": {
                    "class": "2"
                  },
                  "right": {
                    "feature": "Session_Duration (hours)",
                    "threshold": 1.35999995470047,
                    "left": {
                      "class": "1"
                    },
                    "right": {
                      "class": "1"
                    }
                  }
                },
                "right": {
                  "class": "2"
                }
              },
              "right": {
                "class": "1"
              }
            },
            "right": {
              "feature": "Weight (kg)",
              "threshold": 58.70000076293945,
              "left": {
                "feature": "Calories_Burned",
                "threshold": 938.5,
                "left": {
                  "feature": "Gender_Code",
                  "threshold": 0.5,
                  "left": {
                    "class": "1"
                  },
                  "right": {
                    "class": "2"
                  }
                },
                "right": {
                  "class": "2"
                }
              },
              "right": {
                "feature": "Fat_Percentage",
                "threshold": 20.75,
                "left": {
                  "class": "2"
                },
                "right": {
                  "feature": "Age",
                  "threshold": 20.5,
                  "left": {
                    "class": "2"
                  },
                  "right": {
                    "feature": "Resting_BPM",
                    "threshold": 63.5,
                    "left": {
                      "feature": "Fat_Percentage",
                      "threshold": 25.100000381469727,
                      "left": {
                        "feature": "HR_Burn_Ratio",
                        "threshold": 6.556883335113525,
                        "left": {
                          "class": "1"
                        },
                        "right": {
                          "class": "2"
                        }
                      },
                      "right": {
                        "feature": "Fat_Percentage",
                        "threshold": 26.90000057220459,
                        "left": {
                          "feature": "Avg_BPM",
                          "threshold": 132.0,
                          "left": {
                            "class": "1"
                          },
                          "right": {
                            "class": "2"
                          }
                        },
                        "right": {
                          "feature": "Height (m)",
                          "threshold": 1.6949999928474426,
                          "left": {
                            "class": "2"
                          },
                          "right": {
                            "feature": "Age",
                            "threshold": 47.5,
                            "left": {
                              "feature": "BMI",
                              "threshold": 33.45000076293945,
                              "left": {
                                "feature": "HR_Burn_Ratio",
                                "threshold": 5.227875709533691,
                                "left": {
                                  "class": "1"
                                },
                                "right": {
                                  "class": "1"
                                }
                              },
                              "right": {
                                "feature": "Session_Duration (hours)",
                                "threshold": 1.3600000143051147,
                                "left": {
                                  "class": "1"
                                },
                                "right": {
                                  "class": "2"
                                }
                              }
                            },
                            "right": {
                              "class": "2"
                            }
                          }
                        }
                      }
                    },
                    "right": {
                      "feature": "Weight (kg)",
                      "threshold": 67.44999694824219,
                      "left": {
                        "feature": "Age",
                        "threshold": 48.0,
                        "left": {
                          "class": "1"
                        },
                        "right": {
                          "class": "2"
                        }
                      },
                      "right": {
                        "feature": "Weight (kg)",
                        "threshold": 90.45000076293945,
                        "left": {
                          "class": "2"
                        },
                        "right": {
                          "feature": "Calories_Burned",
                          "threshold": 1103.5,
                          "left": {
                            "feature": "Age",
                            "threshold": 35.5,
                            "left": {
                              "class": "2"
                            },
                            "right": {
                              "class": "1"
                            }
                          },
                          "right": {
                            "class": "2"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "right": {
      "feature": "Fat_Percentage",
      "threshold": 20.100000381469727,
      "left": {
        "class": "2"
      },
      "right": {
        "class": "2"
      }
    }
  },
  "right": {
    "feature": "Session_Duration (hours)",
    "threshold": 1.5149999856948853,
    "left": {
      "class": "3"
    },
    "right": {
      "class": "3"
    }
  }
};
const experienceLevels = ["1", "2", "3"];
