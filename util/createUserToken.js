const createUserToken = (user) => {
  return {
    name: user.name,
    userID: user._id,
    image: user.image
  };
};

module.exports = createUserToken;
