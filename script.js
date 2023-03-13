function calculateMinCost(event) {
	event.preventDefault();
  //your code here
	const inputEle = document.querySelector('input').value
    const arr = inputEle.split(',');

	arr.sort(function(a,b){ return a-b; })

	var cost = 0;
	while (arr.length > 1) {
		var res = Number(arr[0]) + Number(arr[1]);
		arr.push(res);
		cont += res;
		arr.shift();
		arr.shift();
		arr.sort(function(a,b){ return a-b; })

		var result = document.getElementById('result').textContent = cost;

	}

}  
