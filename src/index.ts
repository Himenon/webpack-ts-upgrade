export enum Status {
  good = "Good",
  bad = "Bad",
}

export const main = (status: Status) => {
  console.log(`echo: ${status}`);
}
