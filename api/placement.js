// export default async function handler(req, res) {
//   const { id } = req.query;

//   // YOUR APPS SCRIPT URL
//   const scriptURL =
//     `https://script.google.com/macros/s/AKfycby0h2aw7pUCCCXF40RVTIST3s68yTROE_I7v-f2JDMec6boV-ZH9-Tvdzb9eIMb0E69NQ/exec?id=${id}`;

//   try {
//     const response = await fetch(scriptURL);
//     const text = await response.text(); // Apps Script returns text JSON

//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//     return res.status(200).json(JSON.parse(text));
//   } catch (error) {
//     return res.status(500).json({
//       valid: false,
//       message: "Proxy Error",
//       error: error.message,
//     });
//   }
// }
