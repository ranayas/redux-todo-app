import { createServer, Model } from "miragejs";
import * as TodoColors from "../shared/TodoColors";

const setupServer = () => {
    createServer({
      models: {
        todo: Model,
      },
      routes() {
        this.namespace = "api";
        this.get("/todos", (schema) => schema.todos.all());

        this.post("/todos", (schema, request) => {
          const newTodo = JSON.parse(request.requestBody);
          return schema.todos.create(newTodo);
        });
      },
      seeds(server) {
        server.create("todo", { text: "todo 1", completed: false, color: TodoColors.blue});
        server.create("todo", { text: "todo 2", completed: false, color: TodoColors.blue});
        server.create("todo", { text: "todo 3", completed: false, color: TodoColors.blue});
      },
    });
  };

export default setupServer