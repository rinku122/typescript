export function add(a: number, b: number): number {
  return a + b;
}

export function diff(a: number, b: number): number {
  return a - b;
}

// Can only be one per file
export default function (a: number, b: number): number {
  return a * b;
}

// export default class {
//   add(a: number, b: number): number {
//     return a + b;
//   }
// }
