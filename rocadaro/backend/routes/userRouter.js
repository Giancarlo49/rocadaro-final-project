import express from "express";
import { getAllUsers, getUserById, createUser, updateUser,
deleteUser } from "../controllers/userController.js"




const userRouter = express.Router();
// Route get all user.
userRouter.get('/', getAllUsers);

// Route to get a user by their ID
userRouter.get('/:id', getUserById);

// Route to create a new user
userRouter.post('/', createUser);

// Route to update a user
userRouter.put('/:id', updateUser);

// Route to delete a user
userRouter.delete('/:id', deleteUser);

export default userRouter
