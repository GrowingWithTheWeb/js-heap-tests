module.exports.run = function (test, Heap) {
  test('should insert items into the heap', t => {
    var heap = new Heap();
    heap.insert(1, null);
    heap.insert(2, null);
    heap.insert(3, null);
    heap.insert(4, null);
    heap.insert(5, null);
    t.same(heap.size(), 5);
    t.end();
  });

  test('should return the inserted node', t => {
    var heap = new Heap();
    var ret = heap.insert(1, {foo: 'bar'});
    t.is(ret.key, 1);
    t.same(ret.value, {foo: 'bar'});
    t.end();
  });
};
