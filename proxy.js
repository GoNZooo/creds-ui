const PROXY_CONFIG = {
  "/creds": {
    "target": "http://localhost:4002/",
    "secure": false,
    "logLevel": "debug",
    "pathRewrite": {
      "^/creds": "",
    },
  },
};

module.exports = PROXY_CONFIG;
