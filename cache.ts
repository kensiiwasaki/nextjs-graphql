import { makeVar } from '@apollo/client'

interface Task {
  title: string
}
// stateの作成
export const todoVar = makeVar<Task[]>([])
