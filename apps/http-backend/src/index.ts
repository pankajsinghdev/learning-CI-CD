import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});

app.post("/signup", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});
app.post("/signin", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "hello there",
  });
});

app.get("/", (req: Request, res: Response) => {
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
