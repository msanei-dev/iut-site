// shared/types.ts
export type Day = 'Saturday' | 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';

export interface Slot {
  day: Day;
  start: string;
  end: string;
}

export interface Professor {
  name: string;
}

export interface Section {
  courseCode: string;
  sectionCode: string;
  courseName: string;
  professor: Professor;
  schedule: Slot[];
}

export interface Schedule {
  sections: Section[];
}
