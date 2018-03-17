$(function() {

	function test() {
		console.log('The function');
	}

	var $init = []; // массив вызываемых функций

	window.onload = function() {
		for (var i in $init) {
			if (typeof($init) == 'function') {
				init[i](); // вызов всех функций
			}
		}
	}

	$init.push(test());


	// Второе решение
	function ready() {
		setTimeout(function () {
			var js = document.createElement('script');
			js.src = 'js/file.js';
			js.async = true;
			js.defer = true;
		}, 10);
	}

	document.addEventListener('DOMContentLoaded', ready);

});
