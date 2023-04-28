export const eventTemplateSvg = (c: CanvasRenderingContext2D) => {
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
