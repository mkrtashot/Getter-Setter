"use strict";

const obj = {
  nameUser: [],
  get user() {
    return obj.nameUser;
  },
  set user(value) {
    let valueNew = value.split(", ");
    for (let i = 0; i < valueNew.length; i++) {
      let item = valueNew[i] + ", " + valueNew[i].length;
      obj.nameUser.push(item);
    }
  },
};

obj.user = "Hovhannes, Sona";

console.log(obj.user);
