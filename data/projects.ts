const projects = [
    {
      title: "AI Voice Assistant",
      description: "An intelligent voice-controlled assistant built using Python, speech recognition, and transformers for natural language understanding.",
      image: "voice-assistant.jpg",
      tags:  ["Python", "AI", "Transformers", "Speech Recognition", "NLP", "Text-to-Speech"],
      code: "https://github.com/Divij35/OIBSIP/tree/main/voice%20assistant",
      live: "",
      images: [
        ""
      ],
      slug: "ai-voice-assistant",
      Date: "2023-08-01",
      content: `This AI Voice Assistant is a smart, interactive desktop application that responds to voice commands and performs tasks intelligently. It is built using Python and integrates speech recognition, natural language processing (NLP), and text-to-speech technologies.

Key Features:
- **Voice Input**: Captures and converts voice commands into text using the 'speech_recognition' library.
- **Natural Language Understanding**: Utilizes transformer-based models (like BERT) to understand and answer user queries contextually.
- **Text-to-Speech**: Converts the assistant's responses into speech using the 'pyttsx3' engine.
- **Task Automation**: Capable of telling the current time, setting reminders, opening web pages, and more.
- **Simple GUI**: A Tkinter-based GUI to provide an interactive interface and status display.
- **Offline Compatibility**: Some functionalities, like opening apps or telling time, work without internet access.

This project demonstrates how multiple AI components can be seamlessly combined to build a practical, voice-powered assistant. It's a great base for further customization like home automation or integrating with APIs like weather, email, or smart devices.`,
      featured: false,
    },
    {
      title: "Konkani Sentiment Analyzer",
      description: "A custom-built sentiment analysis model for the low-resource Konkani language.",
      image: "Konkani_sentiment_analyzer/cover_page.png",
      tags: ["NLP", "Transformers", "Low-Resource Language", "Sentiment Analysis", "Konkani"],
      code: "https://github.com/Divij35/konkani-sentiment-analysis",
      live: "https://divijpirankar-konkanisentimentanalyzer.hf.space/",
      images: ["Konkani_sentiment_analyzer/positive.png", "Konkani_sentiment_analyzer/negative.png", "Konkani_sentiment_analyzer/neutral.png"],
      slug: "Konkani_sentiment_analyzer",
      Date: "2025-01-15",
      content: `
  **Custom Model Training**: Fine-tuned transformer-based models on a hand-curated Konkani dataset using PyTorch and Hugging Face.  
  **Labeling Automation**: Semi-automated sentiment labeling using Azure Translation + TextBlob to generate initial tags.  
  **Data Preprocessing**: Cleaned and structured raw Konkani newspaper text with POS tag removal and CSV formatting.  
  **Evaluation Metrics**: Evaluated model using F1-score, accuracy, and confusion matrix across multiple configurations.  
  **Deployment Ready**: Model deployed as a web API using FastAPI with testable endpoints and sample inputs.  
  **Language Preservation**: Contributes to low-resource language AI and regional NLP by providing a foundational model for Konkani text sentiment.  
      `,
      featured: true,
    }
  ];
  
  export default projects;
  