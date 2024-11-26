import { users } from "./mockData"

// Login function with password validation
export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const curUser = users.find((user) => user.email === email)
      if (!curUser) {
        reject("User not found")
      } else if (curUser.password !== password) {
        reject("Invalid password")
      } else {
        // Exclude the password from the resolved user object
        const { password, ...user } = curUser
        resolve({ user })
      }
    }, 1000)
  })
}
