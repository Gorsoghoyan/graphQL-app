
export const createOptions = (
  count: number, 
  title: "Episodes" | "Locations"
) => {
  const label = title === "Episodes" ? "Episode" : "Location";

  return [...Array(count).keys()].map((item) => {
    return { 
      value: item + 1,
      label: label + " - " + (item + 1)
    };
  });
};