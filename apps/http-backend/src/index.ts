import { prismaClient } from "@repo/db/client";
import express, { Request, Response } from "express";

const app = express();
const PORT = 3002;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});

app.post("/signup", async (req: Request, res: Response) => {
  const { first_name, last_name, email, password } = req.body;
  const user = await prismaClient.user.create({
    data: {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    },
  });
  res.json({
    message: "User Create Successfully",
    user,
  });
});
app.post("/signin", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});

app.get("/user", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});

app.post("/user", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});

app.put("/user", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log("App listening on Port :", PORT);
  } else {
    console.log("Err", err);
  }
});
