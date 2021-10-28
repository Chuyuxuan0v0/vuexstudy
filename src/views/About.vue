<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="abouts">
      <button @click="getsession">点击按钮显示</button>
      {{ datas }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: "这里显示session值",
    };
  },
  methods: {
    getsession() {
      this.datas = sessionStorage.getItem("testKey");
    },
  },
};
</script>
