//fileInputのinputタグで更新があったら
document.getElementById("input").addEventListener('change', (e) => {

	//入力内容を取得
	const input_text=document.getElementById("input").value

	//入力内容から①入力文字のUTF-8コードを取得
	document.getElementById("output_1").innerText = input_text;
		const unicodeArray = Encoding.stringToCode(input_text);　// 文字⇒文字コードに変換
		document.getElementById("output_2").innerText = unicodeArray;
		console.log(input_text);
		console.log(unicodeArray);

	//②入力文字をShift-JISコードに変換
	const sjisArray = Encoding.convert(unicodeArray, {to: 'SJIS',from: 'unicode'	}); //unicode⇒SJIS変換
		document.getElementById("output_3").innerText = sjisArray;
	const sjisArray_str = Encoding.codeToString(sjisArray);　// 文字コード値の配列から文字列に変換
	console.log(sjisArray_str);
		document.getElementById("output_4").innerText = sjisArray_str;
		console.log(sjisArray);
		console.log(sjisArray_str);

	//③Shift-JISコードを再度UTF-8に変換
	const unicodeArray2 = Encoding.convert(sjisArray, {to: 'unicode',from: 'SJIS'}); //SJIS⇒unicode変換
		document.getElementById("output_5").innerText = unicodeArray2;
	const unicodeArray2_str = Encoding.codeToString(unicodeArray2);　// 文字コード値の配列から文字列に変換
		document.getElementById("output_6").innerText = unicodeArray2_str;
		console.log(unicodeArray2);
		console.log(unicodeArray2_str);

	if(input_text == unicodeArray2_str){
		document.getElementById("output").innerText = "○ 問題なし";
	}else{
		document.getElementById("output").innerText = "× マッピング外文字あり";
	};

}, false);
