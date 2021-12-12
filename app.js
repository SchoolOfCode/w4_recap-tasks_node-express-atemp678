import express from "express";

import users from "./data/users.js";

import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/users", async function (req, res) {
  const allUsers = await getUsers();
  res.json({
    success: true,
    payload: users,
  });
});

app.get("/users/:id", async function (req, res) {
  const userByID = await getUserByID();
  res.json({
    success: true,
    payload: userByID,
  });
});

app.post("/users", async function (req, res) {
  let createUserNew = req.body;
  createUserNew = await createUser();
  res.json({
    success: true,
    payload: createUserNew,
  });
});

app.put("/users/:id", async function (req, res) {
  let updateUser = await updateUserByID(req.params.id, req.body);
  res.json({
    success: true,
    payload: updateUser,
  });
});

app.delete("/user/:id", async function (req, res) {
  const deletedUser = await deleteUserByID(req.params.id);
  res.json({
    success: true,
    payload: deletedUser,
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
