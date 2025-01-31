declare module 'rag-chatbot-interface-ifi' {
  import { ComponentType, ForwardRefExoticComponent, RefAttributes } from 'react';

  export const ChatbotInterface: ForwardRefExoticComponent<
    {
      chatbotId: string;
      onConversationStart: (conversationId: string) => void;
    } & RefAttributes<{ endConversation: () => void }>
  >;
}