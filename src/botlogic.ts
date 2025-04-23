// botLogic.ts

const botKnowledge: { [key: string]: string } = {
    // Greetings & Basic Conversation
    "hello": "Hey there! I'm OxMol, your virtual assistant. 😊 How can I help you today?",
    "hi": "Hello! I'm OxMol, your chatbot guide. What can I do for you?",
    "hey": "Hey! Need help with something on this site?",
    "how are you": "I'm just a bundle of code, but I'm working perfectly fine. Thanks for asking!",
    "what's up": "Not much, just here to help you navigate this site. Need something?",
    "bye": "Take care! I'm always here if you need assistance later.",
    "goodbye": "Goodbye! Come back anytime you need help.",
    "thank you": "You're welcome! Happy to help 😊",
    "thanks": "Anytime! Let me know if there's more I can do for you.",
  
    // Identity & Purpose
    "who are you": "I'm OxMol 🤖, your friendly assistant designed to help you explore this website.",
    "what is your name": "My name is OxMol! I'm here to make your browsing experience easier.",
    "what is your purpose": "I'm built to assist you with information about this website, its services, and general help.",
    "are you human": "Not quite! I'm a chatbot built to respond to your queries and assist with site-related tasks.",
  
    // Website-Specific Questions
    "what does this site do": "This site provides information, services, and support related to our organization. Ask me anything specific!",
    "how can i contact support": "You can reach support through the contact page, or I can help you find what you're looking for right here.",
    "where is the about page": "The About page is usually listed in the navigation bar. You can also try typing 'about' to go there.",
    "how do i sign up": "Click the 'Sign Up' button on the top right of the page or go to the signup section in the navigation.",
    "how do i log in": "Click 'Login' in the top right corner. If you're having trouble, I can try to help!",
    "what services do you offer": "We offer a variety of services tailored to your needs. Visit the Services section or ask about something specific.",
    "do you have a blog": "Yes, we do! Check out our latest posts in the Blog section.",
    "how do i reset my password": "You can reset your password by clicking 'Forgot Password' on the login screen.",
  
    // Fallback
    "default": "Hmm, I'm not sure I understand that. Try asking about our services, signing up, or navigating the site!",
  };
  
  // Function to get bot's response
  export const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
  
    // Direct match
    if (botKnowledge[message]) return botKnowledge[message];
  
    // Partial or related match logic (optional future improvement)
    // Could use fuzzy matching or keyword includes here
  
    return botKnowledge["default"];
  };
  