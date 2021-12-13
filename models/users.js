import users from "../data/users.js";

// getUsers, should return all users.
// get getUserByID should return the particular user we are looking for
// createUser should add a user to the collection and return the new user
// updateUserByID should replace the user at a certain ID with an updated version and return the new user
// deleteUserByID should remove the specific user from the population, and return the deleted user

// GET ALL USERS
export async function getUsers() {
  return users;
}

// GET A USER BY ID
export async function getUserByID(id) {
  const userById = users.find(({ id }) => id === id);
  if (userById) {
    return userById;
  }
}

// CREATE A USER
export async function createUser(user) {
  //take in new user
  //add it to user database
  //return the new user
  users.push(user);
  return users[users.length - 1];
}

// UPDATE A USER BY ID
export async function updateUserByID(id, updates) {
  //take in the id, take in an updated user
  //find the user with the id matching what we were given.
  //replace that user with the updates
  //return new user
  const foundIndex = users.findIndex(function (user) {
    return user.id === id;
  });
  users[foundIndex] = updates;
  return users[foundIndex];
};

// DELETE A USER BY ID
export async function deleteUserByID(id) {
  //take an item with that id
  //find that item from the array
  const foundIndex = users.findIndex(function (user) {
    return user.id === id;
  });
  const item = users[foundIndex];
  //remove it from array
  //return that removed item
  users.splice(foundIndex, 1);
  return item;
}
