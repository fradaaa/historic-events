const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);

export const getCoords = (angle: number, r = 265) => {
  const x = r * Math.cos(degreesToRadians(angle));
  const y = r * Math.sin(degreesToRadians(angle));

  return [
    parseFloat(String(x)).toFixed(2),
    parseFloat(String(y)).toFixed(2),
  ] as const;
};
