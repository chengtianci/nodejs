
	var $doc = document;
	var $wH = window.innerHeight;
	var $wW = window.innerWidth;
	var $Viewindow = document.getElementById('view');//get动态 querry静态
	var $oCon = document.getElementById('con');
	var $aCols = document.getElementsByClassName('col');
	var $oUp = document.getElementsByClassName('up');
	var $oRight = document.getElementsByClassName('right');
	var $oDown = document.getElementsByClassName('down');
	var $oLeft = document.getElementsByClassName('left');
	init();//初始化

	function init() {//初始化function
		$Viewindow.style.height = $wH + "px"; //固定可视窗口的高度
		$oCon.style.width  = $wW*($aCols.length) + 'px';//
		for (var i = 0, len = $aCols.length;i < len ; i++) {
			$aCols[i].style.width = $wW + 'px';
			$aCols[i].style.left = $wW*i +'px';
			$aCols[i].style.height = $wH*$aCols[i].children.length + 'px';
			for (var j = 0,l = $aCols[i].children.length; j < l ; j++) {
				$aCols[i].children[j].style.height = $wH + 'px';
				// console.log($aCols[i].children[j].children[0]);
				// $aCols[i].children[j].children[0].style.
			}
		}
	}
	$oUp[0].onclick = function () {
		for (var i = 0,len = $aCols.length; i < len ; i++) {
			$aCols[i].style.top = $aCols[i].offsetTop - $wH + 'px';
		}
	}
	$oRight[0].onclick = function () {
		for (var i = 0,len = $aCols.length; i < len ; i++) {
			$aCols[i].style.left = $aCols[i].offsetLeft - $wW + 'px';
		}
	}
	$oDown[0].onclick = function () {
		for (var i = 0,len = $aCols.length; i < len ; i++) {
			$aCols[i].style.top = $aCols[i].offsetTop + $wH + 'px';
		}	
	}
	$oLeft[0].onclick = function () {
		for (var i = 0,len = $aCols.length; i < len ; i++) {
			$aCols[i].style.left = $aCols[i].offsetLeft + $wW + 'px';
		}
	}

