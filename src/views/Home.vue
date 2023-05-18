<script setup>
import MainSearch from '@/components/MainSearch.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '../components/Navbar.vue'

function formOnSubmit(e) {
    let formData = new FormData(e.target)
    formData = Object.fromEntries(formData)

    console.log(formData)

    // https://stackoverflow.com/a/58239634
    e.target.reset()
}
</script>

<template>
  <Navbar />
  <div class="home container">
    <form @submit.prevent="formOnSubmit">
      <MainSearch />
    </form>
    <Footer />
  </div>
</template>
