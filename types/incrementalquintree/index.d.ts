/** Declaration file generated by dts-gen */

declare module "incrementalquintree" {
  export class IncrementalQuinTree {
    constructor(
      _depth: any,
      _zeroValue: any,
      _leavesPerNode: any,
      _hashFunc: any
    );

    copy(): any;

    equals(t: any): any;

    genMerklePath(_index: any): any;

    genMerkleSubrootPath(_startIndex: any, _endIndex: any): any;

    getLeaf(_index: any): any;

    hash(_leaves: any): any;

    insert(_value: any): void;

    update(_index: any, _value: any): void;

    static verifyMerklePath(_proof: any, _hashFunc: any): any;
  }

  export class MultiIncrementalQuinTree {
    constructor(
      _depth: any,
      _zeroValue: any,
      _leavesPerNode: any,
      _hashFunc: any
    );

    copy(): any;

    equals(t: any): any;

    genMerklePath(_absoluteIndex: any): any;

    genMerkleSubrootPath(_absoluteStartIndex: any, _absoluteEndIndex: any): any;

    getLeaf(_index: any): any;

    hash(_leaves: any): any;

    insert(_value: any): void;

    update(_absoluteIndex: any, _value: any): void;

    static verifyMerklePath(_proof: any, _hashFunc: any): any;
  }
}