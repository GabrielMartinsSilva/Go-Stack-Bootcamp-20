import { Request, Response } from "express";

import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "gabriel@gmail.com",
    password: "123",
    techs: [
      "NodeJS",
      "ReactJs",
      "React Native",
      { title: "JavaScript", experience: 100 },
    ],
  });
}
