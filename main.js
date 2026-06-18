#!/usr/bin/env node


import { LinkedList } from "./index.js";


const newlist = new LinkedList();


newlist.append("1");
newlist.append("2");
newlist.append("3");

console.log("Initial:");
console.log(newlist.toString());

//newlist.insertAt(2, 10, 11)

const at = newlist.contains("4");

// console.log("After insert:");"
// console.log(newlist.toString());

console.log(at);