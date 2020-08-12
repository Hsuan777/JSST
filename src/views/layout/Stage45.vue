<template>
  <main>
    <section class="container">
      <div class="row">
        <div class="col">
          <h2>第45關</h2>
          <button type="button" class="google" @click="jump('google')">連到 Google</button>
          <button type="button" class="yahoo" @click="jump('yahoo')">連到 Yahoo</button>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    jump (src) {
      console.log(src)
      location.href = `https:/www.${src}.com.tw`
      console.log(location.href)
    }
  }
}
</script>
