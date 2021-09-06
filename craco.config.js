const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@api": path.resolve(__dirname, "src/api"),
      "@acemble": path.resolve(__dirname, "src/acemble"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@config": path.resolve(__dirname, "src/config"),
      "@apis": path.resolve(__dirname, "src/apis"),
    },
  },
};
