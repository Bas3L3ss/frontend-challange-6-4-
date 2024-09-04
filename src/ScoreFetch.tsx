export function saveScoreToLocalStorage(value: number): void {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem("score", serializedValue);
  } catch (error) {
    console.error("Error saving to local storage", error);
  }
}

export function getScoreFromLocalStorage(): number {
  try {
    const serializedValue = localStorage.getItem("score");
    if (serializedValue === null) {
      return 0;
    }
    return JSON.parse(serializedValue) as number;
  } catch (error) {
    console.error("Error retrieving from local storage", error);
    return 0;
  }
}
