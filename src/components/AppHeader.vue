<template>
    <header class="bg-primary pt-[3.25rem] lg:pt-24">
        <div class="max-w-7xl mx-auto bg-primary pr-8 pt-10 pb-20 md:pb-24 lg:grid lg:grid-cols-2">
            <h1
                class="relative text-[3.5rem] font-bold tracking-tight leading-[1.15] text-right pb-3 md:text-[5.5rem] lg:col-span-1 lg:row-start-1">
                <span class="text-stroke">hello. I am</span><br />
                <span class="relative left-4 text-neutral">Reggie Bowers<span class="text-accent">.</span></span><br />
                <span class="text-stroke uppercase">&lt; front end <br /> developer /></span>
            </h1>
            <div class="relative right-2 w-[18rem] h-[.375rem] bg-accent ml-auto md:w-[28rem] lg:col-span-1 lg:right-4">
            </div>
            <div class="hidden lg:block lg:col-span-1 lg:row-start-1">
                <Profile></Profile>
            </div>
        </div>
    </header>
</template>

<script setup>
import Profile from './Profile.vue';
</script>