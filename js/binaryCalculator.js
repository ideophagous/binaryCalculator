var operationUsed = false;
var numberWritten = false;
var operation;

document.getElementById('btn0').onclick = function() {
	document.getElementById('res').innerHTML+='0';
	numberWritten = true;
};

document.getElementById('btn1').onclick = function() {
	document.getElementById('res').innerHTML+='1';
	numberWritten = true;
};

document.getElementById('btnSum').onclick = function() {
	if(!operationUsed && numberWritten){
		document.getElementById('res').innerHTML+='+';
		operation = '+';
		operationUsed = true;
		numberWritten = false;
	}
		
};

document.getElementById('btnSub').onclick = function() {
	if(!operationUsed && numberWritten){
		document.getElementById('res').innerHTML+='-';
		operation = '-';
		operationUsed = true;
		numberWritten = false;
	}
		
};

document.getElementById('btnMul').onclick = function() {
	if(!operationUsed && numberWritten){
		document.getElementById('res').innerHTML+='x';
		operation = '*';
		operationUsed = true;
		numberWritten = false;
	}
   
};

document.getElementById('btnDiv').onclick = function() {
	if(!operationUsed && numberWritten){
		document.getElementById('res').innerHTML+='/';
		operation = '/';
		operationUsed = true;
		numberWritten = false;
	}
};

document.getElementById('btnCtrl').onclick = function() {
   document.getElementById('res').innerHTML='';
   operationUsed = false;
   numberWritten = false;
};

document.getElementById('btnEql').onclick = function() {
	if(operationUsed && numberWritten){
	   operationUsed = false;
	   var operands = document.getElementById('res').innerHTML.split(/[\+\x\-\/]/);
	   var result = parseInt(operands[0],2);
	   if(operation=='+')
			result+=parseInt(operands[1],2);
	   else
			if(operation=='-')
				result-=parseInt(operands[1],2);
			else
				if(operation=='*')
					result*=parseInt(operands[1],2);
				else
					{
						var op = parseInt(operands[1],2);
						result=(result-result%op)/op;
					}
						
	   document.getElementById('res').innerHTML = result.toString(2);
	   operation = '';
	}
};