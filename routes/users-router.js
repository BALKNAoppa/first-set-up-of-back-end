import express from "express";
import { getUsers } from "../src/resolvers/users/getUsers.js";
import { createUser } from "../src/resolvers/users/createUser.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/", createUser);
// userRouter.post('/', async (req, res) => {
//   try {
//     const newUser = await createUser(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// });
