<template>
    <div
        style="
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        "
    >
        <canvas
            id="canvas1"
            style="border: 1px solid black"
            width="320"
            height="180"
        />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// import { getCanvas, getContext2D } from './canvasAPI';
import { createSVG } from './canvasAPI/canvas2svg';

const eventTemplateSvg = (c: CanvasRenderingContext2D) => {
    c.strokeStyle = 'rgb(100, 100, 100)';
    c.lineWidth = 16;
    c.lineCap = 'round';

    c.beginPath();
    c.moveTo(100, 39.5);
    c.lineTo(220, 39.5);
    c.stroke();

    c.lineWidth = 2;

    c.beginPath();
    c.strokeRect(80, 75, 160, 75);

    c.fillStyle = 'rgb(100, 100, 100)';

    c.beginPath();
    c.font = 'bold 32px arial';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText('EVENTS', 160, 115);
};

onMounted(() => {
    // const canvas = getCanvas('canvas1');
    // const context = getContext2D(canvas);

    // templateSvg(context);
    createSVG(320, 180, eventTemplateSvg);
});
</script>
