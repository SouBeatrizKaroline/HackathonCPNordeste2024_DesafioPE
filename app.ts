document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category') as HTMLSelectElement;
    const serviceList = document.getElementById('service-list');

    categorySelect.addEventListener('change', (event) => {
        const selectedCategory = (event.target as HTMLSelectElement).value;
        updateServiceList(selectedCategory);
    });

    function updateServiceList(category: string) {
        // Exemplo de dados de serviço
        const services = [
            { id: 1, name: 'Serviço de Saúde 1', category: 'saude' },
            { id: 2, name: 'Serviço de Segurança 1', category: 'seguranca' },
            { id: 3, name: 'Serviço de Cuidados 1', category: 'cuidados' },
            // Adicione mais serviços conforme necessário
        ];

        // Filtrar serviços com base na categoria selecionada
        const filteredServices = services.filter((service) => service.category === category);

        // Limpar e atualizar a lista de serviços
        serviceList.innerHTML = ''; // Limpar lista atual

        // Adicionar novos serviços com base na categoria
        filteredServices.forEach((service) => {
            const serviceListItem = document.createElement('li');
            const serviceLink = document.createElement('a');
            serviceLink.href = `#${service.id}`;
            serviceLink.textContent = service.name;
            serviceListItem.appendChild(serviceLink);
            serviceList.appendChild(serviceListItem);
        });
    }
});