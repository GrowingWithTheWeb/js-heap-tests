'use strict';

module.exports.run = function (test, Heap) {
  test('should work with string keys', function (t) {
    var heap = new Heap();
    var node3 = heap.insert('f', null);
    var node4 = heap.insert('o', null);
    var node2 = heap.insert('c', null);
    var node1 = heap.insert('a', null);
    var node5 = heap.insert('q', null);
    t.is(heap.size(), 5);
    t.same(heap.extractMinimum().key, node1.key);
    t.same(heap.extractMinimum().key, node2.key);
    t.same(heap.extractMinimum().key, node3.key);
    t.same(heap.extractMinimum().key, node4.key);
    t.same(heap.extractMinimum().key, node5.key);
    t.true(heap.isEmpty());
    t.end();
  });

  test('should give an empty heap after inserting and extracting 1000 in-order elements', function (t) {
    var heap = new Heap();
    for (let i = 0; i < 1000; i++) {
      heap.insert(i, i);
    }
    for (let i = 0; i < 1000; i++) {
      heap.extractMinimum();
    }
    t.true(heap.isEmpty());
    t.end();
  });

  test('should give an empty heap after inserting and extracting 1000 reversed elements', function (t) {
    var heap = new Heap();
    for (let i = 0; i < 1000; i++) {
      heap.insert(i, i);
    }
    for (let i = 0; i < 1000; i++) {
      heap.extractMinimum();
    }
    t.true(heap.isEmpty());
    t.end();
  });

  test('should give an empty heap after inserting and extracting 1000 pseudo-randomized elements', function (t) {
    var heap = new Heap();
    for (let i = 0; i < 1000; i++) {
      if (i % 2 === 0) {
        heap.insert(i, i);
      } else {
        heap.insert(999 - i, 999 - i);
      }
    }
    for (let i = 0; i < 1000; i++) {
      heap.extractMinimum();
    }
    t.true(heap.isEmpty());
    t.end();
  });

  test('should handle 1000 shuffled elements', function (t) {
    var heap = new Heap();
    var input = [];
    for (let i = 0; i < 1000; i++) {
      input.push(i);
    }
    // shuffle
    for (let i = 0; i < 1000; i++) {
      var swapWith = Math.floor(Math.random() * 1000);
      var temp = input[i];
      input[i] = input[swapWith];
      input[swapWith] = temp;
    }
    // insert
    for (let i = 0; i < 1000; i++) {
      heap.insert(input[i], null);
    }
    // extract
    var output = [];
    var errorReported = false;
    var counter = 0;
    while (!heap.isEmpty()) {
      output.push(heap.extractMinimum().key);
      if (!errorReported && counter !== output[output.length - 1]) {
        t.fail('the heap property was not maintained (elements in order 0, 1, 2, ..., 997, 998, 999)');
      }
      counter++;
    }
    t.is(output.length, 1000);
    t.end();
  });
};
