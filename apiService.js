function getCNPJData(cnpj) {
//   const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;
    const url = `http://localhost:3000/cnpj/${cnpj}`;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      
        document.getElementById("data-abertura").value = data.data_inicio_atividade;
        document.getElementById("porte").value = data.porte;
        document.getElementById("nome-empresarial").value = data.razao_social;
        document.getElementById("nome-fantasia").value = data.nome_fantasia;
        document.getElementById("cnae").value = data.cnae_fiscal + " - " + data.cnae_fiscal_descricao;
        document.getElementById("regime-apuracao").value = data.regime_apuracao;
        document.getElementById("natureza-juridica").value = data.natureza_juridica;
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("numero").value = data.numero;
        document.getElementById("complemento").value = data.complemento;
        document.getElementById("cep").value = data.cep;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("municipio").value = data.municipio;
        document.getElementById("uf").value = data.uf;
        document.getElementById("ente-responsavel").value = data.ente_responsavel;
        document.getElementById("situacao").value = data.situacao_cadastral;
        document.getElementById("data-situacao").value = data.data_situacao_cadastral;
        document.getElementById("motivo-situacao").value = data.motivo_situacao_cadastral;
        document.getElementById("situacao-especial").value = data.situacao_especial;
        document.getElementById("data-situacao-especial").value = data.data_situacao_especial;
        
        // console.log("CNAE value:", data.cnae_fiscal + " - " + data.cnae_fiscal_descricao);
    }

    

  };
  xhr.send();
}
