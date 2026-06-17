#!/usr/bin/env node


import { LinkedList } from "./index.js";
import { Node } from "./index.js";




const newlist = new LinkedList();


newlist.append("1");
newlist.append("2");
newlist.append("3");

console.log("Initial:");
console.log(newlist.toString());

newlist.insertAt(3, 10, 11)

console.log("After insert:");
console.log(newlist.toString());