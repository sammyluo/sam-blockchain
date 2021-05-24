class Block {
  timestamp: Date;
  lastHash: string;
  hash: string;
  data: any;

  constructor(timestamp: Date, lastHash: string, hash: string, data: any) {
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
}

export default Block;
