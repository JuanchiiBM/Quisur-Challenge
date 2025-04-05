import { useEffect, useRef } from "react";

//Esta función no tiene una verdadera utilidad ya que no tengo un endpoint formal para obtener y enviar datos. pero reemplazando el endpoint, funcionaría
//Aunque se debería de agregar un userId para saber el destino al que la notificación debe de llegar
const useWebSocket = (onMessage: (data: any) => void) => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("✅ Conectado al WebSocket");
      socket.send(JSON.stringify({ type: "auth" }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };

    socket.onclose = () => {
      console.log("🔌 Desconectado del WebSocket");
    };

    return () => {
      socket.close();
    };
  }, []);
};

export default useWebSocket;
