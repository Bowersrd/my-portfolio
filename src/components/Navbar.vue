<template>
    <div class="bg-primary fixed w-full z-50 py-2">
        <div class="max-w-7xl mx-auto relative flex items-center justify-between py-3 px-5 md:px-8">
            <transition name="fall" appear>
                <div class="h-7 flex gap-5 md:gap-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="1.75rem" height="1.75rem"
                        fill="#eee" class=" cursor-pointer hover:fill-accent transition-all duration-300"
                        @click="openLink('https://github.com/Bowersrd/')">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1.75rem" height="1.75rem"
                        fill="#eee" class=" cursor-pointer hover:fill-accent transition-all duration-300"
                        @click="openLink('https://codepen.io/bowersrd')">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="1.75rem" height="1.75rem"
                        fill="#eee" class=" cursor-pointer hover:fill-accent transition-all duration-300"
                        @click="openLink('https://codepen.io/bowersrd')">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 280C96 293.3 106.8 304 120 304h144C277.3 304 288 293.3 288 280S277.3 256 264 256h-144C106.8 256 96 266.8 96 280zM264 352h-144C106.8 352 96 362.8 96 376s10.75 24 24 24h144c13.25 0 24-10.75 24-24S277.3 352 264 352z" />
                    </svg>
                </div>
            </transition>
            <transition name="slide-left" appear>
                <div class="flex flex-col w-7 gap-1 z-50 md:hidden"
                    :class="isMobileActive ? 'fixed right-5' : 'relative'" @click="showMobileMenu">
                    <span class="h-1 bg-neutral transition-all"
                        :class="{ 'translate-y-2 rotate-45': isMobileActive }"></span>
                    <span class="h-1 w-[90%] self-end bg-neutral transition-opacity"
                        :class="{ 'opacity-0': isMobileActive }"></span>
                    <span class="h-1 bg-neutral transition-all"
                        :class="{ '-translate-y-2 -rotate-45': isMobileActive }"></span>
                </div>
            </transition>
            <nav class="absolute inset-0 w-full h-screen z-20 pt-20 transition-transform duration-300 bg-primary md:static md:shadow-none md:w-fit md:h-auto md:bg-[transparent] md:pt-0"
                :class="{ 'opacity-100 -z-50 -translate-x-full md:translate-x-0 md:block md:opacity-100 md:z-0': !isMobileActive }">
                <transition name="fall" appear>
                    <ul class="flex-col gap-5 text-neutral text-xl uppercase text-center md:bg-[transparent] md:flex-row md:text-base md:gap-5 lg:text-lg"
                        :class="isMobileActive ? 'flex' : 'hidden md:flex'" style="transition-delay: .5s">
                        <li>
                            <a class="border-b-4 border-b-[transparent] hover:border-b-4 hover:border-b-accent pb-2 transition-all duration-500 ease-in-out"
                                :class="{ 'border-b-4 border-b-accent pb-2': scrollLocation < 400 }" href="#home"
                                @click="isMobileActive = false">Home</a>
                        </li>
                        <li>
                            <a class="border-b-4 border-b-[transparent] hover:border-b-4 hover:border-b-accent pb-2 transition-all duration-500 ease-in-out"
                                :class="{ 'border-b-4 border-b-accent pb-2': scrollLocation >= 400 && scrollLocation < 850 }"
                                href="#about" @click="isMobileActive = false">About</a>
                        </li>
                        <li>
                            <a class="border-b-4 border-b-[transparent] hover:border-b-4 hover:border-b-accent pb-2 transition-all duration-500 ease-in-out"
                                :class="{ 'border-b-4 border-b-accent pb-2': scrollLocation >= 850 && scrollLocation < 3250 }"
                                href="#projects" @click="isMobileActive = false">Projects</a>
                        </li>
                        <li>
                            <a class="border-b-4 border-b-[transparent] hover:border-b-4 hover:border-b-accent pb-2 transition-all duration-500 ease-in-out"
                                :class="{ 'border-b-4 border-b-accent pb-2': scrollLocation >= 3250 }" href="#contact"
                                @click="isMobileActive = false">Contact</a>
                        </li>
                    </ul>
                </transition>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

function openLink(link) {
    window.open(link)
}

const isMobileActive = ref(false)

const showMobileMenu = () => {
    isMobileActive.value = !isMobileActive.value;
}

const scrollLocation = ref(0)

onMounted(() => {
    document.addEventListener('scroll', (e) => {
        scrollLocation.value = window.scrollY
    })
})
</script>

<style>
.fall-enter-from {
    opacity: 0;
    transform: translateY(-2rem);
}

.fall-enter-active {
    transition: all 1s ease;
}

.slide-left-enter-from {
    opacity: 0;
    transform: translateX(2rem);
}

.slide-left-enter-active {
    transition: all 1s ease;
}
</style>