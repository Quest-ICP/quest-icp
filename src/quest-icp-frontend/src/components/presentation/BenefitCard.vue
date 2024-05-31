<template>
    <q-card class="my-card text-white p-5" style="background: radial-gradient(circle, #35a2ff 0%, #3f92e6 100%)">
        <q-card-section>
            <div class="text-[24px] font-bold text-center">What unique benefits does this work bring to the Internet Computer ecosystem?</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-md">
            <p class="text-lg mb-0">Quest offers several unique benefits to the Internet Computer ecosystem.</p>
        </q-card-section>

        <q-card-section class="q-pt-none text-[16px]">
            <p class="mb-1"><span class="text-bold">Decentralized Knowledge Sharing :</span> It provides a platform for sharing technical knowledge in a decentralized manner, leveraging the ICP's capabilities.</p>
            <p class="mb-1"><span class="text-bold">Incentivized Participation :</span> Users are financially rewarded for providing useful answers and participating in governance, promoting active engagement.</p>
            <p class="mb-1"><span class="text-bold">Community-driven Governance :</span> The app's autonomous governance model ensures fairness and transparency, encouraging a self-sustaining community.</p>
            <p class="mb-1"><span class="text-bold">Support for Developers :</span> It addresses the needs of amateur developers by offering a place to ask questions and receive timely answers, fostering growth and learning within the ICP ecosystem.</p>
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