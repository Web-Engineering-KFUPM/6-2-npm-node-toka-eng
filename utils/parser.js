import _ from "lodash";

export function parseNumbers(input) {
  const numbers = _.map(input, (str) => {
    const num = Number(str);
    return Number.isNaN(num) ? null : num;
  });

  return _.compact(numbers);
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}