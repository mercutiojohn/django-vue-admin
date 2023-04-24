<template>
  <el-button class="d2-mr btn-text can-hover" type="text" @click="handleShowHeader">
    <d2-icon name="bars" style="font-size: 16px;"/>
  </el-button>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'd2-header-size',
  data () {
    return {
      options: [
        { label: '默认', value: 'default' },
        { label: '中', value: 'medium' },
        { label: '小', value: 'small' },
        { label: '最小', value: 'mini' }
      ]
    }
  },
  computed: {
    ...mapState('d2admin/size', [
      'value'
    ])
  },
  methods: {
    ...mapActions('d2admin/menu', ['asideCollapseToggle', 'showHeaderToggle']),
    /**
     * 接收点击切换顶栏的按钮
     */
    handleShowHeader () {
      this.showHeaderToggle()
    },
    iconName (name) {
      return name === this.value ? 'dot-circle-o' : 'circle-o'
    }
  }
}
</script>
