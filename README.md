# Chat UI for Ollama-based Local LLMs

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

Personal LLM Chat UI is a very simple way to chat with Ollama-based models. It leverages Ollama and user-selected local Large Language Models (LLMs) to enable private and personalized interactions. This project empowers users to choose and manage their preferred LLMs directly, ensuring data privacy and control.

**Key Features:**

* **Very easy to start:** Download the Index.html file and place it in your favorite web server or use the one suggested below.
* **Support for a system prompt:** Modify the system prompt as you see fit. ([https://promptengineering.org/system-prompts-in-large-language-models/](https://promptengineering.org/system-prompts-in-large-language-models/)).
* **Use any local Ollama LLMs:** Lets you select any model pulled from Ollama.
* **Use a remote Ollama endpoint:** You may run it on a device different from where Ollama is. Simply change the URL in index.html.
* **Edit Historical Context:** Rewrite history! Effortlessly edit past chat context, including LLM's response, for a more flexible conversation experience. 
* **Offline Functionality:** Operates entirely locally, eliminating the need for internet connectivity.
* **Customizable LLM Selection:** Users can select and utilize their preferred LLMs installed through Ollama.
* **Privacy-Focused:** Keeps all data and interactions within the user's local environment.
* **Simplified Deployment:** Easy setup and execution without requiring complex server configurations.

## Getting Started

Follow these steps to set up and run Local Personal GPT:

### Prerequisites

* **Ollama:** Ensure Ollama is installed and running. This project relies on Ollama to manage and serve local LLMs.
* **Node.js and npm:** Required for running the server component.

### Installation and Setup

1.  **Install Ollama:**
    * Download and install Ollama from the official website ([https://ollama.ai/](https://ollama.ai/)).
    * Download the desired local LLMs using Ollama.
        * Example: `ollama pull llama3.2`
    * Simply double-click to start the UI
         

2.  **Install http-server:**
    * Open your terminal and run the following command to install `http-server` globally:
        ```bash
        npm install -g http-server
        ```
3.  **Start the http-server:**
    * Open your terminal and run the following command to start `http-server`:
        ```bash
        cd <folder where you placed the index.html file>
        http-server
        ```
4.  **Start using your personal LLM Chat:**
    * In your favorite browser, open `http://localhost:8080`. If 8080 is in use, it may pick the next available port - 8081 and so on.

## Future Enhancements

* **Improved User Interface:** Enhance the user interface for a more intuitive and user-friendly experience.
* **Advanced Configuration:** Provide options for advanced configuration and customization.
* **Persistent Storage:** Implement local storage to persist conversation history.
* **Error Handling:** Improve error handling and provide more informative error messages.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
>>>>>>> 91185d014be668ed2c621ab332090285c23b6ea8
