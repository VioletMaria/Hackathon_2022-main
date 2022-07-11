const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get("/api/users", UserController.getAllUsers)
  app.post("/api/users/register", UserController.registerUser)
  app.post("/api/users/login", UserController.login)
  app.get("/api/users/getLoggedInUser", UserController.getLoggedInUser)
  app.get("/api/users/logout", UserController.logout)

  app.get("/api/users/getUserById/:_id", UserController.getUserById)

  app.delete("/api/users/delete/:_id", UserController.deleteAnExistingUser);
  app.patch("/api/users/update/:_id", UserController.updateExistingUser);

  //Create A POST 
  app.post("/api/users/createPost/:_id", UserController.createPost);

  //READ A POST OF A USER
  app.get("/api/users/getPost/:_id", UserController.getPost)

  // Get all posts
  app.get("/api/users/getAllPosts", UserController.getAllPosts)

  //Update a Post
  app.patch("/api/users/updatePost/:_id", UserController.updatePost)

  //DELETE A POST 
  app.delete("/api/users/deletePost/:_id", UserController.deletePost)

  //ADD A FOLLOWER
  app.put("/api/users/addFollower/:_id/:_loggedInUser", UserController.addFollower);

  // FIND BY TYPE
  app.get("/api/users/getResourceByType/:type", UserController.getResourceByType)

}
