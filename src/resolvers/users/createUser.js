export const users = [];

export const createUser = (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  users.push(req.body);

  res.json({ message: "Signup successful!" });
};
