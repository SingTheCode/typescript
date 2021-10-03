{
  // Enum 상수를 묶어서 관리할 수 있음 but 가능한 쓰지 않는 것이 좋아 => union으로 대체
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";

  enum Days {
    Monday = 1, // 1
    Tuesday, // 2
    Wednesday, // 3
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(Days.Tuesday);
  const day = Days.Satarday;
  console.log(day);

  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "Wednesday";
}
