# Text Intelligence Engine 🧠

A powerful, client-side text analysis tool that extracts insights from your conversations in real-time. Built with vanilla JavaScript, this engine utilizes advanced data structures like **Tries**, **Bigrams**, and **Word Graphs** to provide immediate feedback on your writing patterns.

![Project Preview](https://via.placeholder.com/800x400?text=Text+Intelligence+Engine+Preview)

👉 **Live Demo:** [https://text-intel-engine.netlify.app/](https://text-intel-engine.netlify.app/)

## 🚀 Features

*   **Real-time Analytics**: See analysis update instantly as you type and send messages.
*   **Next Word Prediction**: Uses a Bigram model to predict the most likely next word based on your input history.
*   **Prefix Autocompletion**: Offers word suggestions based on the current prefix using an efficient Trie data structure.
*   **Word Graph Visualization**: Displays related words and successors to understand the flow of your text.
*   **Top Word Frequency**: Tracks and displays the most frequently used words in your session.
*   **Privacy Focused**: All processing happens 100% in your browser. No data is sent to any server.

## 🎓 Academic Context

This project was developed as part of a Data Structures and Algorithms (DSA) coursework. The goal was to apply core DSA concepts to solve a real-world problem—building an intelligent word prediction engine.

## 🛠️ How It Works

The engine is powered by three core components:

1.  **Trie (Prefix Tree)**: Efficiently stores words to allow for fast prefix-based lookups and autocompletion suggestions.
2.  **Bigram Model**: Analyzes pairs of consecutive words to calculate probabilities and predict the next likely word.
3.  **Word Graph**: Maps relationships between words, showing which words tend to follow others, providing a graph-based view of your text flow.

## 💻 Tech Stack

*   **HTML5**: Semantic structure.
*   **CSS3**: Modern, responsive styling with a clean aesthetic.
*   **JavaScript (ES6+)**: Core logic, data structures, and DOM manipulation.
*   **Algorithms**: Trie, Bigram Frequency Model, Directed Graphs.

## 🧪 Example Interaction

*   **Input**: "my name is kanishkan"
*   **Analysis**:
    *   **Top Words**: my, name, is
    *   **Suggestions**: Auto-completes "kanishkan"
    *   **Next Word**: None (as it's the last word)
    *   **Related Words**: None

*   **Input**: "my"
*   **Analysis**:
    *   **Suggestions**: "my"
    *   **Next Word**: "name" (predicted from previous context)
    *   **Related Words**: "name" (from graph connection)

## 🏁 Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/Kanishkhan/Text-intel-engine-.git
    ```
2.  Open `index.html` in your web browser.
3.  Start typing in the chat box to see the engine in action!

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/309097b9-4fce-4ae0-80b8-c479208de237)
![image](https://github.com/user-attachments/assets/67d2f505-e45a-4b7a-9642-263ef178980a)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the engine or add new analytics features.
