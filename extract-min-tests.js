'use strict';

module.exports.run = function (test, Heap) {
  test('extract-min should return undefined on an empty heap', function (t) {
    var heap = new Heap();
    t.is(heap.extractMinimum(), undefined);
  });

  test('should extract the minimum item from a heap', function (t) {
    var heap = new Heap();
    var node5 = heap.insert(5, null);
    var node3 = heap.insert(3, null);
    var node4 = heap.insert(4, null);
    var node1 = heap.insert(1, null);
    var node2 = heap.insert(2, null);
    t.deepEqual(heap.extractMinimum().key, node1.key);
    t.deepEqual(heap.extractMinimum().key, node2.key);
    t.deepEqual(heap.extractMinimum().key, node3.key);
    t.deepEqual(heap.extractMinimum().key, node4.key);
    t.deepEqual(heap.extractMinimum().key, node5.key);
  });

  test('should extract the minimum item from a jumbled heap', function (t) {
    var heap = new Heap();
    var node1 = heap.insert(1, null);
    var node4 = heap.insert(4, null);
    var node3 = heap.insert(3, null);
    var node5 = heap.insert(5, null);
    var node2 = heap.insert(2, null);
    t.deepEqual(heap.extractMinimum().key, node1.key);
    t.deepEqual(heap.extractMinimum().key, node2.key);
    t.deepEqual(heap.extractMinimum().key, node3.key);
    t.deepEqual(heap.extractMinimum().key, node4.key);
    t.deepEqual(heap.extractMinimum().key, node5.key);
  });

  test('should extract the minimum item from a heap containing negative items', function (t) {
    var heap = new Heap();
    var node1 = heap.insert(-9, null);
    var node4 = heap.insert(6, null);
    var node3 = heap.insert(3, null);
    var node5 = heap.insert(10, null);
    var node2 = heap.insert(-4, null);
    t.deepEqual(heap.extractMinimum().key, node1.key);
    t.deepEqual(heap.extractMinimum().key, node2.key);
    t.deepEqual(heap.extractMinimum().key, node3.key);
    t.deepEqual(heap.extractMinimum().key, node4.key);
    t.deepEqual(heap.extractMinimum().key, node5.key);
  });
};
