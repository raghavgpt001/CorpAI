## This is your AI assistant for professional writing in a corporate setting.

![image](https://github.com/raghavgpt001/CorpAI/assets/67496636/145b8aaa-366e-4362-a66a-3f40917053fc)



Follow these straightforward steps to set up and run the project:


## Prerequisites

1. **Docker**

2. **Node.js**

3. **Python**



## Getting Started with Docker

1. **Run docker-compose**
   
   ```bash
   docker-compose up -d
   ```
2. **Download LLM from Open Web UI**: Navigate to [http://localhost:3000](http://localhost:3000). Go to settings and download Gemma:2b model.


## Getting Started with Next.js

1. **Install Dependencies**: Navigate to the corp directory and run the following command to install the necessary Node.js modules:

   ```bash
   npm install
   ```
2. **Update Clerk keys**: Create a new file .env.local by copying .env.example and insert the Clerk pushable and secret keys (Follow the steps https://github.com/clerk/clerk-nextjs-demo-pages-router?tab=readme-ov-file)
   

3. **Run the Next.js Application**: Start the Next.js application by running:

   ```bash
   npm run dev
   ```

   Your Next.js application should be up and running on [http://localhost:3001](http://localhost:3001).

## Getting Started with Python

1. **Install Python Requirements**: Navigate to the corp-voice directory and install the required Python packages by running:

   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Python Application**: Execute the Python script to use the voice agents:

   ```bash
   python main.py
   ```

   The Python application will run and interact with the virtual sales agents.

That's it! You're all set to create and use your AI agents with Next.js and Python. Enjoy working with your AI assistant!
