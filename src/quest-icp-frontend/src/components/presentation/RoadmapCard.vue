<template>
    <q-card class="my-card text-white p-5" style="background: radial-gradient(circle, #35a2ff 0%, #3f92e6 100%)">
        <q-card-section>
            <div class="text-[24px] font-bold text-center">Roadmap and Milestone</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-[16px]">
            <p class="text-lg font-semibold">1. Initial Development (Months 1-3)</p>
            <p class="mb-1">- Finalize the core functionalities for question submission, answering, and reward distribution.</p>
            <p class="mb-1">- Implement the basic version of autonomous governance.</p>
            <p class="mb-1">- Conduct internal testing and debugging.</p>
        </q-card-section>

        <q-card-section class="q-pt-none text-[16px]">
            <p class="text-lg font-semibold">2.Beta Launch (Months 4-6)</p>
            <p class="mb-1">- Launch a beta version of the app to a limited audience.</p>
            <p class="mb-1">- Gather user feedback and make necessary adjustments.</p>
            <p class="mb-1">- Start building a liquidity pool for arbitrator rewards.</p>
        </q-card-section>
    </q-card>
</template>
<script setup lang="ts">
defineProps({
    title: {
        type: String,
    },
    contents: {
        type: [String],
    }
});
</script>