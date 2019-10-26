module.exports = {
  modules: ["bootstrap-vue/nuxt"],

  head: {
    titleTemplate: "%s - Lucid",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap"
      }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Meta description" }
    ]
  }
};
