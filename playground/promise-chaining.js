require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5e552ab086e39c21406f885b", { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5e552ab086e39c21406f885b", 2)
  .then(count => {
    console.log(count);
  })
  .catch(error => {
    console.log(error);
  });
