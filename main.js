#!/usr/bin/env node


import { LinkedList } from "./index.js";
import { Node } from "./index.js";


const list = new LinkedList();


//console.log(list.toString());

list.append("1");
list.append("2");
list.append("3");

//list.insertAt(1, 10, 11);

console.log(list.toString());