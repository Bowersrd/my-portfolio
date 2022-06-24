<template>
    <section class="relative -mb-8 mt-8 lg:mb-0">
        <transition name="fall" appear>
            <div class="relative grid place-items-center -top-16 lg:top-0 lg:mb-12" style="transition-delay: .25s">
                <img class=" w-1/2 max-w-sm lg:w-auto lg:h-[300px]" src="../assets/images/profile.png" alt="">
            </div>
        </transition>
        <a href="#projects"
            class="hidden w-[12rem] text-center bg-accent text-neutral uppercase rounded-full py-3 mx-auto lg:block hover:shadow-xl hover:scale-110 transition-all duration-300 ease-in-out">
            View Some Projects
        </a>
    </section>
</template>