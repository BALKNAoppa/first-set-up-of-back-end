import { users } from "./createUser.js";

export const getUsers = (req, res) => {
  res.json(users);
};
