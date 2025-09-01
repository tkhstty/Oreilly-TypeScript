type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (array, f) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

filter([1, 2, 3], _ => _ > 2)
filter(["a", "b"], _ => _ !== "b")

let names = [
  {firstName: "beth"},
  {firstName: "caitlyn"},
  {firstName: "xin"},
]
filter(names, _ => _.firstName.startsWith("b"))