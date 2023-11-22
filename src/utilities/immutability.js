import update from 'immutability-helper';
import { castArray } from 'lodash';
import randomString from 'randomstring';

function randomStringGenerator() {
  return randomString.generate(10);
}

export function append(arr, itemOrItems) {
  return update(arr, {
    $push: castArray(itemOrItems),
  });
}

export function edit(collection, key, item) {
  return update(collection, {
    [key]: {
      $set: item,
    },
  });
}

export function remove(arr, index) {
  return update(arr, {
    $splice: [[index, 1]],
  });
}

export function insert(obj, item, keyGenerator = randomStringGenerator) {
  const key = keyGenerator(item);

  return edit(obj, key, item);
}

export function unset(obj, key) {
  return update(obj, {
    $unset: [key],
  });
}

export function include(set, itemOrItems) {
  return update(set, {
    $add: castArray(itemOrItems),
  });
}

export function exclude(set, itemOrItems) {
  return update(set, {
    $remove: castArray(itemOrItems),
  });
}
