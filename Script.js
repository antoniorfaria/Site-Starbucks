let circulo = document.querySelector(".circulo");
let copoMaior = document.querySelector(".CopoMaior");
let secaoPromocao = document.getElementById("secaoPromocao");

// Troca a cor do círculo de fundo
function mudarcor(cor) {
    circulo.style.backgroundColor = cor;
}

// Troca a imagem principal do copo
function trocaImagem(imagem) {
    copoMaior.src = imagem;
}

// Rolagem suave até a seção promocional
document.getElementById("btnSaibaMais").addEventListener("click", function () {
    secaoPromocao.scrollIntoView({ behavior: "smooth" });
});

// Redirecionamento do formulário para WhatsApp
document.getElementById("formBonus").addEventListener("submit", function (e) {
    e.preventDefault();
    const telefone = document.getElementById("telefone").value.trim();
    if (telefone) {
        window.open(`https://wa.me/55${telefone}?text=Olá! Quero participar da promoção Starbucks ☕`, "_blank");
    }
});

//  Oculta o círculo verde ao rolar para a seção de cadastro
window.addEventListener("scroll", function () {
    const posicaoSecao = secaoPromocao.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    // Se o topo da seção estiver visível, esconde o círculo
    if (posicaoSecao < alturaTela / 1.2) {
        circulo.style.opacity = "0";
        circulo.style.transition = "opacity 0.8s ease";
    } else {
        circulo.style.opacity = "100";
    }
});
