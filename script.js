function mostrarOutro(campo) {
  const divBairro = document.getElementById('outroBairroDiv');
  const divEscola = document.getElementById('outroEscolaDiv');
  
  if (campo === 'bairro') {
    if (document.getElementById('bairro').value === 'outro') {
      divBairro.style.display = 'block';
      document.getElementById('outroBairro').required = true;
    } else {
      divBairro.style.display = 'none';
      document.getElementById('outroBairro').required = false;
    }
  }
  
  if (campo === 'escola') {
    if (document.getElementById('escola').value === 'outro') {
      divEscola.style.display = 'block';
      document.getElementById('outroEscola').required = true;
    } else {
      divEscola.style.display = 'none';
      document.getElementById('outroEscola').required = false;
    }
  }
}

function enviarWhatsApp(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const bairro = document.getElementById("bairro").value === 'outro' ? document.getElementById("outroBairro").value : document.getElementById("bairro").value;
  const rua = document.getElementById("rua").value;
  const escola = document.getElementById("escola").value === 'outro' ? document.getElementById("outroEscola").value : document.getElementById("escola").value;    
  const numeroWhatsApp = "47984745728";
  
  const texto = `Olá! Lara, meu nome é ${nome}. Eu moro no Bairro ${bairro} e na Rua ${rua}. Gostaria de verificar a disponibilidade de vagas e fazer um orçamento para a escola ${escola}`; 
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  
  window.open(url, "_blank");
}