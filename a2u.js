// Source http://unicodenow.com/

//initialize
var ANSI = new Array();
var UNICODE = new Array();

for(var i = 178; i <= 252; i+=2){
	ANSI.push(i); //mecatar ANSI
	UNICODE.push(1328 + (i-176)/2); //mecatar Unicode
	ANSI.push(i+1); //poqratar ANSI
	UNICODE.push(1376 + (i-176)/2); //poqratar Unicode
}
ANSI.push(168);		UNICODE.push(0x587); //ev

ANSI.push(183);		UNICODE.push(8226);	//poqratar g-n (bullet)
ANSI.push(8226);	UNICODE.push(1379);	//poqratar g-n (bullet)

ANSI.push(39);		UNICODE.push(0x55A); //apostrophe
ANSI.push(176);		UNICODE.push(0x55B); //shesht
ANSI.push(175);		UNICODE.push(0x55C); //bacakanchakan
ANSI.push(170);		UNICODE.push(0x55D); //but
ANSI.push(177);		UNICODE.push(0x55E); //harcakan
ANSI.push(163);		UNICODE.push(0x589); //verjaket
ANSI.push(173);		UNICODE.push(0x58A); //hyphen
ANSI.push(167);		UNICODE.push(0xAB); //bacvogh chakert
ANSI.push(166);		UNICODE.push(0xBB); //pakvogh chakert
ANSI.push(171);		UNICODE.push(0x2C); //storaket
ANSI.push(169);		UNICODE.push(0x2E); //mijaket
ANSI.push(174);		UNICODE.push(0x2026); //bazmaket

ANSI.push(0,0);		UNICODE.push(0,0); //2 hat CUSTOM :)
// end

var ANSIbackup = ANSI.slice(0);	//XEROX!
var UNICODEbackup = UNICODE.slice(0);

function convert(ekac, A2U){// from-n u to-n textareaneri IDnern en
	var arrFrom = A2U ? ANSI : UNICODE;
	var arrTo = A2U ? UNICODE : ANSI;

	var gnacogh = "";
	var len = ekac.length;
	var tar;
	var current; //boolean

	for(var i=0; i<len; i++){
		tar = ekac.charCodeAt(i);
		var FromumKa=false;
		for(var j=0; j<arrFrom.length; j++){
			if(tar==arrFrom[j]){
				if(arrTo[j]=="") {FromumKa=true; break;}
				gnacogh += String.fromCharCode(arrTo[j]);
				FromumKa = true;
				break;
			}
		}
		if(!FromumKa) gnacogh += String.fromCharCode(tar);
	}
	return gnacogh;
}

module.exports = function (text) {
	return convert(text, true);
};
