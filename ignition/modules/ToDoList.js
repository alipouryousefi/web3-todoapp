const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("ToDoListModule", (m) => {

  const lock = m.contract("ToDoList");

  return { lock };
});
