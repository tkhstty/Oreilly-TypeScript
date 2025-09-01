// interfaceとtypeの違い: 1.交差型の型判定
interface A {
  good(x: number): string
  bad(x: number): string
}

// interfaceではエラーになる
interface B extends A {
  good(x: string | number): string
  bad(x: string): string
}

type A2= {
  good(x: number): string
  bad(x: number): string
}

// typeではうまいことやってくれちゃうやってくれちゃう
type B2 = A2 & {
  good(x: string | number): string
  bad(x: string): string
}


// interfaceとtypeの違い: 2. 宣言のマージ可否
interface User {
  name: string
}

interface User {
  age: number
}

// 宣言のマージ可
let user: User = {
  name: "taro",
  age: 20
}

type User2 = {
  name: string
}

// 宣言のマージ不可
type User2 = {
  age: number
}