<template>
    <section class="v-proto"
    >
      <div class="v-proto__embed"
      >
        <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMjEwNGEzMDMtZDg5Yy00OGQ5LTk1NDEtM2ExZWRmZDZjMmFkIiwidCI6IjU1NjY4Nzc3LTYwZTYtNDlkZC1iODY1LTYyZjg0YjZlNGRkYiJ9"
                class="v-proto__embed__iframe"
        ></iframe>
      </div>
    </section>
</template>





<script setup lang="ts">
</script>





<style lang="scss" scoped >
.v-proto__embed {
  display: block;
  width: calc(100% / 12 * 12);
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  padding-top: var(--app-nav__height);
  box-sizing: border-box;
}

.v-proto__embed__iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  border-top: solid 1px var(--app-color-main--dark);
  box-shadow: 0 20px 10px -10px rgba(1, 152, 59, .25);
  box-sizing: border-box;
}
</style>
