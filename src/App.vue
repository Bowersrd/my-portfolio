<template>
  <Navbar></Navbar>
  <AppHeader id="home"></AppHeader>
  <main>
    <Profile class="lg:hidden"></Profile>
    <About id="about"></About>
    <Projects id="projects"></Projects>
    <Contact id="contact"></Contact>
  </main>
  <AppFooter></AppFooter>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import AppHeader from './components/AppHeader.vue';
import Profile from './components/Profile.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';

</script>