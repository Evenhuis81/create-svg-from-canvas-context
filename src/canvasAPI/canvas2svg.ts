// @ts-nocheck
import canvas2svg from "canvas2svg";

export const createSVG = (width: number, height: number, exec: (context: CanvasRenderingContext2D) => void, serialize?: boolean) => {
    //Create a new mock canvas context. Pass in your desired width and height for your svg document.
    const ctx = new canvas2svg(width, height);

    exec(ctx);

    //serialize your SVG
    if (serialize) return ctx.getSerializedSvg(); // true here, if you need to convert named to numbered entities.
    
    //If you really need to you can access the shadow inline SVG created by calling:
    return ctx.getSvg();
}
