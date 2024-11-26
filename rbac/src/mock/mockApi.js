import { users, posts } from "./mockData"

// Login function with password validation
export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.email === email)
      if (!user) {
        reject("User not found")
      } else if (user.password !== password) {
        reject("Invalid password")
      } else {
        // Exclude the password from the resolved user object
        const { password, ...userWithoutPassword } = user
        resolve(userWithoutPassword)
      }
    }, 1000)
  })
}

// Automatically generate unique ID for new users
export const createUser = (newUser) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check for duplicate email
      if (users.some((user) => user.email === newUser.email)) {
        reject("Email already exists")
      } else {
        const id = users.length ? users[users.length - 1].id + 1 : 1 // Generate new ID
        const userToAdd = { ...newUser, id } // Add the ID to the user object
        users.push(userToAdd)
        resolve(userToAdd)
      }
    }, 1000)
  })
}

// Automatically generate unique ID for new posts
export const createPost = (newPost) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1 // Generate new ID
      const postToAdd = { ...newPost, id } // Add the ID to the post object
      posts.push(postToAdd)
      resolve(postToAdd)
    }, 1000)
  })
}

// Example for deleting a user
export const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = users.findIndex((user) => user.id === userId)
      if (userIndex > -1) {
        const deletedUser = users.splice(userIndex, 1)
        resolve(deletedUser[0])
      } else {
        reject("User not found")
      }
    }, 1000)
  })
}

// Example for deleting a post
export const deletePost = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const postIndex = posts.findIndex((post) => post.id === postId)
      if (postIndex > -1) {
        const deletedPost = posts.splice(postIndex, 1)
        resolve(deletedPost[0])
      } else {
        reject("Post not found")
      }
    }, 1000)
  })
}
