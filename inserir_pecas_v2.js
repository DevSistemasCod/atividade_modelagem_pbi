function inserir(peca) {
    if (peca && peca.tipo && peca.quantidade && peca.data && peca.hora) {
        let partesData = peca.data.split('/');
        let data_fabricacao = `${partesData[2]}-${partesData[1]}-${partesData[0]}`;
        let id_contagem = peca.quantidade;
        let tempo_ciclo = peca.hora;
        let tipo = peca.tipo;
        let peca_status = 1;

        // Query com placeholders "espaço reservado" no caso ?
        let query = `INSERT INTO peca_tipo_1 (id_contagem, data_fabricacao, tipo, tempo_ciclo, peca1_status) 
                     VALUES (?, ?, ?, ?, ?)`;

        // array com os valores para os placeholders
        let params = [id_contagem, data_fabricacao, tipo, tempo_ciclo, peca_status];

        return { query, params };
    }
    return null;
}

let resultado = inserir(msg.payload);
if (resultado) {
    msg.topic = resultado.query;
    msg.payload = resultado.params;
} else {
    msg.topic = "";
    msg.payload = [];
}
return msg;
