//Prevent Form Send:
const form = document.querySelector('#formIMC');
form.addEventListener('submit', function (e) {
  e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
      setResultado('Peso Inválido!', false);
      return; //O return pára a exeucao do script/funcao!
    }
    if (!altura) {
      setResultado('Altura Inválida!', false);
      return; //O return pára a exeucao do script/funcao!
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);
    const msg = `Seu IMC é ${imc} (${nivelIMC}).`;
    //console.log(imc, nivelIMC)
    setResultado(msg, true);

  });
    
    //Funcao para calcular o IMC:
    function getIMC(peso, altura){
      const imc = peso / (altura**2);
      return imc.toFixed(2);
    }
    //Funcao para obter a faixa do IMC:
    function getNivelIMC(imc){
      const nivel = ['Abaixo do Peso','Peso Normal','Sobrepeso','Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3'];

      //Usando IF sem Else If:
      // if (imc >= 39.9){return nivel[5];}
      // if (imc >= 34.9){return nivel[4];}
      // if (imc >= 29.9){return nivel[5];}
      // if (imc >= 24.9){return nivel[6];}
      // if (imc >= 18.5){return nivel[1];}
      // if (imc < 18.5){return nivel[0];}

      //Se vc só tem 1 linha de código no if, não é necessário as {}
      if (imc >= 39.9) return nivel[5];
      if (imc >= 34.9) return nivel[4];
      if (imc >= 29.9) return nivel[3];
      if (imc >= 24.9) return nivel[2];
      if (imc >= 18.5) return nivel[1];
      if (imc < 18.5) return nivel[0];

    }

 

 
function criaP(){
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ''; 
  const p = criaP();
  //Mudando a cor da div do resultado do imc dependendo do valor calculado:
  if (isValid) {
      p.classList.add('paragrafo-resultado');
    } else {
      p.classList.add('bad');
    }
  p.innerHTML = msg;
  resultado.appendChild(p);
}