var sethkoch = {};

sethkoch.identity = function(val){
	return val;
}

sethkoch.first = function(array, n){
	return n === undefined ? array[0] : array.slice(0, n);
}

sethkoch.last = function(array, n){
	if(n === 0){
		return [];
	}
	return n === undefined ? array[array.length -1] : array.slice(-n);
}

sethkoch.fors =function(collection, callback){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i++){
			callback(collection[i], i, collection);
		}
	}
	else{
		for(var key in collection){
			callback(collection[key], key, collection);
		}
	}
}


sethkoch.seeker = function(array, target){
	var result = -1;
	sethkoch.fors(array, function(item, index){
		if(target === item && result === -1){
			result = index;
		}
	});
	return result;
}

// returns -1 if not present in the arry, else returns the index of the second instance of the target
sethkoch.seeker2 = function(array, target){
	var counter = 0;
	var result = -1;
	sethkoch.fors(array, function(item, index){
		if(target === item && counter === 0){
			counter ++;
		}
		if(target === item && counter === 1){
			result = index;
		}
	})
	return result;
}



sethkoch.cleaner = function(array, test){
	var filterArray = [];
	sethkoch.fors(array, function(item){
		if(test(item)){
			filterArray.push(item);
		}
	})
	return filterArray;
}



sethkoch.onlyOne = function(array){
	var onlyOneArray = [];
	sethkoch.fors(array, function(item){
		if(sethkoch.seeker(onlyOneArray, item) === -1){
			onlyOneArray.push(item);
		}
	})
	return onlyOneArray;
}


sethkoch.obliterate = function(array, callback){
	var obliterateArray = [];
	sethkoch.fors(array, function(item){
		obliterate.push(callback(item));

	});
	return obliterateArray;
}


sethkoch.objObliterate = function(obj, callback){
	var objObliterate = {};
	sethkoch.fors(obj, function(item, key){
		objObliterate[key] = callback(item);
	})
	return objObliterate;
}

sethkoch.wittle = function(collection, callback, accumulator){
	var initial = 0;
	sethkoch.fors(collection, function(item){
		if(accumulator === undefined && initial === 0){
			accumulator = item;
		}
		else{
			accumulator = callback(accumulator, item);
			initial ++;
		}
	})
	return accumulator
}


sethkoch.valInCol = function(collection, value){
	return sethkoch.wittle(collection, function(a, b){
		return a || b === value;
	}, false);

}

sethkoch.allPass = function(collection, test){
	test = test || sethkoch.identity;
	return !! sethkoch.wittle(collection, function(a, b){
		return a && test(b);
	}, true)
};


sethkoch.anyPass = function(collection, test){
	test = test || sethkoch.identity;
	return !! sethkoch.wittle(collection, function(a, b){
		return a || test(b);
	}, false);
}


sethkoch.merge = function(obj){
	sethkoch.fors(arguments, function(item){
		sethkoch.fors(item, function(value, prop){
			obj[prop] = value;
		})
	})
	return obj;
}

sethkoch.printSpec = function(elem){

	 function popup(data) {

        var mywindow = window.open('', 'my-div', 'height=400,width=600');
        mywindow.document.write('<html><head><title>secretcodeapp.com</title>');
        /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10

        mywindow.print();
        mywindow.close();

        return true;
    }
    
        popup($(elem).html());

    }

    





















