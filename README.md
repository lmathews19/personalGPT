<<<<<<< HEAD
# personalGPT
=======
# Local Personal GPT

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

Local Personal GPT is an experimental project designed to provide a customizable, offline conversational AI experience. It leverages Ollama and user-selected local Large Language Models (LLMs) to enable private and personalized interactions. This project empowers users to choose and manage their preferred LLMs directly, ensuring data privacy and control.

**Key Features:**

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

2.  **Configure LLM Selection:**
    * **Note:** Currently, the LLM selection is hardcoded in `server/index.js` and `index.html`. Future versions will implement an API call to dynamically load available models.
    * Modify `server/index.js` and `index.html` to reflect the names of the local models you have installed.

3.  **Run the Server:**
    * Open a command prompt or terminal.
    * Navigate to the `server` directory:
        ```bash
        cd server
        ```
    * Install dependencies:
        ```bash
        npm install
        ```
    * Start the server:
        ```bash
        npm start
        ```

4.  **Launch the Application:**
    * Open `index.html` in your web browser by double-clicking the file.
    * No web server is required as the application runs directly in the browser, communicating with the local server.

## Future Enhancements

* **Dynamic LLM Selection:** Implement an API call to dynamically load and display available LLMs from Ollama.
* **Improved User Interface:** Enhance the user interface for a more intuitive and user-friendly experience.
* **Advanced Configuration:** Provide options for advanced configuration and customization.
* **Persistent Storage:** Implement local storage to persist conversation history.
* **Error Handling:** Improve error handling and provide more informative error messages.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
>>>>>>> 91185d014be668ed2c621ab332090285c23b6ea8
