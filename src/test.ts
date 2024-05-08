// Interface definition
interface CircleStat {
  id: string;
  name: string;
  count: number;
}
const id = Array.from({ length: 10000 }, (_, i) => (i + 1).toString());
// Original code
(function () {
  console.time("Original Code");
  console.log(id.length);
  const filteredId = id.filter((value) => value !== "3");

  const circles = id.map((value) => ({
    id: value,
    name: `name-${value}`,
    count: Math.random() * 100,
  }));

  const filteredCircles = circles.filter(({ id }) => filteredId.includes(id));
  console.log(filteredCircles.length);
  console.timeEnd("Original Code");
})();

// Refactored code
(function () {
  console.time("Refactored Code");
  console.log(id.length);
  const filteredIdSet = new Set(id.filter((value) => value !== "3"));

  const circles = id.map((value) => ({
    id: value,
    name: `name-${value}`,
    count: Math.random() * 100,
  }));

  const filteredCircles = circles.filter(({ id }) => filteredIdSet.has(id));
  console.log(filteredCircles.length);
  console.timeEnd("Refactored Code");
})();
