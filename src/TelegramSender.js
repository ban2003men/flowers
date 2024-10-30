// src/TelegramSender.js
import React, { useState } from 'react';
import axios from 'axios';

const TELEGRAM_API_URL = 'https://api.telegram.org/bot<8036712024:AAEdxilaGCmVYpSxcBYrmP47s4Z108lV9zQ>/sendMessage'; // Замените <YOUR_BOT_TOKEN> на токен вашего бота

const TelegramSender = () => {
  const [chatId, setChatId] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(TELEGRAM_API_URL, {
        chat_id: chatId,
        text: message,
      });
      console.log('Сообщение отправлено:', response.data);
      alert('Сообщение успешно отправлено в Telegram');
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Не удалось отправить сообщение');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Отправить сообщение в Telegram</h2>
      <input
        type="text"
        placeholder="Введите Chat ID"
        value={chatId}
        onChange={(e) => setChatId(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '5px' }}
      />
      <textarea
        placeholder="Введите сообщение"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }}
      />
      <button onClick={handleSendMessage} style={{ padding: '10px 20px' }}>Отправить</button>
    </div>
  );
};

export default TelegramSender;
