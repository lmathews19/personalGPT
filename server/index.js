const axios = require('axios'); // Install it: npm install axios
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/message', async (req, res) => {
    res.setHeader('Content-Type', 'text/plain'); // Set response as plain text
    res.setHeader('Transfer-Encoding', 'chunked'); // Enable chunked transfer (streaming)

    const language = "javascript";
    const systemPrompt = `You are a helpful expert.`;
    //const userPrompt = `Write the code for an example of d3.js`;

    const {messages, model} = req.body;
    console.log(req.body);

    try {
        await streamCompletionFromLocalLLM(systemPrompt, messages, model, res);
    } catch (error) {
        console.error("Error in streaming response:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

function selectModel(modelKey) {
    switch (modelKey) {
        case '1':
            case 1:
                return "phi4:14b-q4_K_M";
        case '2':
            case 2:
                return "qwen2.5-coder:7b";
        case '3':
            case 3:
                return "granite3.1-moe:3b-instruct-q8_0";
        case '4':
            case 4:
                return "deepseek-r1:1.5b";
        case '5':
            case 5:
                return "llama3.2:latest";
        case '6':
            case 6:
                return "deepseek-r1:latest";
        case '7':
            case 7:
                return "llama3.2:3b";
        case '8':
            case 8:
            return "deepseek-coder-v2:latest";
        default:
            return "Unknown Model";
    }
}

async function streamCompletionFromLocalLLM(systemPrompt, messages, model, res) {
    const apiUrl = "http://127.0.0.1:11434/api/chat";


    const requestBody = {
        messages: messages,
        model: selectModel(model),
        stream: true // Enable streaming
    };

    console.log(requestBody.model);

    try {
        const response = await axios.post(apiUrl, requestBody, {
            headers: { 'Content-Type': 'application/json' },
            responseType: 'stream' // Handle as a stream
        });

        response.data.on('data', (chunk) => {
            const lines = chunk.toString().split("\n"); // Split into lines
            for (const line of lines) {
                if (!line.trim()) continue; // Skip empty lines

                try {
                    const parsed = JSON.parse(line); // Parse JSON response
                    const token = parsed.message?.content || ''; // Extract token

                    res.write(token); // Stream token to client
                } catch (e) {
                    console.error("JSON Parse Error:", e.message);
                }
            }
        });

        response.data.on('end', () => {
            res.end(); // End the streaming response
        });

        response.data.on('error', (err) => {
            console.error("Stream Error:", err);
            res.end(); // Ensure response ends even on error
        });

    } catch (error) {
        console.error("Error fetching completion:", error);
        res.status(500).send("Internal Server Error");
    }
}
