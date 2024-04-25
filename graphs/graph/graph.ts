/** Graph Node class. */

class UGraphNodeStr {
  value: string;
  adjacent: Set<UGraphNodeStr>;

  constructor(value: string, adjacent = new Set<UGraphNodeStr>()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Undirected graph. */

class UGraphStr {
  nodes: Set<UGraphNodeStr>;

  constructor() {
    this.nodes = new Set();
  }

  /** Add node to graph. */
  addNode(node: UGraphNodeStr): void {
    this.nodes.add(node);
  }

  /** Add array of nodes to graph. */
  addNodes(nodeArray: UGraphNodeStr[]): void {
    for (const node of nodeArray) {
      this.nodes.add(node);
    }
  }

  /** Add edge between v1 and v2. */
  addEdge(v1: UGraphNodeStr, v2: UGraphNodeStr): void {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** Add multiple edges given array of adjacencies */
  addEdges(edgeArray: UGraphNodeStr[][]): void {
    for (const [v1, v2] of edgeArray) {
      this.addEdge(v1, v2);
    }
  }

  /** Remove edge between v1 and v2. */
  removeEdge(v1: UGraphNodeStr, v2: UGraphNodeStr): void {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** Remove node from graph. */
  removeNode(node: UGraphNodeStr): void {
    node.adjacent.clear();
    this.nodes.delete(node);

    for (const current of this.nodes){
      if (current.adjacent.has(node)) {
        current.adjacent.delete(node);
      }
    }
  }
}

export { UGraphNodeStr, UGraphStr };