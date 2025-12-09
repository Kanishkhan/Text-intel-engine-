Check out the live website for this project here 👉 https://text-intel-engine.netlify.app/

🧠 TextIntel: Intelligent Text Prediction & Analysis Engine
TextIntel is an advanced word-processing engine designed to analyze, predict, and relate words using classic Data Structures and Algorithms. It combines multiple intelligent components like Trie-based autocomplete, bigram prediction, Red-Black Tree search, and graph-based word relationships to provide rich linguistic insights and fast text predictions.

📌 Key Features:
🔤 Auto-Completion using Trie Data Structure

📊 Next Word Prediction using Bigram Frequency Model

🌳 Efficient Word Storage & Search via Red-Black Tree

🔗 Word Relationship Mapping through Directed Graphs (using NetworkX)

📈 Top Word Frequency Tracking with Python’s Counter

💬 Interactive CLI Chat Interface for demo and testing

🛠️ Technologies & Tools Used:
Language: Python 3

Libraries: collections, networkx

Data Structures: Trie, Red-Black Tree, Graphs, Counters

🎓 Academic Context:
This project was developed as part of my Data Structures and Algorithms (DSA) coursework in the 3rd semester of my undergraduate studies. The goal was to apply core DSA concepts to solve a real-world problem—in this case, building an intelligent word prediction engine.



🧪 Example Output Description – Sample Interaction
The following screenshot showcases the TextIntel Engine in action, demonstrating how it processes and responds to user input using intelligent text analysis techniques.

🔹 Input 1:

You: my name is kanishkan
Chatbot Response:

📈 Top Words: Displays the most frequently occurring words so far (my, name, is).

🔍 Suggestions for 'kanishkan': Auto-completes the word using the Trie structure.

📝 Next Word Prediction: Shows "None" since "kanishkan" has not yet been followed by any word in the conversation.

🔗 Related Words: "None" because "kanishkan" hasn't formed an edge in the word relationship graph yet.

🔹 Input 2:


You: my
Chatbot Response:

📈 Top Words: Still shows "my", "name", "is" based on cumulative frequency.

🔍 Suggestions for 'my': Completes the word as "my" from the Trie.

📝 Next Word Prediction: Predicts "name" based on the previously learned bigram ("my", "name").

🔗 Related Words: Shows "name" from the directed graph connection established earlier (my → name).

💡 Purpose of this Example:
This output validates the functionality of the engine’s:

Trie-based auto-completion

Bigram-based next-word prediction

Graph-based word relationship tracking

Word frequency tracking and ranking

It serves as a simple but effective test case for understanding how the components of the TextIntel engine respond to user inputs and grow with context.


![image](https://github.com/user-attachments/assets/309097b9-4fce-4ae0-80b8-c479208de237)

![image](https://github.com/user-attachments/assets/67d2f505-e45a-4b7a-9642-263ef178980a)

