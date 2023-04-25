const path = require("path");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [
                  tailwindcss(path.resolve(__dirname, "./tailwind.config.js")),
                  autoprefixer,
                ],
              },
            },
          },
        ],
        include: path.resolve(__dirname, "./src"),
      },
    ],
  },
};
