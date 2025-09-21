let peca = msg.payload;

function inserirQuery(peca){
    if(peca && peca.tipo && peca.quantidade && peca.data && peca.hora){
        let id_contagem = peca.quantidade;
        //coverter data /dd/mm/yyyy para yyyy-mm-dd
        let partesData = peca.data.split('/');
        let data_fabricacao = `${partesData[2]}-${partesData[1]}-${partesData[0]}`
        let tempo_ciclo = peca.hora;
        let tipo = peca.tipo;
        let peca_status = 1;
        
        return `INSERT INTO peca_tipo_1 (id_contagem, data_fabricacao, tipo, tempo_ciclo, peca1_status) 
                VALUES (${id_contagem}, '${data_fabricacao}', '${tipo}', '${tempo_ciclo}', '${peca_status}');`;

    }
    return "";
}

msg.topic = inserirQuery(peca);
return msg;