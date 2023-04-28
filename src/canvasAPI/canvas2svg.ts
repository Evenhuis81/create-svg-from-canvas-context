// @ts-nocheck
import canvas2svg from "canvas2svg";

export const createSVG = (width: number, height: number, exec: (context: CanvasRenderingContext2D) => void) => {
    //Create a new mock canvas context. Pass in your desired width and height for your svg document.
    const ctx = new canvas2svg(width, height);

    exec(ctx);

    //serialize your SVG
    const mySerializedSVG = ctx.getSerializedSvg(); //true here, if you need to convert named to numbered entities.
    
    //If you really need to you can access the shadow inline SVG created by calling:
    const svg = ctx.getSvg();
    
    console.log(mySerializedSVG);
    console.log(svg);
}
