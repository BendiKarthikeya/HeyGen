import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./TextGenerator.css";

function TextGenerator() {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize Gemini API with environment variable
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  // Function to clean markdown formatting
  const cleanText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold **text**
      .replace(/\*(.*?)\*/g, '$1') // Remove italic *text*
      .replace(/---+/g, '') // Remove horizontal rules
      .replace(/^#{1,6}\s+/gm, '') // Remove markdown headers
      .replace(/^\s*[-*+]\s+/gm, ' ') // Convert list items to bullet points
      .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list formatting
      .replace(/`(.*?)`/g, '$1') // Remove inline code backticks
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
      .trim();
  };

  const handleReface = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to reface");
      return;
    }

    setIsLoading(true);
    setError("");
    setGeneratedText("");

    try {
      // Using gemini-2.5-flash for better performance and cost efficiency
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `Please rewrite the following text to make it more engaging, professional, and polished while maintaining the original meaning. Return only clean text without any markdown formatting, bullet points, or special characters: "${inputText}"`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      setGeneratedText(cleanText(text));
    } catch (err) {
      setError("Error refacing text: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerate = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to generate from");
      return;
    }

    setIsLoading(true);
    setError("");
    setGeneratedText("");

    try {
      // Using gemini-2.5-flash for better performance and cost efficiency
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `Based on the following text, generate creative and engaging content that expands on the ideas. Return only clean text without any markdown formatting, bullet points, or special characters: "${inputText}"`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      setGeneratedText(cleanText(text));
    } catch (err) {
      setError("Error generating text: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Text Generator</h2>
          <p className="text-muted mb-4">
            Enter your text below and choose to either reface it for better quality or generate new content based on it.
          </p>
          
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="inputText" className="form-label">
                  <strong>Input Text</strong>
                </label>
                <textarea
                  id="inputText"
                  className="form-control"
                  rows="6"
                  placeholder="Paste your text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              
              <div className="d-flex gap-3 mb-4">
                <button
                  className="btn btn-primary"
                  onClick={handleReface}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Reface Text"}
                </button>
                <button
                  className="btn btn-success"
                  onClick={handleGenerate}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Generate Text"}
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setInputText("");
                    setGeneratedText("");
                    setError("");
                  }}
                  disabled={isLoading}
                >
                  Clear
                </button>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              {isLoading && (
                <div className="mt-4">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="shimmer-container">
                        <div className="shimmer-line"></div>
                        <div className="shimmer-line"></div>
                        <div className="shimmer-line short"></div>
                        <div className="shimmer-line"></div>
                        <div className="shimmer-line medium"></div>
                        <div className="shimmer-line"></div>
                        <div className="shimmer-line short"></div>
                        <div className="shimmer-line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {generatedText && !isLoading && (
                <div className="mt-4">
                  <label className="form-label">
                    <strong>Generated Result</strong>
                  </label>
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="generated-text">
                        {generatedText}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => navigator.clipboard.writeText(generatedText)}
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextGenerator;
