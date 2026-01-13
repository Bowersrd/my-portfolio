<template>
    <section class="bg-neutral">
        <div
            class="max-w-7xl mx-auto grid gap-8 pb-12 px-5 pt-8 lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 2xl:max-w-[93.75rem]">
            <h2 class="mx-auto text-primary text-2xl font-bold uppercase mb-4 md:text-3xl lg:col-span-2 lg:text-4xl">
                What I Do<span class="text-accent">.</span>
            </h2>
            <div v-for="project in projects" :key="project.id" v-motion-slide-visible-once-bottom>
                <div class="relative mb-2">
                    <img loading="lazy" :src="getProjectImage(project.image)"
                        alt="Website preview image of Find My Movie Project" class="w-full">
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
    name: 'Civil GG Playbooks',
    sub: 'Madden and College Football Playbook Site',
    about: 'Civil GG Playbooks is a site for a client who needed a site that could handle loads of data for Madden and College Football playbooks. The site uses SQL database to provide the necessary query speeds client required. End users can search for playbooks to see all the data available inside the game. Python scripts were used for data collection to extract all data from playbook videos.',
    how: 'Civil Playbooks is built with Vue 3 and Tailwind CSS. The backend uses a SQL database and storage buckets to host all the play images. Client needed access to the database and storage buckets, python scripts were created to allow easy upload of JSON data and images. The site is fully responsive and can be viewed on mobile, tablet, and desktop. The site uses user authentication to allow users to create their own playbooks and view custom content.',
    image: 'civilplaybooks.webp',
    preview: 'Live Preview',
    previewLink: 'https://playbooks.civil.gg/',
    source: 'private',
    sourceLink: '',
    stack: ['vue', 'tailwind']
  },
    {
        id: 0,
        name: 'Find My Movie',
        sub: 'Random Movie Generator and Top Movies',
        about: 'Find My Movie is a site that users can visit and search for a random movie when they cannot decide on what to watch next. The website uses The Movie Database for API calls and returns only movies that meet certain parameters to prevent users from seeing unwanted material. The website can also show the top movies out and has a full functional search engine to find specific movie titles.',
        how: 'Find My Movie uses The Movie Database\'s API for all movie queries and all API calls are made through Axios. I used Vue with Vuetify to quickly build the UI/UX. The site is completely responsive and provides a great experience from mobile through desktop. Firebase was used to deploy the production build and quickly get it hosted. The end user navigates through categories and chooses a desired genre. Once chosen, the user can query by movie year or get a random movie from any year. Once the movie is generated, the user gets presented the ratings, description, genre tags, and movie trailers.',
        image: 'findmymovie.webp',
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
        how: 'This app was built on the electron framework using Vue and Node JS. The app utilizes a plugin created by another developer on GitHub (Bep713) to read and write Madden PC franchise files. The plugin returns the franchise file in a class object that I used to present data to the end user. I started with basic mockups of the app design using Adobe XD. The app is spread out into multiple views and split into many components. The backend of this app uses worker threads to free up the UI while running intensive tasks reading and writing the franchise files. This project has been in the works for several months and is still ongoing',
        image: 'myfranchise.webp',
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
        how: 'This app was created with Electron and Vue specifically for Second Season Football by Plaay Games (football board game). The app uses Vuex to track all game data and has multiple modules holding its own store data. The navigation through the app utilizes Vue router. Tailwind CSS was used to quickly design the UI. The app utilizes built in functions of Node JS such as the File System to handle all save data. Save data is written into text files to persist the store data, this was chosen over plugins that persist data for a better user experience.',
        image: 'ssfootaball.webp',
        preview: 'Download App',
        previewLink: 'https://github.com/Bowersrd/SecondSeasonFootballRelease/releasess',
        source: 'private',
        sourceLink: '',
        stack: ['vue', 'tailwind', 'electron', 'node']
    },
    {
        id: 3,
        name: 'Planet Facts',
        sub: 'Responsive website that shows the planets facts with tabbed components',
        about: 'Planet facts is a challenge site from Front End Mentor that gives developers basic instruction on what the end user should be able to do on the site. A figma file is also provided to give front end developers extra practice taking design files and turning them into code. This site is fully responsive.',
        how: 'This website was built using Vue and the styling was done with SCSS. The design came from Front End Mentor and I was provided with a figma file with basic instructions on what the end user should experience. Utilizing the figma file, I was able to create this website that is fully responsive with specific design for mobile, tablet/laptops, and desktop. CSS Grid was used for the layout and provided a way to structure the tabbed navigation into a single component.',
        image: 'planetfacts.webp',
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
        how: 'This electron app utilizes Vue and Node JS. Saved data is kept in text files and handled through the File System in Node. The app\'s store data is kept with Vuex to provide easy access through all components. The backend of the app uses worker-primes, a Vue plugin to handle promises to free up the front end. The app will also decrypt and encrypt PS3 save files using PFDTool, a command line interface that the app automates for the end user.',
        image: 'ncaadynastytool.webp',
        preview: 'Download App',
        previewLink: 'https://github.com/Bowersrd/NCAA14DynastyToolRelease/releases',
        source: 'private',
        sourceLink: '',
        stack: ['vue', 'sass', 'electron', 'node']
    },
    {
        id: 5,
        name: 'History Maker Golf Desktop App',
        sub: 'Electron app that manages single tournaments and season mode replicating the PGA Tour',
        about: 'This electron app is made for a sports board game called History Maker Golf by Plaay Games. The app allows users to play single tournaments or a full season mode that replicates the scoring of the PGA Tour. Users are able to import/export golfers and courses and able to have "collections" of these items. The app supports multiple seasons at once.',
        how: 'History Maker Golf was created with Electron and Vue. The app was created to allow for total customization for the end user. The app uses JSON files to import the original data and allows users to create their own golfers and courses and saves them using text files through Node\'s File System. The app uses Vuex to store all game data and imports saved data upon launch of the app. The PGA Tour torunament setup is replicated inside the application by providing the end user with automated points and money to golfers after the conclusion of their tournaments.',
        image: 'historymakergolf.webp',
        preview: 'Download App',
        previewLink: 'https://github.com/Bowersrd/HistoryMakerGolfRelease/releases',
        source: 'private',
        sourceLink: '',
        stack: ['vue', 'sass', 'electron', 'node']
    },
    {
        id: 6,
        name: 'EasyBank',
        sub: 'Responsive website challenge from Front End Mentor',
        about: 'Another Front End Mentor challenge of a fully responsive website. Using the provided figma file, developers are tasked with making the site match the presented file to practice real world scenarios.',
        how: 'EasyBank was created based on the design from Front End Mentor. Using the provided figma file with basic instruction on the end user experience, this website was created to be full responsive following the guidelines in the design file. This challenge focued on a developer\'s layout skill with the 4 phones in the header. I was able to keep the design consistent between all viewports and scale correctly across each device.',
        image: 'easybank.webp',
        preview: 'Live Preview',
        previewLink: 'https://bowersrd.github.io/EasyBank/',
        source: 'public',
        sourceLink: 'https://github.com/Bowersrd/EasyBank',
        stack: ['vue', 'sass']
    },
    {
        id: 7,
        name: 'GameRecapper',
        sub: 'Work in progress graphic generation site',
        about: 'GameRecapper is a work in progress graphic generation website. Users can create custom game recaps (currently just one) and graphics for sports such as player of the week, breaking news, and more. Presented in an easy to use format, users can use their own images by simply uploading them. Once the graphic is completed how the user wants, a simple download button will save a local copy of the image for use.',
        how: 'This web app was created with Vue and designed to be a graphic generation site for users to quickly create and share graphics normally created inside photoshop. The site uses domtoimage to download the image to the user\'s computer once they complete their design. Users are also provided textures for most of the graphics and can swap the texture overlay and opacity with simple dropdowns and sliders.',
        image: 'gamerecapper.webp',
        preview: 'Live Preview',
        previewLink: 'https://gamerecappertesting.web.app/',
        source: 'public',
        sourceLink: 'https://github.com/Bowersrd/GameRecapperTesting',
        stack: ['vue', 'sass']
    },
]
</script>