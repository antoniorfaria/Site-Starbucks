// ===========================================================
//  SCRIPT PRINCIPAL (by Neto.dev404)
//  Interações, efeitos e integrações de navegação e WhatsApp
// ===========================================================
document.addEventListener("DOMContentLoaded", () => {
    const circulo = document.querySelector(".circulo");
    const copoMaior = document.querySelector(".CopoMaior");
    const secaoPromocao = document.getElementById("secaoPromocao");
    const btnSaibaMais = document.getElementById("btnSaibaMais");
    const formBonus = document.getElementById("formBonus");

    // ===========================================================
    // Troca cor do círculo principal (com transição suave)
    // ===========================================================
    window.mudarcor = (cor) => {
        circulo.style.transition = "background-color 0.6s ease";
        circulo.style.backgroundColor = cor;
    };

    // ===========================================================
    // Troca imagem principal do copo (fade suave)
    // ===========================================================
    window.trocaImagem = (imagem) => {
        copoMaior.style.opacity = "0";
        setTimeout(() => {
            copoMaior.src = imagem;
            copoMaior.style.opacity = "1";
        }, 200);
    };

    // ===========================================================
    // Rolagem suave até a seção promocional
    // ===========================================================
    btnSaibaMais?.addEventListener("click", () => {
        secaoPromocao.scrollIntoView({ behavior: "smooth" });
    });

    // ===========================================================
    // Formulário → Envio direto ao WhatsApp
    // ===========================================================
    formBonus?.addEventListener("submit", (e) => {
        e.preventDefault();
        const telefone = document.getElementById("telefone").value.trim();
        if (telefone) {
            const link = `https://wa.me/55${telefone}?text=Olá! Quero participar da promoção Starbucks ☕`;
            window.open(link, "_blank");
        } else {
            alert("Por favor, insira um número de telefone válido.");
        }
    });

    // ===========================================================
    // Efeito de desaparecimento do círculo ao rolar
    // ===========================================================
    window.addEventListener("scroll", () => {
        if (!secaoPromocao) return;
        const posicaoSecao = secaoPromocao.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        circulo.style.transition = "opacity 0.6s ease";
        circulo.style.opacity = posicaoSecao < alturaTela / 1.2 ? "0" : "1";
    });
});
