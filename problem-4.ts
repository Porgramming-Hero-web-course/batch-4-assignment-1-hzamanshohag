type AreaType = {
  shape: "circle";
  radius: number;
};

type RectangleType = {
  shape: "rectangle";
  width: number;
  height: number;
};

type isValid = AreaType | RectangleType;

function calculateShapeArea(shape: isValid): number {
  if (shape.shape === "circle") {
    const result = (Math.PI * shape.radius * shape.radius).toFixed(2);
    return parseFloat(result);
  } else if (shape.shape === "rectangle") {
    const result = shape.width * shape.height;
    return result
  }
  throw new Error("There is an Error. Please Check input");
}


const circlevalue = calculateShapeArea({ shape: "circle", radius: 10});
console.log(circlevalue);
const rectangleValue = calculateShapeArea({
  shape: "rectangle",
  width: 5,
  height: 8,
});
console.log(rectangleValue);
