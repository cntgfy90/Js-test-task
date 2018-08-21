// Providing that we have an array [30, -5, 0, 10, 5],
// we should sort the list in an ascendent order without
// using default sort() provided by JS native language

// For small array size it's suffice InsertionSort algorithm with
// O(n) * O(n) = O(n^2) time complexity
function mySort(list) {
  var listLength = list.length, currentlyCompared, indUnsort, indSort;
	for(indUnsort = 1; indUnsort < listLength; indUnsort++) { // O(n)
		currentlyCompared = list[indUnsort]; // save current value as it can be shift later
		indSort = indUnsort - 1;
	  // Whenever the value in the sorted section is greater than the value
	  // in the unsorted section, shift all items in the sorted section over
	  // by one. This creates space in which to insert the value.
		while (indSort >= 0 && list[indSort] > currentlyCompared) { // O(n)
			list[indSort + 1] = list[indSort];
			indSort--;
		}
		list[indSort + 1] = currentlyCompared;
	}
	return list;
}
console.log(mySort([30, -5, 0, 10, 5])); // output --> [-5,0,5,10,30]
