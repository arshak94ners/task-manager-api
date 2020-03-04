require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5e5623a7c5d49222ccadcb98").then(task => {
//   console.log(task);
//   return Task.countDocuments({ completed: true })
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

const findDeleteTaskById = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

findDeleteTaskById("5e562448450c9e21ecb07e49")
  .then(count => {
    console.log(count);
  })
  .catch(error => {
    console.log("errororik", error);
  });
