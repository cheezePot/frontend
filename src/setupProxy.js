import dotenv from "dotenv";
const { createProxyMiddleware } = require("http-proxy-middleware");
dotenv.config();

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      //도메인 api로 호출
      target: `${process.env.REACT_APP_BACKEND_URL}`, //통신할 서버의 도메인주소
      changeOrigin: true,
    })
  );
};
