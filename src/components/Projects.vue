<template>
    <section class="bg-neutral">
        <div
            class="max-w-7xl mx-auto grid gap-8 pb-12 px-5 pt-8 lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 2xl:max-w-[93.75rem]">
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
                <div class="flex justify-between text-sm uppercase font-bold">
                    <p class="underline cursor-pointer opacity-60 hover:text-accent hover:opacity-100 transition-all duration-300"
                        @click="goToLink(project.sourceLink)" v-if="project.source == 'public'">
                        Source</p>
                    <p class="opacity-60" v-else>Source Private - Provided upon Request</p>
                    <p class="underline cursor-pointer opacity-60 hover:text-accent hover:opacity-100 transition-all duration-300"
                        @click="goToLink(project.previewLink)">
                        {{ project.preview }}
                    </p>
                </div>
                <div>
                    <h3 class="text-2xl font-bold uppercase mt-4 xl:text-3xl mb-2">{{ project.name }}</h3>
                    <!-- <h4 class="opacity-60 mb-2 font-light">{{ project.sub }}</h4> -->
                    <p class="uppercase mb-2 text-secondary">About</p>
                    <p class="font-secondary leading-relaxed xl:text-lg mb-2">{{ project.about }}</p>
                    <p class="uppercase mb-2 text-secondary">How it was made</p>
                    <p class="font-secondary leading-relaxed xl:text-lg">{{ project.how }}</p>
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

function goToLink(link) {
    window.open(link)
}

const projects = [
    {
        id: 0,
        name: 'Find My Movie',
        sub: 'Random Movie Generator and Top Movies',
        about: 'Find My Movie is a site that users can visit and search for a random movie when they cannot decide on what to watch next. The website uses The Movie Database for API calls and returns only movies that meet certain parameters to prevent users from seeing unwanted material. The website can also show the top movies out and has a full functional search engine to find specific movie titles.',
        how: '',
        image: 'findmymovie.jpg',
        preview: 'Live Preview',
        previewLink: 'https://find-my-movie-72138.firebaseapp.com/',
        source: 'public',
        sourceLink: 'https://github.com/Bowersrd/FindMyMovie',
        stack: ['vue', 'vuetify', 'sass', 'firebase']
    },
    {
        id: 1,
        name: 'MyFranchise Desktop App',
        sub: 'Electron app reads/writes Madden franchise files',
        about: 'MyFranchise is a desktop application to be used with Madden PC video game. The app is designed to live as a central hub for a user\'s franchise. Users can do actions such as player signing, cutting players, trading players, and more. Every detail of a franchise is listed in an easy to read format for users to quickly navigate and find the information that would be important to them.',
        how: '',
        image: 'myfranchise.jpg',
        preview: 'Download App',
        previewLink: 'https://github.com/Bowersrd/MyMaddenFranchiseRelease/releases',
        source: 'private',
        sourceLink: '',
        stack: ['vue', 'sass', 'electron', 'node']
    },
    {
        id: 2,
        name: 'Second Season Football Desktop App',
        sub: 'Electron app that manages Plaay\'s Second Season Football game with simulation engine',
        about: 'This desktop app is created for a football board game called Second Season Football. It allows users to play full games with play by play, full stat tracking, and automated timing mechanics. The app includes modes for playing a single game, a full season mode with a simulation engine, and a variable tournament mode.',
        how: '',
        image: 'ssfootaball.jpg',
        preview: 'Download App',
        previewLink: 'https://github.com/Bowersrd/SecondSeasonFootballRelease/releasess',
        source: 'private',
        sourceLink: '',
        stack: ['vue', 'sass', 'electron', 'node']
    },
    {
        id: 3,
        name: 'Planet Facts',
        sub: 'Responsive website that shows the planets facts with tabbed components',
        about: 'Planet facts is a challenge site from Front End Mentor that gives developers basic instruction on what the end user should be able to do on the site. A figma file is also provided to give front end developers extra practice taking design files and turning them into code. This site is fully responsive.',
        how: '',
        image: 'planetfacts.jpg',
        preview: 'Live Preview',
        previewLink: 'https://bowersrd.github.io/planet-facts/',
        source: 'public',
        sourceLink: 'https://github.com/Bowersrd/planet-facts',
        stack: ['vue', 'sass']
    },
    {
        id: 4,
        name: 'NCAA 14 Dynasty Tool',
        sub: 'Dynasty tool that reads/writes NCAA 14 dynasty files',
        about: 'The NCAA Dynasty Tool is an electron app that gives users the ability to enhance their dynasty files. Users can create different folders per dynasty and each have their own dynasty hub that allows users to do different actions such as full custom player progression, custom draft declaration, and more. The app saves all data in text files so users can archive their results and keep up with the changes as the years progress in the dynasty file.',
        how: '',
        image: 'ncaadynastytool.jpg',
        preview: 'Download App',
        previewLink: 'https://github.com/Bowersrd/NCAA14DynastyToolRelease/releases',
        source: 'private',
        sourceLink: '',
        stack: ['vue', 'sass', 'electron', 'node']
    },
    {
        id: 5,
        name: 'EasyBank',
        sub: 'Responsive website challenge from Front End Mentor',
        about: 'Another Front End Mentor challenge of a fully responsive website. Using the provided figma file, developers are tasked with making the site match the presented file to practice real world scenarios.',
        how: '',
        image: 'easybank.jpg',
        preview: 'Live Preview',
        previewLink: 'https://bowersrd.github.io/EasyBank/',
        source: 'public',
        sourceLink: 'https://github.com/Bowersrd/EasyBank',
        stack: ['vue', 'sass']
    },
    {
        id: 6,
        name: 'History Maker Golf Desktop App',
        sub: 'Electron app that manages single tournaments and season mode replicating the PGA Tour',
        about: 'This electron app is made for a sports board game called History Maker Golf by Plaay Games. The app allows users to play single tournaments or a full season mode that replicates the scoring of the PGA Tour. Users are able to import/export golfers and courses and able to have "collections" of these items. The app supports multiple seasons at once.',
        how: '',
        image: 'historymakergolf.jpg',
        preview: 'Download App',
        previewLink: 'https://github.com/Bowersrd/HistoryMakerGolfRelease/releases',
        source: 'private',
        sourceLink: '',
        stack: ['vue', 'sass', 'electron', 'node']
    },
    {
        id: 7,
        name: 'GameRecapper',
        sub: 'Work in progress graphic generation site',
        about: 'GameRecapper is a work in progress graphic generation website. Users can create custom game recaps (currently just one) and graphics for sports such as player of the week, breaking news, and more. Presented in an easy to use format, users can use their own images by simply uploading them. Once the graphic is completed how the user wants, a simple download button will save a local copy of the image for use.',
        how: '',
        image: 'gamerecapper.jpg',
        preview: 'Live Preview',
        previewLink: 'https://gamerecappertesting.web.app/',
        source: 'public',
        sourceLink: 'https://github.com/Bowersrd/GameRecapperTesting',
        stack: ['vue', 'sass']
    },
]
</script>