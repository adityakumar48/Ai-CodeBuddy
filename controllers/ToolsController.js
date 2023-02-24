const { OpenAIApi, Configuration } = require("openai");

// Config Files
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

// Article POST Route
exports.createArticleTool = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a 1000 words blog about ${prompt}`,
      temperature: 0.7,
      max_tokens: 3000,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0,
    });
    res.json(response.data.choices[0].text);
  } catch (err) {
    console.log(err);
  }
};

// Check Time Complexity POST Route

exports.checkTimeComplexity = async (req, res) => {
  try {
    const { code } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${code} \n\n The time complexity of this function is and explaination is: \n give it to me separate object values of time complexity and explaination \n give it to me separate object values of Space complexity and explaination`,
      temperature: 0.7,
      max_tokens: 3000,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0,
    });
    res.json(response.data.choices[0].text);
  } catch (err) {
    console.log(err);
  }
};

// Check Errors POST Route
exports.CheckErrors = async (req, res) => {
  try {
    const { code } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${code} \n\n if Code is Correct Then tell Either tell Error: \n give it to me separate object values of errors and explaination`,
      temperature: 0.7,
      max_tokens: 3000,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0,
    });
    res.json(response.data.choices[0].text);
  } catch (err) {
    console.log(err);
  }
};
