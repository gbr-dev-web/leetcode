function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
var mergeTwoLists = function (list1, list2) {
  // em resumo ele pega as duas listas itera infinintamente ate uma das listas serem null
  // verifica cada valor atual da lista ex. curr1.val < curr2.val
  // caso um seja maior que o outro o next de current é alterado, e o current vai para o next
  // nisso o next de dummy é atualizado até uma das listas serem null e ele retorna o next de dummy que é a lista junta e ordenada
  let dummyNode = new ListNode(-1);
  let current = dummyNode;

  let curr1 = list1,
    curr2 = list2;

  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      current.next = curr1;
      curr1 = curr1.next;
    } else {
      current.next = curr2;
      curr2 = curr2.next;
    }
    current = current.next;
  }

  // pega o next da lista que nao acabou
  current.next = curr1 !== null ? curr1 : curr2;

  return dummyNode.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

console.log(mergeTwoLists(list1, list2));
