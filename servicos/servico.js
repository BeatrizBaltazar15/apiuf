import colecaoUf from "../dados/dados";

export const buscarUfs = () => {
    return colecaoUf;
}

export const buscarUfsPorNome = (nomeUF) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUF.toLowerCas()));
};

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}