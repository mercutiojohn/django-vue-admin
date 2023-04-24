export default {
  // 快捷键
  // 支持快捷键 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc'
    }
  },
  // 侧边栏默认配置
  menu: {
    asideCollapse: false,
    asideTransition: true,
    showHeader: false
  },
  // 在读取持久化数据失败时默认页面
  page: {
    opened: [
      {
        name: 'index',
        fullPath: '/index',
        meta: {
          title: '控制台',
          auth: false
        }
      }
    ]
  },
  // 菜单搜索
  search: {
    enable: true
  },
  // 注册的主题
  theme: {
    list: [
      {
        title: 'Notion',
        name: 'notion',
        preview: 'image/theme/round/preview@2x.png'
      },
      {
        title: 'd2admin 经典',
        name: 'd2',
        preview: 'image/theme/d2/preview@2x.png'
      },
      {
        title: 'Chester',
        name: 'chester',
        preview: 'image/theme/chester/preview@2x.jpg'
      },
      {
        title: 'Element',
        name: 'element',
        preview: 'image/theme/element/preview@2x.jpg'
      },
      // {
      //   title: '紫罗兰',
      //   name: 'violet',
      //   preview: 'image/theme/violet/preview@2x.jpg'
      // },
      // {
      //   title: '简约线条',
      //   name: 'line',
      //   backgroundImage: 'image/theme/line/bg.jpg',
      //   preview: 'image/theme/line/preview@2x.jpg'
      // },
      // {
      //   title: '流星',
      //   name: 'star',
      //   backgroundImage: 'image/theme/star/bg.jpg',
      //   preview: 'image/theme/star/preview@2x.jpg'
      // },
      // {
      //   title: 'Tomorrow Night Blue (vsCode)',
      //   name: 'tomorrow-night-blue',
      //   preview: 'image/theme/tomorrow-night-blue/preview@2x.jpg'
      // },
      {
        title: '简约',
        name: 'simple',
        preview: 'image/theme/simple/preview@2x.png'
      },
      {
        title: '商务',
        name: 'nova',
        preview: 'image/theme/nova/preview@2x.png'
      },
      {
        title: '控制台',
        name: 'rypanelstyle',
        preview: 'image/theme/nova/preview@2x.png'
      },
      {
        title: '活力',
        name: 'zen',
        preview: 'image/theme/zen/preview@2x.png'
      },
      {
        title: '亲和力',
        name: 'round',
        preview: 'image/theme/round/preview@2x.png'
      }
    ]
  },
  // 是否默认开启页面切换动画
  transition: {
    active: true
  }
}
