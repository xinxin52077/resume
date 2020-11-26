<template>
  <div class="resume_editor">
    <div class="resume_code" ref="resume" v-html="resumeShowCode"></div>
    <div class="resume_style" v-html="styleCode"></div>
  </div>
</template>

<script>
export default {
  name: "resumeEditor",
  props: ["resumeShowCode", "code"],
  computed: {
    styleCode() {
      return "<style>" + this.code + "</style>";
    },
  },
  methods: {
    goResumeBottom() {
      this.$refs.resume.scrollTop = 100000;
      // console.log(this.$refs.resume.scrollTop)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>