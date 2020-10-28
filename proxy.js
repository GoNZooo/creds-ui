const PROXY_CONFIG = {
  "/api": {
    "target": "http://localhost:4002",
    "secure": false,
    // "bypass": function(req, res, proxyOptions) {
    //   console.log({ req });
    //   console.log({ res });
    //   // req.headers["X-Custom-Header"] = "yes";
    //
    //   return "/index.html";
    // },
    "pathRewrite": {
      "^/api": ""
    }
  },
};

module.exports = PROXY_CONFIG;
