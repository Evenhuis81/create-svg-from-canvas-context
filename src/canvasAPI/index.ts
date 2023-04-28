export const getCanvas = (id: string) => {
    const canvas = document.getElementById(id);
    if (canvas instanceof HTMLCanvasElement) return canvas;
    throw new Error(`element with id ${id} is not a canvas element`);
};

export const getContext2D = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext("2d");
    if (context instanceof CanvasRenderingContext2D) return context;
    throw new Error(
        `could not get 2d context from the provided canvas element`
    );
};
