function mostrarMensagem() {
    alert(
        'A sustentabilidade no agronegócio garante alimentos, preservação ambiental e um futuro melhor para todos!'
    );
}

let contador = 0;

function contarArvores() {
    contador++;
    document.getElementById('numero').innerText = contador;
}

const formulario = document.getElementById('formulario');
const resposta = document.getElementById('resposta');

formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();

    const nome = document.getElementById('nome').value;

    resposta.innerText =
        `Obrigado pela mensagem, ${nome}! Juntos construiremos um futuro mais sustentável 🌱`;

    formulario.reset();
});
