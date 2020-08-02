let binario = document.querySelector("#binario");
		let decimal = document.querySelector("#decimal");
		let botao = document.querySelector("button");
		

		function converter() {
			soma = 0;
			binariostr = binario.value
			indice = binariostr.length - 1;
			
			for(i = indice; i >= 0; i-- ){
				// console.log(`indice = ${indice}`);
				// console.log(`i = ${i}`);
				soma = soma + binariostr[i] * Math.pow(2,indice - i);
				// console.log(`soma = ${soma}`);
				decimal.value = soma;
			}

		}

		botao.addEventListener("click",converter);