import { createServer, Model } from "miragejs";
import * as TodoColor from "../shared/TodoColor";

const setupServer = () => {
  createServer({
    models: {
      todo: Model,
    },
    routes() {
      this.namespace = "api";
      this.timing = 0;
      this.get("/todos", (schema) => schema.todos.all());

      this.post("/todos", (schema, request) => {
        const newTodo = JSON.parse(request.requestBody);
        return schema.todos.create(newTodo);
      });
      this.patch("/todos/:id", (schema, request) => {
        const id = request.params.id;
        const todo = JSON.parse(request.requestBody);
        return schema.todos.find(id).update(todo);
      });
      this.get("/todos/:id", (schema, request) => {
        const id = request.params.id;
        return schema.todos.find(id);
      });
      this.delete("/todos/:id", (schema, request) => {
        const id = request.params.id;
        return schema.todos.find(id).destroy();
      });
      this.patch("/todos", (schema, request) => {
        const todoAttributes = JSON.parse(request.requestBody);
        const todos = schema.todos.all().models;
        todos.forEach((todo) => {
          schema.todos.find(todo.id).update(todoAttributes);
        });
        return schema.todos.all();
      });
      this.delete("/todos", (schema, request) => {
        const condition = JSON.parse(request.requestBody);
        const todos = schema.todos.where(condition).models;
        todos.forEach((todo) => schema.todos.find(todo.id).destroy());
      });
    },
    seeds(server) {
      server.create("todo", {
        text: "todo 1",
        completed: true,
        color: TodoColor.blue,
      });
      server.create("todo", {
        text: "todo 2",
        completed: false,
        color: TodoColor.red,
      });
      server.create("todo", {
        text: "todo 3",
        completed: false,
        color: TodoColor.orange,
      });
    },
  });
};

export default setupServer;
