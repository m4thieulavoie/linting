import type { Test } from "./somefile";

export const phatArrows = () => {
  console.warn("this is a warnign");
  const z = "12344";
  console.warn({ z });
  return true;
};

export function functionWithParams(s: Test) {
  return {
    ...s,
    name: "dsfngio",
  };
}
