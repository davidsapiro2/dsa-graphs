import { Queue } from "../common/queue";
import { Stack } from "../common/stack";
import { UGraphNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: UGraphNodeStr,
    result: string[] = [],
    visited = new Set([start])): string[] {
      //Base case: no more adjacencies/nodes in visited set

      if (!start) {
        return result;
      }

      if (visited.size === 0){
        return result;
      }

      result

      for (let adj of node.adjacent){
        if (!seen.includes(adj.value)){
          toVisit.push(adj);
          seen.push(adj.value);
        }
      }


  return ["todo"];
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): string[] {
  let toVisit = new Stack([start]);
  let seen : string[] = [start.value];
  let result : string[] = [];

  while (!toVisit.isEmpty()){
    const node = toVisit.pop();
    result.push(node.value);

    for (let adj of node.adjacent){
      if (!seen.includes(adj.value)){
        toVisit.push(adj);
        seen.push(adj.value);
      }
    }
  }

  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  let toVisit = new Queue([start]);
  let seen : string[] = [start.value];
  let result : string[] = [];

  while (!toVisit.isEmpty()){
    const node = toVisit.dequeue();
    result.push(node.value);

    for (let adj of node.adjacent){
      if (!seen.includes(adj.value)){
        toVisit.enqueue(adj);
        seen.push(adj.value);
      }
    }
  }

  return result;

  // let toVisit = new Queue([start]);
  // let seen : string[] = [start.value];

  // while (!toVisit.isEmpty()){
  //   const node = toVisit.dequeue();

  //   for (let adj of node.adjacent){
  //     if (!seen.includes(adj.value)){
  //       toVisit.enqueue(adj);
  //       seen.push(adj.value);
  //     }
  //   }
  // }

  // return seen;
}


export { iDfs, rDfs, bfs };