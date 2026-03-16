function calcular(){

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let opcoes = document.getElementById("opcoes").value;


    let resultado;

    if(opcoes == "1"){
        resultado = n1+n2;
    }else if(opcoes == "2"){
        resultado = n1-n2;
    }else if(opcoes == "3" ){
        resultado = n1*n2
    }else if(opcoes == "4"){
        if(n2==0){
            alert("Resultado inexistente");
        }else{
            resultado = n1/n2
        }
    }

    document.getElementById("Resultado").innerHTML = resultado;


}