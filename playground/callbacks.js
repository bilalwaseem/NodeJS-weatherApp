var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Bilal'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);

};

getUser(42, (userObj) => {
  console.log(userObj);
});
