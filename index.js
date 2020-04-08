var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-west-2" });
var request = require("request");
var cheerio = require("cheerio");
const notifier = require("node-notifier");
//let status = false;

const checkInventory = () => {
  //Paste the url for the product you want
  const url =
    // "https://www.bestbuy.ca/en-ca/product/kitchenaid-artisan-design-tilt-head-stand-mixer-5qt-325-watt-azure-blue/12917081";
    "https://www.bestbuy.ca/en-ca/product/nintendo-switch-console-with-neon-red-blue-joy-con/13817625";
  //Paste the cookie of your browser when you manually check website with a browser
  const cookie = "";

  const req = {
    url: url,
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "axios/0.18.0",
      Cookie: cookie
    }
  };
  request(req, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    console.log("Status code: " + response.statusCode);

    // Object
    notifier.notify({
      title: "Switch!",
      message: "BACK IN STOCK!"
    });

    const $ = cheerio.load(body);
    let status = $(".addToCartContainer_2uzan form button").is(":disabled");

    console.log("Out of Stock: ", status);
    console.log("time: " + new Date().toString() + "\n");
    if (!status) {
      console.log("BUY NOWWW!!!!!!!!!!!!!!!!!!!!!!!!!");
      notifier.notify("Message");
    }
  });
};
console.log("Script starting...");
setInterval(checkInventory, 30000);
