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
      tags: ["NLP", "Transformers","Konkani", "Low-Resource Language", "Sentiment Analysis"],
      code: "",
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
    },
    {
  title: "Infofest 2024 Website",
  description: "Official website for Infofest 2024, a national-level tech event. Showcases schedule, speakers, and registration built using React and Tailwind CSS.",
  image: "Infofest_2024/cover_page.png",
  tags: ["React", "Tailwind CSS", "Event Website", "UI/UX", "Collaboration"],
  code: "",
  live: "https://infofest.tech/",
  images: [
    "Infofest_2024/homepage.png",
    "Infofest_2024/schedule.png",
    "Infofest_2024/events.png",
    "Infofest_2024/team.png",
  ],
  slug: "infofest-2024-website",
  Date: "2024-09-16",
  content: `
The **Infofest 2024 Website** was created to promote and manage the national-level tech event hosted by our institute Goa University.

### Tech Stack:
- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Hosting**: Vercel

### Features which I implemented:
- **Event Schedule**: Detailed agenda with interactive timeline.
- **Event Information**: Comprehensive details about each event, including topics and rules.
- **Registration**: Google Form or custom form integration for easy sign-up.
- **Responsive Design**: Fully mobile-friendly layout for accessibility.
- **Team Section**: Highlighting the organizing committee and their roles.
- **Dynamic Content**: Easy-to-update sections for events, speakers, and schedules.
- **SEO Optimization**: Basic SEO practices for better visibility.
- **Brochure implementation**: Added a downloadable brochure for offline access, which can be seen directly in the web by going to the brochure section.
- **Sponsorship Section**: Dedicated area for sponsors, showcasing their logos.
- **Visual Appeal**: Modern and clean UI, designed in collaboration with a friend.

### Collaboration:
This project was built collaboratively with a teammate, where we divided work across UI/UX design, frontend development, and deployment. We used Git for version control and shared responsibilities throughout the development cycle.

This project highlights our ability to collaborate, manage content, and deliver a visually engaging experience for a real-world event.
  `,
  featured: true,
},
{
  title: "Weather App",
  description: "A React-based weather forecast application that provides dynamic weather tips based on real-time data. Built with Zustand and OpenWeatherMap API.",
  image: "Weather_app/cover_page.png",
  tags: ["React", "Zustand", "Weather API", "OpenWeatherMap", "TailwindCSS"],
  code: "https://github.com/Divij35/Weather-app",
  live: "https://weather-app-divij.vercel.app/",
  images: [
    "Weather_app/main.png",
    "Weather_app/main_light.png",
    "Weather_app/tips.png"
  ],
  slug: "weather-app",
  Date: "2024-06-03",
  content: `
A smart weather app that shows the current weather condition in your city.

### Features
- Zustand for simple global state management
- TailwindCSS for responsive styling
- Weather-based suggestions in a friendly UI
- Fully responsive and mobile-friendly

Try searching your city and get advice based on live weather data!
  `,
  featured: false
},

{
  title: "Predictive Market Analysis using LSTM",
  description: "A deep learning-based stock market prediction tool leveraging LSTM networks for time series forecasting and trend visualization.",
  image: "predictivema/cover_page.png",
  tags: ["Deep Learning", "LSTM", "Stock Prediction", "Time Series", "Python", "Finance", "Flask", "Chart.js"],
  code: "https://github.com/Divij35/PredictiveMA",
  live: "",
  images: [
    "predictivema/index.png",
    "predictivema/Historical_data.png",
    "predictivema/Predication_value.png",
    "predictivema/Stock_relation_using_graph.png"
  ],
  slug: "predictive-market-analysis",
  Date: "2024-05-25",
  content: `
### Overview

**PredictiveMA** is a web-based application designed to forecast stock trends using LSTM (Long Short-Term Memory) neural networks. It demonstrates how historical stock data can be used for future price prediction through time series modeling.

### Features

- 📈 **Stock Price Prediction** using LSTM models
- 📊 Interactive graphs via **Chart.js**
- 🌐 Lightweight **Flask** backend for deployment
- 🔍 View real-time and predicted data trends
- 📂 Built with modular and extensible code

### Tech Stack

- Python, Flask
- LSTM (Long Short-Term Memory Networks)
- yFinance API
- Chart.js
- HTML/CSS
  `,
  featured: false
}


];
  
  export default projects;
  