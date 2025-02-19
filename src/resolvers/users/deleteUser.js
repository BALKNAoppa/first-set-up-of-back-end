export const users = [];

export const deleteUser = (req, res) => {
    const { username } = req.body;
  
    const userIndex = users.findIndex((u) => u.username === username);
    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }
  
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully!" });
  };