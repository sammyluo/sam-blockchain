import { SHA256 } from "crypto-js";

type BlockData = any;

class Block {
  timestamp: number;
  lastHash: string;
  hash: string;
  data: BlockData;

  constructor(
    timestamp: number,
    lastHash: string,
    hash: string,
    data: BlockData
  ) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString = () => {
    return `Block -
      Timestamp: ${this.timestamp}
      Last hash: ${this.lastHash.substring(0, 10)}
      Hash: ${this.hash.substring(0, 10)}
      Data: ${this.data}`;
  };

  static genesis = () => {
    return new Block(Date.now(), "-----", "f1r57-h45h", []);
  };

  static mineBlock = (lastBlock: Block, data: BlockData) => {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timestamp, lastHash, data);

    return new Block(timestamp, lastHash, hash, data);
  };

  static hash = (timestamp: number, lastHash: string, data: BlockData) => {
    return SHA256(`${timestamp}${lastHash}${data}`).toString();
  };
}

export default Block;
