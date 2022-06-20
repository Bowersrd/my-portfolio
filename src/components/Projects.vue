<template>
    <section class="bg-neutral">
        <div class="max-w-7xl mx-auto grid gap-8 pb-12 px-5 pt-8 lg:grid lg:grid-cols-2">
            <h2 class="mx-auto text-primary text-2xl font-bold uppercase mb-4 md:text-3xl lg:col-span-2 lg:text-4xl">
                What I Do<span class="text-accent">.</span>
            </h2>
            <div v-for="project in projects" :key="project.id">
                <div class="relative mb-2">
                    <img :src="getProjectImage(project.image)" alt="Website preview image of Find My Movie Project"
                        class="w-full">
                    <!-- Stack used on projects -->
                    <div class="absolute bottom-3 left-3 flex gap-2 h-8">
                        <img :src="getStackImage(project.stack[index])"
                            alt="Vue logo to show it was used in this project" v-for="(stack, index) in project.stack"
                            :key="stack">
                    </div>
                </div>
                <div class="flex justify-between text-sm uppercase opacity-60 font-bold">
                    <p v-if="project.source == 'public'">Source</p>
                    <p v-else>Soruce Private - Provided upon Request</p>
                    <p>Live Preview</p>
                </div>
                <div>
                    <h3 class="text-2xl font-bold uppercase mt-4 xl:text-3xl">{{ project.name }}</h3>
                    <h4 class="opacity-60 mb-2 font-light">{{ project.sub }}</h4>
                    <p class="leading-relaxed xl:text-lg">{{ project.body }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
function getProjectImage(image) {
    return new URL(`../assets/images/projects/${image}`, import.meta.url).href
}

function getStackImage(stack) {
    return new URL(`../assets/images/icons/${stack}.png`, import.meta.url).href
}

const projects = [
    {
        id: 0,
        name: 'Find My Movie',
        sub: 'Random Movie Generator and Top Movies',
        body: 'Find My Movie is a site that users can visit and search for a random movie when they cannot decide on what to watch next. The site is built with The Movie Database API and uses parameters such as movie rating and votes to prevent low rated movies from appearing. I utilized axios for the API calls in this app and used Vuetify for quick UI development. Firebase was used for rapid deployment.',
        image: 'findmymovie.jpg',
        preview: 'Live Preview',
        source: 'public',
        stack: ['vue', 'vuetify', 'sass', 'firebase']
    },
    {
        id: 1,
        name: 'MyFranchise Desktop App',
        sub: 'Electron app reads/writes Madden franchise files',
        body: 'MyFranchise is a desktop application created with Electron built with Node JS and Webpack. The app reads and writes the Madden franchise file and provides users with enhanced visibility of their franchise and allows for quick editing of players, contracts, and more. The app takes advantage of Vuex to keep clean state to avoid components having to pass all the data.',
        image: 'myfranchise.jpg',
        preview: 'Download App',
        source: 'private',
        stack: ['vue', 'sass', 'electron', 'node']
    },
    {
        id: 2,
        name: 'Find My Movie',
        sub: 'Random Movie Generator and Top Movies',
        body: '',
        image: 'findmymovie.jpg',
        preview: 'Live Preview',
        source: 'public',
        stack: ['vue', 'vuetify', 'sass', 'firebase']
    },
    {
        id: 3,
        name: 'Find My Movie',
        sub: 'Random Movie Generator and Top Movies',
        body: '',
        image: 'findmymovie.jpg',
        preview: 'Live Preview',
        source: 'public',
        stack: ['vue', 'vuetify', 'sass', 'firebase']
    },
    {
        id: 4,
        name: 'Find My Movie',
        sub: 'Random Movie Generator and Top Movies',
        body: '',
        image: 'findmymovie.jpg',
        preview: 'Live Preview',
        source: 'public',
        stack: ['vue', 'vuetify', 'sass', 'firebase']
    },
    {
        id: 5,
        name: 'Find My Movie',
        sub: 'Random Movie Generator and Top Movies',
        body: '',
        image: 'findmymovie.jpg',
        preview: 'Live Preview',
        source: 'public',
        stack: ['vue', 'vuetify', 'sass', 'firebase']
    },
]
</script>