import express from "express";
import { getUsers } from "../src/resolvers/users/getUsers.js";
import { createUser } from "../src/resolvers/users/createUser.js";
import { deleteUser } from "../src/resolvers/users/deleteUser.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.delete("/", deleteUser);