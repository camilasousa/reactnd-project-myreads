export const debounce = (callback, wait, context) => {
  let timeout = null;
  const later = () => callback.apply(context);

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/*
* @description Creates copy of object and adds property with a list with the value
               or update list with value.
* @param {Object} object - The object to be copied
* @param {string} property - The property to be added or updated
* @param {Object} value - The value to be added to list
* @returns {object} - The new object
*/
export const newObjectWithPropertyInList = (object, property, value) => {
  const newObject = { ...object };
  newObject[property] = (newObject[property] || []).concat(value);
  return newObject;
};

/*
* @description Creates copy of object and adds property with value
* @param {Object} object - The object to be copied
* @param {string} property - The property to be added
* @param {Object} value - The value of the property
* @returns {object} - The new object
*/
const newObjectWithProperty = (object, property, value) => {
  const newObject = { ...object };
  newObject[property] = value;
  return newObject;
};

/*
* @description Creates a reduce function to add to accumulator an item
               with key as object[key] and the value as object[value]
               or the object iself if value is not defined
* @param {string} key - The property name used as key
* @param {string} value - The property name used as value
* @returns {function} - The reduce function created
*/
export const keyValueReducer = (key, value) => (accById, object) =>
  newObjectWithProperty(accById, object[key], value ? object[value] : object);

/*
* @description Creates a reduce function to add to accumulator an item
               with key as object[key] and the value as a list with object[value]
               or the object iself if value is not defined
* @param {string} key - The property name used as key
* @param {string} value - The property name used as value
* @returns {function} - The reduce function created
*/
export const keyValueListReducer = (key, value) => (accById, object) =>
  newObjectWithPropertyInList(accById, object[key], value ? object[value] : object);

/*
* @description Invests object properties with values
* @param {string} object - The object to be inverted
* @returns {object} - The inverted object
*/
export const invertObject = object =>
  Object.keys(object)
    .reduce((acc, key) => newObjectWithPropertyInList(acc, object[key], key), {});

/*
* @description Inverts a given object with properties and values as list so each
               item at list is a property.
* @param {string} object - The object to be inverted
* @returns {object} - The inverted object
*/
export const invertListByKey = object =>
  Object.keys(object)
    .map(key => object[key].reduce(
      (acc, value) => newObjectWithProperty(acc, value, key),
      {},
    ))
    .reduce((acc, item) => ({ ...acc, ...item }), {});

