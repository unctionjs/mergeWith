
import mergeWith from "./index.ts";

test(() => {
  expect(mergeWith(
    (left) => (right) => right + left
  )(
    {beta: "a"}
  )(
    {beta: "b"}
  )).toEqual({beta: "ba"});
});

test(() => {
  expect(mergeWith(
    (left) => (right) => left + right
  )(
    {
      alpha: "0",
      beta: "1",
    }
  )(
    {
      beta: "2",
      zeta: "3",
    }
  )).toEqual({
    alpha: "0",
    beta: "12",
    zeta: "3",
  });
});
