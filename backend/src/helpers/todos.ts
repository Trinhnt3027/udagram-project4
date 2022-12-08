import { TodosAccess } from './todosAcess'
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import * as uuid from 'uuid'

const todoAccess = new TodosAccess()

export async function getTodos(userId: string): Promise<TodoItem[]> {
  return todoAccess.getAllTodos(userId)
}

export async function getTodo(userId: string, todoId: string): Promise<TodoItem> {
  return todoAccess.getTodo(userId, todoId)
}

export async function updateTodo(userId: string, id: string, payload: UpdateTodoRequest) : Promise<void>{
  return todoAccess.updateTodo(userId, id, payload)
}

export async function deleteTodo(userId: string, id: string): Promise<void> {
  return todoAccess.deleteTodo(userId, id)
}

export async function createTodo(
  createTodoRequest: CreateTodoRequest,
  userId: string
): Promise<TodoItem> {
  const todoId = uuid.v4()

  return await todoAccess.createTodo({
    userId,
    todoId,
    name: createTodoRequest.name,
    done: false,
    createdAt: new Date().toISOString(),
    dueDate: createTodoRequest.dueDate
  })
}