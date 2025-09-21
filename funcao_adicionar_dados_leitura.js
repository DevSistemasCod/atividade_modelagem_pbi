// Recupera o vetor anterior do contexto (se não existir, cria [null, null, null])
// context → é o contexto do nó. Só vale para esse nó específico.
let vetorAnterior = context.get('vetorAnterior') || [null, null, null];

// navega dentro do vetor de array e retorna em vetor numérico para cada item
let vetorAtual = msg.payload.map(v => Number(v));

// Cria vetor de mensagens de saída (uma para cada tipo de peça)
let mensagensParaEnviar = [null, null, null];

// Captura data/hora local
let localStr = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour12: false
});
let [dataAtual, horaAtual] = localStr.split(',');
dataAtual = dataAtual.trim();
horaAtual = horaAtual.trim();

// Tipos de peças
let tiposDePeca = ["Grande", "Média", "Pequena"];

for (let i = 0; i < 3; i++) {
    mensagensParaEnviar[i] = null;
    if (vetorAtual[i] !== vetorAnterior[i]) {
        mensagensParaEnviar[i] = {
            payload: {
                quantidade: vetorAtual[i],
                tipo: tiposDePeca[i],
                data: dataAtual,
                hora: horaAtual
            }
        };
    }
}

// Atualiza o contexto
context.set('vetorAnterior', vetorAtual);

return mensagensParaEnviar;
