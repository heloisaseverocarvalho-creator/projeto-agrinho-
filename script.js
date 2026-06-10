document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btn-calcular');
    const inputArea = document.getElementById('area');
    const boxResultado = document.getElementById('resultado');
    const txtLitros = document.getElementById('litros-economizados');

    btnCalcular.addEventListener('click', () => {
        const area = parseFloat(inputArea.value);

        if (isNaN(area) || area <= 0) {
            alert('Por favor, insira um número válido de hectares.');
            return;
        }

        // Estimativa média base: Economia de aproximadamente 150.000 litros de água 
        // por hectare ao mês trocando sistemas tradicionais ineficientes por gotejamento tecnológico.
        const economiaPorHectare = 150000; 
        const totalEconomizado = area * economiaPorHectare;

        // Formata o número para o padrão de leitura brasileiro (ex: 1.500.000)
        const formatado = totalEconomizado.toLocaleString('pt-BR');

        // Exibe o resultado aplicando a alteração no texto e removendo a classe 'hidden'
        txtLitros.textContent = `${formatado} Litros`;
        boxResultado.classList.remove('hidden');
        
        // Rola suavemente até o resultado gerado
        boxResultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});
