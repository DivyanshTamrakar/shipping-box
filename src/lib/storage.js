export const getBoxes = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("boxes")) || [];
  }
  return [];
};

export const saveBox = (box) => {
  const boxes = getBoxes();
  boxes.push(box);
  localStorage.setItem("boxes", JSON.stringify(boxes));
};
