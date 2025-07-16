interface Student {
  name: string;
  std: number;
}

/**
 * Filter out objects from array where name exists in filterArray OR std exists in filterArray
 * @param list - Array of student objects
 * @param filterArray - Array of names (strings) and standards (numbers) to filter out
 * @returns Filtered array excluding matching items
 */
export function filterStudents(list: Student[], filterArray: (string | number)[]): Student[] {
  // Implementation goes here
}