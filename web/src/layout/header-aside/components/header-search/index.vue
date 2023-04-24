<template>
  <el-button class="d2-mr btn-text can-hover" type="text" @click="handleSearchClick">
    <d2-icon name="search" style="font-size: 18px;"/>
  </el-button>
</template>

<script>
import mixinSearch from '../../mixins/search'

export default {
  mixins: [mixinSearch],
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
