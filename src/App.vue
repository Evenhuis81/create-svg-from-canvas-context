<template>
    <div id="container">
        <div
            style="
                display: flex;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 24px;
            "
        >
            <div style="width: 320px; text-align: center">Canvas:</div>
            <div style="width: 320px; text-align: center; margin-left: 10px">
                SVG:
            </div>
        </div>
        <div id="svgAppend" style="display: flex">
            <canvas
                id="canvas1"
                style="border: 1px solid black"
                width="320"
                height="180"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { createSVG } from './canvasAPI/canvas2svg';
import { eventTemplateSvg } from './templates/events';
import { getCanvas, getContext2D } from './canvasAPI';

onMounted(() => {
    const canvas = getCanvas('canvas1');
    const context = getContext2D(canvas);

    eventTemplateSvg(context);

    const svg = createSVG(320, 180, eventTemplateSvg);

    svg.style.marginLeft = '10px';
    svg.style.border = '1px solid black';

    const svgAppend = document.getElementById('svgAppend');

    svgAppend?.appendChild(svg);
});
</script>

<style scoped>
#container {
    display: flex;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
