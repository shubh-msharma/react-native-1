export const sliderImage = [
    "../../../assets/fitnessAppAssets/images/slide1.png",
    "../../../assets/fitnessAppAssets/images/slide2.png",
    "../../../assets/fitnessAppAssets/images/slide3.png",
    "../../../assets/fitnessAppAssets/images/slide4.png",
    "../../../assets/fitnessAppAssets/images/slide5.png",
]
export const sliderImageReq = [
    require("../../../assets/fitnessAppAssets/images/slide1.png"),
    require("../../../assets/fitnessAppAssets/images/slide2.png"),
    require("../../../assets/fitnessAppAssets/images/slide3.png"),
    require("../../../assets/fitnessAppAssets/images/slide4.png"),
    require("../../../assets/fitnessAppAssets/images/slide5.png"),
]

  const exercisesDbParts = new Array(
        "back",
      "cardio",
      "chest",
      "lower arms",
      "lower legs",
      "neck",
      "shoulders",
      "upper arms",
      "upper legs",
      "waist").map((item,index)=>{
          return {
                imageUrl: require("../../../assets/fitnessAppAssets/images/shoulders.png"),
                bodyPart:item
          }
  })

export const bodyPartWithImage = {
    "bodyParts": [
      {
        "bodyPart": "Head and Neck",
        "category": "Upper",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Chest",
        "category": "Upper",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Shoulders",
        "category": "Upper",
        "imageUrl": require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Upper Back",
        "category": "Upper",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Middle Back",
        "category": "Upper",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Lower Back",
        "category": "Lower",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Biceps",
        "category": "Upper",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Triceps",
        "category": "Upper",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Forearms",
        "category": "Upper",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Abs (Abdominals)",
        "category": "Core",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      {
        "bodyPart": "Lower Abs",
        "category": "Core",
        "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      },
      // {
      //   "bodyPart": "Upper Abs",
      //   "category": "Core",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Core",
      //   "category": "Core",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Lumbar Muscles",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Hip Flexors",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Pelvic Floor Muscles",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Quadriceps",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Hamstrings",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Glutes",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Adductors",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Abductors",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Hip Muscles",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Calves",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Hips",
      //   "category": "Lower",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Knees",
      //   "category": "Functional Movement",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Ankles",
      //   "category": "Functional Movement",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Cardiovascular System (Heart, Lungs)",
      //   "category": "Cardiovascular",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
      // {
      //   "bodyPart": "Full Body",
      //   "category": "Total Body",
      //   "imageUrl":  require("../../../assets/fitnessAppAssets/images/shoulders.png")
      // },
    ]
  }
  
  const parts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist"
  ]


  export const exportExercisesList = () => {
    console.log("returning promise")
    return new Promise((resolve,reject)=>{
      if(exercisesDbParts){
        resolve(exercisesDbParts)
      }else{
        reject([])
      }
    })
  }

  // export const exercisesDbParts = [{"bodyPart": "back", "imageUrl": 12}, {"bodyPart": "cardio", "imageUrl": 12}, {"bodyPart": "chest", "imageUrl": 12}, {"bodyPart": "lower arms", "imageUrl": 12}, {"bodyPart": "lower legs", "imageUrl": 12}, {"bodyPart": "neck", "imageUrl": 12}, {"bodyPart": "shoulders", "imageUrl": 12}, {"bodyPart": "upper arms", "imageUrl": 12}, {"bodyPart": "upper legs", "imageUrl": 12}, {"bodyPart": "waist", "imageUrl": 12}]

  export const tempData = [{"bodyPart": "back", "equipment": "cable", "gifUrl": "https://v2.exercisedb.io/image/PnNUuJ7UHu-Phc", "id": "0007", "instructions": ["Sit on the cable machine with your back straight and feet flat on the ground.", "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.", "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.", "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.", "Repeat for the desired number of repetitions."], "name": "alternate lateral pulldown", "secondaryMuscles": ["biceps", "rhomboids"], "target": "lats"}, {"bodyPart": "back", "equipment": "body weight", "gifUrl": "https://v2.exercisedb.io/image/yeTvGyEDjdVemF", "id": "3293", "instructions": ["Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.", "Engage your core and pull your shoulder blades down and back.", "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.", "Continue pulling until your chin is above the bar and your bent arm is fully flexed.", "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.", "Alternate sides with each repetition."], "name": "archer pull up", "secondaryMuscles": ["biceps", "forearms"], "target": "lats"}, {"bodyPart": "back", "equipment": "leverage machine", "gifUrl": "https://v2.exercisedb.io/image/-4en8gCYbCHOFu", "id": "0015", "instructions": ["Adjust the machine to your desired weight and height.", "Place your hands on the parallel bars with a close grip, palms facing each other.", "Hang from the bars with your arms fully extended and your feet off the ground.", "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.", "Continue pulling until your chin is above the bars.", "Pause for a moment at the top, then slowly lower your body back down to the starting position.", "Repeat for the desired number of repetitions."], "name": "assisted parallel close grip pull-up", "secondaryMuscles": ["biceps", "forearms"], "target": "lats"}, {"bodyPart": "back", "equipment": "leverage machine", "gifUrl": "https://v2.exercisedb.io/image/4siBwFmLJbBTJ1", "id": "0017", "instructions": ["Adjust the machine to your desired weight and height settings.", "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.", "Hang with your arms fully extended and your feet off the ground.", "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.", "Continue pulling until your chin is above the handles.", "Pause for a moment at the top, then slowly lower your body back down to the starting position.", "Repeat for the desired number of repetitions."], "name": "assisted pull-up", "secondaryMuscles": ["biceps", "forearms"], "target": "lats"}, {"bodyPart": "back", "equipment": "leverage machine", "gifUrl": "https://v2.exercisedb.io/image/TGFJK5oFgDXNlF", "id": "1431", "instructions": ["Adjust the machine to your desired assistance level.", "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.", "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.", "Pull your body up by flexing your elbows and driving your elbows down towards your sides.", "Continue pulling until your chin is above the bar.", "Pause for a moment at the top, then slowly lower your body back down to the starting position.", "Repeat for the desired number of repetitions."], "name": "assisted standing chin-up", "secondaryMuscles": ["biceps", "forearms"], "target": "lats"}, {"bodyPart": "back", "equipment": "leverage machine", "gifUrl": "https://v2.exercisedb.io/image/IdaSPYRQ4Qy5Kh", "id": "1432", "instructions": ["Adjust the machine to your desired weight and height settings.", "Stand facing the machine with your feet shoulder-width apart.", "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.", "Engage your lats and biceps, and pull yourself up towards the handles.", "Pause for a moment at the top, squeezing your back muscles.", "Slowly lower yourself back down to the starting position.", "Repeat for the desired number of repetitions."], "name": "assisted standing pull-up", "secondaryMuscles": ["biceps", "forearms"], "target": "lats"}, {"bodyPart": "back", "equipment": "stability ball", "gifUrl": "https://v2.exercisedb.io/image/oL5BhK2qnTBTgG", "id": "1314", "instructions": ["Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall or other stable surface.", "Position your hands behind your head or crossed over your chest.", "Engage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.", "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.", "Repeat for the desired number of repetitions."], "name": "back extension on exercise ball", "secondaryMuscles": ["glutes", "hamstrings"], "target": "spine"}, {"bodyPart": "back", "equipment": "body weight", "gifUrl": "https://v2.exercisedb.io/image/-b8B0JA5UT-Oal", "id": "3297", "instructions": ["Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.", "Engage your core and pull your shoulder blades down and back.", "Bend your knees and tuck them towards your chest.", "Slowly lift your legs up, keeping them straight, until your body is parallel to the ground.", "Hold this position for a few seconds, then slowly lower your legs back down to the starting position.", "Repeat for the desired number of repetitions."], "name": "back lever", "secondaryMuscles": ["biceps", "forearms", "core"], "target": "upper back"}, {"bodyPart": "back", "equipment": "body weight", "gifUrl": "https://v2.exercisedb.io/image/7MrRlYny-P-GSD", "id": "1405", "instructions": ["Stand tall with your feet shoulder-width apart.", "Extend your arms straight out in front of you, parallel to the ground.", "Cross your arms in front of your body, with your right arm over your left arm.", "Interlock your fingers and rotate your palms away from your body.", "Slowly raise your arms up and away from your body, feeling a stretch in your back and chest.", "Hold the stretch for 15-30 seconds, then release.", "Repeat on the opposite side."], "name": "back pec stretch", "secondaryMuscles": ["shoulders", "chest"], "target": "lats"}, {"bodyPart": "back", "equipment": "band", "gifUrl": "https://v2.exercisedb.io/image/Ag1Qi1pyou8tv-", "id": "0970", "instructions": ["Attach the band to a pull-up bar or sturdy anchor point.", "Step onto the band and grip the bar with your palms facing away from you, hands slightly wider than shoulder-width apart.", "Hang with your arms fully extended, keeping your core engaged and your shoulders down and back.", "Pull your body up towards the bar by squeezing your shoulder blades together and driving your elbows down towards your hips.", "Continue pulling until your chin is above the bar, then slowly lower yourself back down to the starting position.", "Repeat for the desired number of repetitions."], "name": "band assisted pull-up", "secondaryMuscles": ["biceps", "forearms"], "target": "lats"}]
