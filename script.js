document.addEventListener("DOMContentLoaded", () => {
    const circulo = document.querySelector(".circulo");
    const copoMaior = document.querySelector(".CopoMaior");
    const secaoPromocao = document.getElementById("secaoPromocao");
    const btnSaibaMais = document.getElementById("btnSaibaMais");
    const formBonus = document.getElementById("formBonus");

    // Troca cor do círculo
    window.mudarcor = (cor) => (circulo.style.backgroundColor = cor);

    // Troca imagem principal
    window.trocaImagem = (imagem) => (copoMaior.src = imagem);

    // Rolagem suave
    btnSaibaMais?.addEventListener("click", () => {
        secaoPromocao.scrollIntoView({ behavior: "smooth" });
    });

    // Formulário → WhatsApp
    formBonus?.addEventListener("submit", (e) => {
        e.preventDefault();
        const telefone = document.getElementById("telefone").value.trim();
        if (telefone) {
            window.open(`https://wa.me/55${telefone}?text=Olá! Quero participar da promoção Starbucks ☕`, "_blank");
        }
    });

    // Oculta o círculo ao rolar
    window.addEventListener("scroll", () => {
        const posicaoSecao = secaoPromocao.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        circulo.style.opacity = posicaoSecao < alturaTela / 1.2 ? "0" : "1";
    });
});
