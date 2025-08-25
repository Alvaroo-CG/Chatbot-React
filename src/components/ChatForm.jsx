import React, { useRef } from "react";


const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {

    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        // Actualiza el historial de chat con el mensaje del usuario
        setChatHistory(history => [...history, { role: "user", text: userMessage }]);

        // Simula una respuesta del bot después de un breve retraso
        setTimeout(() => {
            // Añade un mensaje de "Pensando..." como respuesta del bot
            setChatHistory((history) => [...history, { role: "model", text: "Pensando..." }]);

            //Llama a la función para generar la respuesta del bot
            generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please
            address this query ${userMessage}` }]);
        }, 600);
    }

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="message-input"
              placeholder="Escribe aquí..." 
              required
            />
            <button className="material-symbols-rounded">
              arrow_upward
            </button>
          </form>
  )
}

export default ChatForm