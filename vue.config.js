const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: "com.electron-demo2",
        productName: "electron-demo2",
        asar: true,
        win: {
          target: [
            {
              target: "nsis", // 安装应用
              arch: [
                "x64" // 即–arch=x64， 64位操作系统，使用本架构打包无法再32位操作系统中安装
              ]
            }
          ]
        },
        mac: {
          target: [
            {
              target: "dmg"
            }
          ]
        },
        nsis: {
          oneClick: false, // 一键安装
          perMachine: true, // 是否开启安装时权限限制（此电脑或当前用户）
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: "electron-demo" // 图标名称
        },
      },
    }
  },
})
