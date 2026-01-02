    function enviarWhatsApp(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const whats = document.getElementById("whats").value;
        const mensagem = document.getElementById("mensagem").value;

        const texto = 
`Olá! Meu nome é ${nome}.
Meu WhatsApp é ${whats}.
Tenho interesse em um site.

Mensagem:
${mensagem}`;

        const numero = "5599999999999"; // COLOQUE SEU WHATSAPP AQUI

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
    }
