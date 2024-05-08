interface CircleStat {
  id: string;
  name: string;
  count: number;
}

const id: string[] = ["1", "2", "3", "4", "5"];
const filteredId: string[] = id.filter((value: string) => {
  return value !== "3";
});

const circles: CircleStat[] = id.map((value: string) => {
  return {
    id: value,
    name: `name-${value}`,
    count: Math.random() * 100,
  };
});
console.log(circles);

const filteredCircles: CircleStat[] = circles.filter(({ id }) => {
  return filteredId.includes(id);
});

console.log(filteredCircles);
