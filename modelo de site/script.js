document.getElementById("formWhats").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const servico = document.getElementById("servico").value;
  const mensagem = document.getElementById("mensagem").value;

  // 🔥 DISPARA CONVERSÃO GOOGLE ADS
  gtag('event', 'conversion', {
    'send_to': 'AW-123456789/AbCDefGhIJ'
  });

  const texto = 
`Olá! Gostaria de atendimento.

Nome: ${nome}
Telefone: ${telefone}
Serviço: ${servico}
Mensagem: ${mensagem}`;

  const numeroWhats = "5500000000000"; // número do cliente
  const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`;

  setTimeout(() => {
    window.open(url, "_blank");
  }, 500);
});
