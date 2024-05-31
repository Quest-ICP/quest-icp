<template>
  <main>
    <div class="mx-[10%] my-10">
      <div class=" grid grid-cols-2 gap-5 mb-5">
        <ConcepCard />
        <RoadmapCard />
      </div>
      <BenefitCard />
    </div>
  </main>
</template>
<script setup lang="ts">
import ConcepCard from "@/components/presentation/ConcepCard.vue";
import RoadmapCard from "@/components/presentation/RoadmapCard.vue";
import BenefitCard from "@/components/presentation/BenefitCard.vue";

defineOptions({
  name: 'HomeView'
});
</script>