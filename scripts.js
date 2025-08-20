let valor1 = document.getElementById('campo1')
let valor2 = document.getElementById('campo2')

let imgFoto = document.getElementById("foto")
let nome = document.querySelector('#nome')

function insert(valor){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value

    if (valor1 == ""){
        document.getElementById("campo1").value = valor
    } else if (valor2 == ""){
        document.getElementById("campo2").value = valor
        atualizarFoto()
    }
}

function btnCorrigir(){
    valor1.value = ""
    valor2.value = ""
    imgFoto.src = "imagens/foto01.png"
    imgFoto.className = "off"
    nome.innerHTML = ""
}

function btnBranco(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value

    if (valor1 == ""){
        alert("Seu voto será em branco! Click em 'OK' para continuar")
        const voto = document.getElementById('voto0')
        let votoAtual = parseInt(voto.innerHTML) || 0
        let novoVoto = votoAtual + 1
        voto.innerHTML = novoVoto

    } else if (valor2 == ""){
        alert("Este número não existe! Click em 'OK' para continuar")
    } else {
        return
    }
}

function btnConfirma(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value
    let candidato = (parseInt(valor1) * 10) + parseInt(valor2)

    if ((valor1 === "") && (valor2 === "")){
        if(confirm("Seu voto será anulado! Deseja continuar?")){
            atualizarFoto()
            limpar()
        } else {
            return
        }
    }

    atualizarFoto()
    atualizarVoto()
    alert(`Seu voto no candidato ${candidato} ${nome.innerHTML} foi confirmado`)
    limpar()
}

function limpar(){
    valor1.value = ""
    valor2.value = ""
    imgFoto.src = "imagens/foto01.png"
    imgFoto.className = "off"
    nome.innerText = "";
    
}

function atualizarFoto(){
    let numero1 = document.getElementById("campo1").value
    let numero2 = document.getElementById("campo2").value

    if ((numero1 === '1') && (numero2 === '1')){
        imgFoto.src = "imagens/111_Fernando_Cruz.png"
        imgFoto.className = "on"
        nome.innerText = "Fernando Cruz"
    
    } else if ((numero1 === '2') && (numero2 === '2')){
        imgFoto.src = "imagens/CarolAguiar.png"
        imgFoto.className = "on"
        nome.innerText = "Carol Aguiar"

    } else if ((numero1 === '3') && (numero2 === '3')){
        imgFoto.src = "imagens/LuisaMenezes.png"
        imgFoto.className = "on"
        nome.innerText = "Luísa Menezes"

    } else if ((numero1 === '4') && (numero2 === '4')){
        imgFoto.src = "imagens/RaimundoAguiar.png"
        imgFoto.className = "on"
        nome.innerText = "Raimundo Aguiar"

    } else{
        imgFoto.src = "imagens/fotoInvalida.png"
        imgFoto.className = "off"
        nome.innerText = "Inválido";
    }
}

function atualizarVoto(){
    let valor1 = document.getElementById('campo1').value
    let valor2 = document.getElementById('campo2').value
    let candidato = (parseInt(valor1) * 10) + parseInt(valor2)

    if ((candidato === 11)){
        const voto2 = document.getElementById('voto2')
        let votoAtual = parseInt(voto2.innerHTML) || 0
        let votoNovo = votoAtual + 1 
        voto2.innerHTML = votoNovo

    } else if ((candidato === 22)){
        const voto3 = document.getElementById('voto3')
        let votoAtual = parseInt(voto3.innerHTML) || 0
        let votoNovo = votoAtual + 1
        voto3.innerHTML = votoNovo

    } else if (candidato === 33){
        const voto4 = document.getElementById('voto4')
        let votoAtual = parseInt(voto4.innerHTML) || 0
        let votoNovo = votoAtual + 1
        voto4.innerHTML = votoNovo

    } else if (candidato === 44){
        const voto5 = document.getElementById('voto5')
        let votoAtual = parseInt(voto5.innerHTML) || 0
        let votoNovo = votoAtual + 1
        voto5.innerHTML = votoNovo
        
    } else {
        const voto1 = document.getElementById('voto1')
        let votoAtual = parseInt(voto1.innerHTML) || 0
        let votoNovo = votoAtual + 1
        voto1.innerHTML = votoNovo
    }
}