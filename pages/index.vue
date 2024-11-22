
<template>
    <div>
        <h1>Home page</h1>
        <IconsBellIcon/>
        <VacationCard/>
        <header
            style="
                display: flex;
                justify-content: space-between;
                height: 50px;
                align-items: center;
            "
        >
            <h1>{{ pressed }}</h1>
            <h3>{{ colorMode }}</h3>
            <button 
                @click="swicthColorMode" 
                class="colorModeButton"
                style="
                    display: flex; 
                    align-items: center;
                    "
            >
                <IconSun />
            </button>

            <button 
                @click="swicthToCafeMode" 
                class="colorModeButton"
                style="
                    display: flex; 
                    align-items: center;
                    "
            >
                Swicth to cafe
            </button>

        </header>
        
    </div>
</template>

<script setup>
import { useMousePressed, useColorMode} from '@vueuse/core'

const pressed = useMousePressed();
const colorMode = useColorMode({
    modes: {
        cafe: 'cafe',
    }
});


function swicthColorMode() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
}

const swicthToCafeMode = ()=> {
    colorMode.value = 'cafe';
}

</script>

<style>
    .light{
        background-color: white;
        color: black;
    }
    .dark{
        background-color: #222;
        color: white;
    }
    .cafe{
        filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
    }
</style>