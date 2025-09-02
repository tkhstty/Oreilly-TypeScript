type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";

function getNextDay(w: Weekday): Day {
  switch (w) {
    case "Mon": return "Tue"
    // 以下のweekDayのパターンを網羅出来ていない or returnにundefinedがないため、エラーになる
    // case "Tue": return "Wed"
    // case "Wed": return "Thu"
    // case "Thu": return "Fri"
    // case "Fri": return "Sat"
  }
}

let nextDayWithRecord: Record<Weekday, Day> = {
  "Mon": "Tue",
  "Tue": "Wed",
  "Wed": "Thu",
  "Thu": "Fri",
  "Fri": "Sat",
}

let nextDayWithMap: {[K in Weekday]: Day} = {
  Mon: "Tue",
  Tue: "Wed",
  Wed: "Thu",
  Thu: "Fri",
  Fri: "Sat",

}