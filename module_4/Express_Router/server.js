import { readFileSync, writeFileSync } from "fs";
import express from "express";

const app = express();
app.use(express.json());

function readData() {
  const data = readFileSync("db.json", "utf-8");
  return JSON.parse(data);
}

function writeData(data) {
  writeFileSync("db.json", JSON.stringify(data, null, 2));
}

app.post("/users", (req, res) => {
  const data = readData();
  data.users.push(req.body);
  writeData(data);
  res.send("user added");
});

app.get("/users", (req, res) => {
  const data = readData();
  res.send(data.users);
});

app.get("/users/:id", (req, res) => {
  const data = readData();
  const user = data.users.find(u => u.id == req.params.id);

  if (!user) return res.send("user not found");
  res.send(user);
});

app.listen(3000, () => {
  console.log("server started");
});

