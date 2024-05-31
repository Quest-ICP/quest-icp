<template>
    <q-drawer 
        v-model="drawerOpen" 
        show-if-above 
        side="left" 
        elevated 
        :width="250"
        :breakpoint="840"
    >
        <div class="px-5 py-5 h-full">
            <div class="flex flex-col justify-between h-full">
                <div>
                    <SidebarItems v-bind="presentationItem" class="mb-10"/>
                    <SidebarItems v-for="item in sidebarItems" v-bind="item"/>
                </div>
                <SidebarItems v-bind="LogoutItem" v-if="isLogin"/>
            </div>
        </div>
    </q-drawer>
</template>
<script setup lang="ts">
import {useLayoutStore} from "@/stores/layout";
import {useAuthStore} from "@/stores/auth";
import { storeToRefs } from "pinia";
import SidebarItems from "./SidebarItems.vue";

const layoutStore = useLayoutStore();
const authStore = useAuthStore();

const {isLogin} = storeToRefs(authStore);
const { drawerOpen } = storeToRefs(layoutStore);
const presentationItem = {
    name: "Presentation",
    route: "/"
};
const LogoutItem = {
    name: "Logout",
    route: "/"
};
const sidebarItems = [
    {
        name: "Questions",
        route: "/questions"
    },
    {
        name: "Discussions",
        route: "/discussions"
    },
    {
        name: "Governance",
        route: "/governance"
    }
];
</script>