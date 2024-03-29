let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    //Recuperando os dados
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if (!produto || produto.trim() ==="") {
        alert("Selecione um produto válido");
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    
    //Calculo do preço
    let preco = quantidade * valorUnitario;

    //Colocar no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul"> R$${preco}</span> </section>`

    //Mudar o valor total
    totalGeral = totalGeral + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}