// user data 
export const users = [
    {
      name: "shopdash",
      email: "shopdash@gmail.com",
      password: "password",
      image: '/images/users/user-1.jpg',
    },
    {
      name: "eshop",
      email: "eshop@gmail.com",
      password: "password",
      image: '/images/users/user-1.jpg',
    },
    
  ]
  
  export type User = (typeof users)[number]
  
  export const getUserByEmail = (email: string) => {
    return users.find((user) => user.email === email)
  }