
export const isAdmin = (user) => {
    return user && user.role === 'admin';
  };

  export const isLoggedIn = (user) => {
    return !!user;
  };
  