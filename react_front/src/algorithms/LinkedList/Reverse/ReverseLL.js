export const ReverseLL = (startNode) => {
  let prev = startNode;
  let current = prev.next;
  let succ = current.next;
  prev.next = null;
  while (succ != null) {
    current.next = prev;
    prev = current;
    current = succ;
    succ = succ.next;
  }
  current.next = prev;
  startNode = current;
  return startNode;
};
