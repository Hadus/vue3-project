const a = {
	css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve("src/assets/less/index.less")}";`,
        },
          javascriptEnabled: true,
      },
    },
  },
}