import Block from "./block";

const block = new Block(new Date(), "bar", "zoo", "baz");
console.log(block.toString());
console.log(Block.genesis().toString());
