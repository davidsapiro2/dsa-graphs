import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  // Using bfs, we have a queue and check level by level. Also a seen array to avoid
  // hitting the same nodes.

  let count = 0;

  let toVisit = new Queue<[UGraphNodeStr, number]>([[start, count]]);
  let seen = new Set();

  while (!toVisit.isEmpty()){
    const [node, count] = toVisit.dequeue();
    if ( node === sought ) {
      return count;
    }
    for (let adj of node.adjacent){
      if (!seen.has(adj)) {
        toVisit.enqueue([adj, count+1])
        seen.add(adj);
      }
    }
  }
  return Infinity;
}

export { fewestEdges };


//Queue: [[R, 0]]
//Seen: [R]
