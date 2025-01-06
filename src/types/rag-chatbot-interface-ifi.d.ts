declare module 'rag-chatbot-interface-ifi' {
  import { ComponentType } from 'react';
  export const ChatbotInterface: ComponentType<{
    chatbotId: string;
    onConversationStart: (conversationId: string) => void;
  }>;
}