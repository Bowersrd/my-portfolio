<template>
    <section class="max-w-7xl mx-auto px-5 pt-8 mb-12">
        <h2 class="mtext-primary text-2xl font-bold uppercase mb-4 md:text-3xl md:mb-6 lg:text-4xl">Let's Work<span
                class="text-accent">.</span></h2>
        <form class="grid gap-4 mb-5 lg:grid-cols-2">
            <div class="flex items-center border border-primary px-3 py-1">
                <span class="material-symbols-outlined">person</span>
                <input class="bg-[transparent] outline-none border-none w-full" id="name" name="name" type="text"
                    placeholder="Enter name...">
            </div>
            <label class="-mt-3 ml-1 text-sm font-bold uppercase lg:row-start-2" for="name">Full Name</label>
            <div class="flex items-center border border-primary px-3 py-1">
                <span class="material-symbols-outlined">email</span>
                <input class="bg-[transparent] outline-none border-none w-full" id="email" name="email" type="text"
                    placeholder="Enter email...">
            </div>
            <label class="-mt-3 ml-1 text-sm font-bold uppercase" for="email">Email Address</label>
            <div class="flex items-center border border-primary px-3 py-1 lg:col-span-2">
                <span class="material-symbols-outlined">subject</span>
                <input class="bg-[transparent] outline-none border-none w-full" id="subject" name="subject" type="text"
                    placeholder="Enter subject...">
            </div>
            <label class="-mt-3 ml-1 text-sm font-bold uppercase" for="subject">Subject Line</label>
            <div class="flex items-center border border-primary px-3 py-1 lg:col-span-2">
                <span class="material-symbols-outlined self-start mt-3">chat</span>
                <textarea class="w-full h-40 bg-[transparent] border-none outline-none" id="message" name="message"
                    placeholder="Enter message..."></textarea>
            </div>
            <label class="-mt-3 ml-1 text-sm font-bold uppercase" for="message">Message Details</label>
        </form>
        <button class="bg-primary text-neutral uppercase font-light px-4 py-2 w-full" @click.prevent="">Submit</button>
    </section>
</template>

<script setup>

</script>