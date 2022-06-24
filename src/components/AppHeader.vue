<template>
    <header class="bg-primary pt-[3.25rem] lg:pt-24">
        <div class="max-w-7xl mx-auto bg-primary pr-8 pt-10 pb-20 md:pb-24 lg:grid lg:grid-cols-2">
            <h1
                class="relative text-[3.5rem] font-bold tracking-tight leading-[1.15] text-right pb-3 md:text-[5.5rem] lg:col-span-1 lg:row-start-1">
                <transition name="fade" appear>
                    <span class="text-stroke">hello. I am</span>
                </transition>
                <br />
                <transition name="fade" appear>
                    <span class="relative left-4 text-neutral" style="transition-delay: .5s">Reggie Bowers<span
                            class="text-accent">.</span></span>
                </transition>
                <br />
                <transition name="fade" appear>
                    <span class="text-stroke uppercase" style="transition-delay: 1s">&lt; front end <br /> developer
                        /></span>
                </transition>
            </h1>
            <transition name="grow" appear>
                <div class="relative right-2 w-[18rem] h-[.375rem] bg-accent ml-auto md:w-[28rem] lg:col-span-1 lg:right-4"
                    style="transition-delay: 1s">
                </div>
            </transition>
            <div class="hidden lg:block lg:col-span-1 lg:row-start-1">
                <transition name="grow" appear>
                    <Profile style="transition-delay: .75s"></Profile>
                </transition>
            </div>
        </div>
    </header>
</template>

<script setup>
import Profile from './Profile.vue';
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.grow-enter-from,
.grow-leave-to {
    opacity: 0;
    transform: scaleX(0);
}

.grow-enter-active,
.grow-leave-active {
    transition: all 1s ease;
}
</style>