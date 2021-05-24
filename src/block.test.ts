import Block from "./block";

describe("Block", () => {
  let data, lastBlock, block;

  beforeEach(() => {
    data = "foo";
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it("should set the data properly", () => {
    expect(block.data).toEqual(data);
  });

  it("should set the hash properly", () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });
});
