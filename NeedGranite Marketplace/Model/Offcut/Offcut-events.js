

model.Offcut.DisplaySize.onGet = function() {
	// Add your code here;
	return toString(ds.offcut.length) + "x" + toString(ds.offcut.width);
};
