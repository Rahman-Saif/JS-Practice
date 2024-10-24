const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const typingIndicator = document.getElementById('typingIndicator');

    // Sample responses for the chatbot
    const botResponses = [
      "I'd be happy to help you with that!",
      "Could you please provide more details?",
      "That's interesting! Let me think about it.",
      "I understand what you're asking. Here's what I think...",
      "Thank you for sharing that with me.",
      "That's a great question!",
      "I'm processing your request...",
      "Let me assist you with that.",
    ];

    function addMessage(content, isUser = false) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
      
      const avatarDiv = document.createElement('div');
      avatarDiv.className = 'message-avatar';
      avatarDiv.innerHTML = `<i class="fas fa-${isUser ? 'user' : 'robot'}"></i>`;
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'message-content';
      contentDiv.textContent = content;
      
      messageDiv.appendChild(avatarDiv);
      messageDiv.appendChild(contentDiv);
      
      chatMessages.insertBefore(messageDiv, typingIndicator);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
      typingIndicator.style.display = 'block';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function hideTypingIndicator() {
      typingIndicator.style.display = 'none';
    }

    function getBotResponse() {
      return botResponses[Math.floor(Math.random() * botResponses.length)];
    }

    function handleUserInput() {
      const message = userInput.value.trim();
      if (message === '') return;
      
      // Add user message
      addMessage(message, true);
      userInput.value = '';
      
      // Show bot typing indicator
      showTypingIndicator();
      
      // Simulate bot response after a delay
      setTimeout(() => {
        hideTypingIndicator();
        addMessage(getBotResponse());
      }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleUserInput();
    });

    // Focus input on load
    userInput.focus();