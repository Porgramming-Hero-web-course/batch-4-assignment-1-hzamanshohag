type AreaData = {
  shape: "circle";
  radius: number;
};

type RectangleData = {
  shape: "rectangle";
  width: number;
  height: number;
};

function calculateShapeArea(data: AreaData | RectangleData): number {
  if ("radius" in data) {
    const result = (Math.PI * data.radius * data.radius).toFixed(2);
    return parseFloat(result);
  } else if ("width" in data && "height" in data) {
    const result = data.width * data.height;
    return result;
  }
  throw new Error("There is an Error. Please Check Input Data");
}

// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 6,
//   height: 6,
// });

// console.log(circleArea, rectangleArea);
