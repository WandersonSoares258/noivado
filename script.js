function sendConfirmation(destination) {
    // Obter os valores do formulário
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;
    
    // Validar campos obrigatórios
    if (!name || !guests) {
        alert('Por favor, preencha seu nome e a lista de convidados.');
        return;
    }
    
    // Definir números de telefone
    const phoneNumbers = {
        'wanderson': '5562994046855', // 55 (Brasil) + 62 (DDD) + 994046855
        'sara': '5562993052622' // 55 (Brasil) + 62 (DDD) + 993052622
    };
    
    // Formatar a mensagem para o WhatsApp
    const whatsappMessage = `💍 *Nova confirmação para o noivado* 💍%0A%0A` +
                           `*Confirmado por:* ${name}%0A%0A` +
                           `*Lista de convidados:*%0A${guests}%0A%0A` +
                           `*Mensagem para os noivos:*%0A${message || 'Nenhuma mensagem'}`;
    
    // Criar o link do WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumbers[destination]}?text=${whatsappMessage}`;
    
    // Abrir o WhatsApp em uma nova aba
    window.open(whatsappURL, '_blank');
    
    // Mostrar mensagem de confirmação
    const messageElement = document.getElementById('confirmationMessage');
    const whatsappMsgElement = document.getElementById('whatsappMessage');
    messageElement.style.display = 'block';
    whatsappMsgElement.textContent = `Aguarde enquanto o WhatsApp é aberto para enviar sua confirmação para ${destination === 'wanderson' ? 'Wanderson' : 'Sara'}.`;
    
    // Limpar formulário
    document.getElementById('confirmationForm').reset();
    
    // Rolar para a mensagem de confirmação
    messageElement.scrollIntoView({ behavior: 'smooth' });
}