import userModel from "../Database/Modal.js";

const user = async (req, res) => {
  const { useremail } = req.params;
  const user = await userModel.findOne({ useremail: useremail });
  if (!user)
    return res
      .status(404)
      .json({ status: false, message: "user does not exists" });
  let { nutrition, opinion, username } = user;
  let values = Object.values(nutrition);
  values = values.filter((value) => value != "Not Mentioned");
  const falseattempted = values.filter((value) => value == "false");
  const trueattempted = values.filter((value) => value == "true");
  opinion = opinion ? opinion : "Not Mentioned";
  let correctanswers = {
    carbohydrates: "true",
    proteins: "false",
    fats: "false",
    calcium: "false",
    fiber: "false",
    sodium_chloride: "true",
    sucralose: "false",
    sucrose: "true",
    acesulfame_potassium: "false",
    monosodium_glutamate: "true",
    corn_syrup: "true",
    dextrose: "false",
    mannitol: "true",
    honey: "true",
  };
  let descriptions = {
    carbohydrates:
      "This statement is True. Carbohydrates are a primary source of energy, especially during high-intensity exercise, as they are quickly converted into glucose, which muscles use for fuel.",
    proteins:
      "The statement is False. While proteins do contribute calories to the diet, they are not inherently responsible for weight gain. In fact, proteins can aid in weight management by promoting feelings of fullness and supporting muscle growth and repair, which can increase metabolic rate.",
    fats: "The statement is False. While fats are calorie-dense, not all fats automatically lead to weight gain. Consuming healthy fats in moderation, such as those found in avocados, nuts, and olive oil, can actually support overall health and may not necessarily lead to weight gain if consumed as part of a balanced diet.",
    calcium:
      "The statement is False. While calcium is crucial for bone and teeth health, other factors such as vitamin D, magnesium, and overall diet also play significant roles. Simply consuming foods high in calcium without considering these other factors may not necessarily lead to stronger bones and teeth.",
    fiber:
      "The statement is False. While it might seem counterintuitive, consuming foods high in fiber actually helps prevent constipation by adding bulk to the stool and promoting regular bowel movements.",
    sodium_chloride:
      "The statement is True. Sodium Chloride, or table salt, is indeed essential for maintaining proper fluid balance in the body. It helps regulate blood pressure, supports nerve function, and aids in muscle contractions.",
    sucralose:
      "The statement is False. Sucralose, commonly listed as E955 in food labels, is an artificial sweetener derived from sucrose through a chemical process that substitutes three chlorine atoms for three hydroxyl groups on the sugar molecule.",
    sucrose:
      "The statement is True. Sucrose, or table sugar, is indeed a naturally occurring carbohydrate found in various plants, including sugarcane, sugar beets, fruits, and some vegetables.",
    acesulfame_potassium:
      "The statement is False. Acesulfame Potassium, often abbreviated as Acesulfame-K, is an artificial sweetener that is synthetically produced and not derived from plant sources.",
    monosodium_glutamate:
      "The statement is True. Despite its controversial reputation, MSG is a naturally occurring compound in the human body, involved in various physiological processes such as neurotransmission and metabolism.",
    corn_syrup:
      "The statement is True. Corn syrup is indeed derived from the starch of corn kernels through a process called enzymatic hydrolysis, where enzymes break down the starch into simpler sugars, primarily glucose.",
    dextrose:
      "The statement is False. Dextrose, also known as glucose, is a type of sugar that is commonly derived from plant sources, particularly cornstarch.",
    mannitol:
      "The statement is True. Mannitol does occur naturally in small amounts in pineapples and olives.",
    honey:
      "The statement is True. Honey is indeed a natural sweetener produced by bees from flower nectar and has been traditionally used for its various medicinal properties, including its soothing effects on sore throats and coughs.",
  };
  const {
    carbohydrates,
    proteins,
    fats,
    calcium,
    fiber,
    sodium_chloride,
    sucralose,
    sucrose,
    acesulfame_potassium,
    monosodium_glutamate,
    corn_syrup,
    dextrose,
    mannitol,
    honey,
  } = nutrition;
  let answers = [];
  if (carbohydrates != undefined) {
    answers.push({
      title: "Carbohydrates",
      correct: correctanswers.carbohydrates,
      given: carbohydrates,
      description: descriptions.carbohydrates,
    });
  }
  if (proteins != undefined && proteins!="Not Mentioned") {
    answers.push({
      title: "Proteins",
      correct: correctanswers.proteins,
      given: proteins,
      description: descriptions.proteins,
    });
  }
  if (fats != undefined) {
    answers.push({
      title: "Fats",
      correct: correctanswers.fats,
      given: fats,
      description: descriptions.fats,
    });
  }
  if (calcium != undefined) {
    answers.push({
      title: "Calcium",
      correct: correctanswers.calcium,
      given: calcium,
      description: descriptions.calcium,
    });
  }
  if (fiber != undefined) {
    answers.push({
      title: "Fiber",
      correct: correctanswers.fiber,
      given: fiber,
      description: descriptions.fiber,
    });
  }
  if (sodium_chloride != undefined) {
    answers.push({
      title: "Sodium Chloride",
      correct: correctanswers.sodium_chloride,
      given: sodium_chloride,
      description: descriptions.sodium_chloride,
    });
  }
  if (sucralose != undefined) {
    answers.push({
      title: "Sucralose",
      correct: correctanswers.sucralose,
      given: sucralose,
      description: descriptions.sucralose,
    });
  }
  if (sucrose != undefined) {
    answers.push({
      title: "Sucrose",
      correct: correctanswers.sucrose,
      given: sucrose,
      description: descriptions.sucrose,
    });
  }
  if (acesulfame_potassium != undefined) {
    answers.push({
      title: "Acesulfame Potassium",
      correct: correctanswers.acesulfame_potassium,
      given: acesulfame_potassium,
      description: descriptions.acesulfame_potassium,
    });
  }
  if (monosodium_glutamate != undefined) {
    answers.push({
      title: "Monosodium Glutamate",
      correct: correctanswers.monosodium_glutamate,
      given: monosodium_glutamate,
      description: descriptions.monosodium_glutamate,
    });
  }
  if (corn_syrup != undefined) {
    answers.push({
      title: "Corn Syrup",
      correct: correctanswers.corn_syrup,
      given: corn_syrup,
      description: descriptions.corn_syrup,
    });
  }
  if (dextrose != undefined) {
    answers.push({
      title: "Dextrose",
      correct: correctanswers.dextrose,
      given: dextrose,
      description: descriptions.dextrose,
    });
  }
  if (mannitol != undefined) {
    answers.push({
      title: "Mannitol",
      correct: correctanswers.mannitol,
      given: mannitol,
      description: descriptions.mannitol,
    });
  }
  if (honey != undefined) {
    answers.push({
      title: "Honey",
      correct: correctanswers.honey,
      given: honey,
      description: descriptions.honey,
    });
  }
  res.status(200).json({
    total: 14,
    username: username,
    useremail: useremail,
    attempted: values.length,
    falseattempted: falseattempted.length,
    trueattempted: trueattempted.length,
    answers: answers,
    opinion: opinion
  });
};

export default user;
