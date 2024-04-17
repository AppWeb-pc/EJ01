<script>
export default {
  name: 'toolbar-content',
};
</script>

<template>
  <pv-toolbar class="toolbar">
    <template #start></template>
    <template #center>
      <h1>Harry Potter Fan Store</h1>
    </template>
    <template #end></template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar {
  background-color: #000000;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
