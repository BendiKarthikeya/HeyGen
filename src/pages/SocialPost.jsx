import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./SocialPost.css";

function SocialPost() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [showTopicInput, setShowTopicInput] = useState(false);
  const [topic, setTopic] = useState("");
  
  // Form data states
  const [formData, setFormData] = useState({
    youtube: {
      title: "",
      description: "",
      tags: "",
      thumbnail: null
    },
    instagram: {
      caption: "",
      hashtags: "",
      media: null
    },
    twitter: {
      tweetText: "",
      hashtags: "",
      media: null
    },
    linkedin: {
      postText: "",
      hashtags: "",
      linkAttachment: ""
    }
  });

  // Initialize Gemini API
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const platforms = [
    {
      id: "youtube",
      name: "YouTube",
      icon: "bi bi-youtube",
      color: "text-danger",
      bgColor: "bg-danger",
      description: "Click to create a post"
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: "bi bi-instagram",
      color: "text-warning",
      bgColor: "bg-warning",
      description: "Click to create a post"
    },
    {
      id: "twitter",
      name: "X (Twitter)",
      icon: "bi bi-twitter-x",
      color: "text-dark",
      bgColor: "bg-dark",
      description: "Click to create a post"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "bi bi-linkedin",
      color: "text-primary",
      bgColor: "bg-primary",
      description: "Click to create a post"
    }
  ];

  const handlePlatformSelect = (platformId) => {
    setSelectedPlatform(platformId);
    setGeneratedContent("");
    setShowTopicInput(false);
  };

  const handleInputChange = (platform, field, value) => {
    setFormData(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform],
        [field]: value
      }
    }));
  };

  const handleFileChange = (platform, field, file) => {
    setFormData(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform],
        [field]: file
      }
    }));
  };

  const handleGeneratePost = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic for your post");
      return;
    }

    setIsGenerating(true);
    setGeneratedContent("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      
      let prompt = "";
      switch (selectedPlatform) {
        case "youtube":
          prompt = `Create a YouTube video post with title, description, and tags for the topic: "${topic}". Format as: Title: [title] Description: [description] Tags: [comma-separated tags]`;
          break;
        case "instagram":
          prompt = `Create an Instagram post with caption and hashtags for the topic: "${topic}". Format as: Caption: [caption] Hashtags: [hashtags]`;
          break;
        case "twitter":
          prompt = `Create a Twitter/X post (max 280 characters) with hashtags for the topic: "${topic}". Format as: Tweet: [tweet text] Hashtags: [hashtags]`;
          break;
        case "linkedin":
          prompt = `Create a LinkedIn professional post with text and hashtags for the topic: "${topic}". Format as: Post: [post text] Hashtags: [hashtags]`;
          break;
        default:
          prompt = `Create a social media post for the topic: "${topic}"`;
      }

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      setGeneratedContent(text);
    } catch (err) {
      alert("Error generating post: " + err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePost = async () => {
    if (!selectedPlatform) return;

    // Validate required fields
    const currentFormData = formData[selectedPlatform];
    let isValid = true;
    let errorMessage = "";

    switch (selectedPlatform) {
      case "youtube":
        if (!currentFormData.title.trim()) {
          isValid = false;
          errorMessage = "Title is required";
        } else if (!currentFormData.description.trim()) {
          isValid = false;
          errorMessage = "Description is required";
        }
        break;
      case "instagram":
        if (!currentFormData.caption.trim()) {
          isValid = false;
          errorMessage = "Caption is required";
        }
        break;
      case "twitter":
        if (!currentFormData.tweetText.trim()) {
          isValid = false;
          errorMessage = "Tweet text is required";
        } else if (currentFormData.tweetText.length > 280) {
          isValid = false;
          errorMessage = "Tweet text must be 280 characters or less";
        }
        break;
      case "linkedin":
        if (!currentFormData.postText.trim()) {
          isValid = false;
          errorMessage = "Post text is required";
        }
        break;
    }

    if (!isValid) {
      alert(errorMessage);
      return;
    }

    setIsPosting(true);

    try {
      // Prepare data for webhook
      const webhookData = {
        platform: selectedPlatform,
        timestamp: new Date().toISOString(),
        data: currentFormData
      };

      // Send to n8n webhook
      const response = await fetch("http://localhost:5680/webhook-test/377ba02e-8a66-4b7f-8f01-ba75848d7cef", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData)
      });

      if (response.ok) {
        alert("Post sent successfully!");
        // Reset form data for the current platform
        setFormData(prev => ({
          ...prev,
          [selectedPlatform]: {
            ...prev[selectedPlatform],
            title: "",
            description: "",
            tags: "",
            caption: "",
            hashtags: "",
            tweetText: "",
            postText: "",
            linkAttachment: "",
            thumbnail: null,
            media: null
          }
        }));
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error posting:", error);
      alert("Error posting: " + error.message);
    } finally {
      setIsPosting(false);
    }
  };

  const handleSaveDraft = () => {
    // For now, just show an alert. You can implement local storage or API call here
    alert("Draft saved locally!");
  };

  const renderPlatformForm = () => {
    if (!selectedPlatform) return null;

    const platform = platforms.find(p => p.id === selectedPlatform);
    const currentFormData = formData[selectedPlatform];

    return (
      <div className="platform-form-container">
        <div className="d-flex align-items-center mb-4">
          <i className={`${platform.icon} ${platform.color} me-3`} style={{fontSize: "2rem"}}></i>
          <h3 className="mb-0">Create {platform.name} Post</h3>
          <button 
            className="btn btn-outline-secondary ms-auto"
            onClick={() => setSelectedPlatform(null)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                {selectedPlatform === "youtube" && (
                  <div className="youtube-form">
                    <div className="mb-3">
                      <label className="form-label">Title *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter video title"
                        value={currentFormData.title}
                        onChange={(e) => handleInputChange("youtube", "title", e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description *</label>
                      <textarea 
                        className="form-control" 
                        rows="4" 
                        placeholder="Enter video description"
                        value={currentFormData.description}
                        onChange={(e) => handleInputChange("youtube", "description", e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Tags</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter tags separated by commas"
                        value={currentFormData.tags}
                        onChange={(e) => handleInputChange("youtube", "tags", e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Upload Thumbnail</label>
                      <input 
                        type="file" 
                        className="form-control" 
                        accept="image/*"
                        onChange={(e) => handleFileChange("youtube", "thumbnail", e.target.files[0])}
                      />
                    </div>
                  </div>
                )}

                {selectedPlatform === "instagram" && (
                  <div className="instagram-form">
                    <div className="mb-3">
                      <label className="form-label">Caption *</label>
                      <textarea 
                        className="form-control" 
                        rows="4" 
                        placeholder="Write your caption"
                        value={currentFormData.caption}
                        onChange={(e) => handleInputChange("instagram", "caption", e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Hashtags</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter hashtags"
                        value={currentFormData.hashtags}
                        onChange={(e) => handleInputChange("instagram", "hashtags", e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Upload Image/Video</label>
                      <input 
                        type="file" 
                        className="form-control" 
                        accept="image/*,video/*"
                        onChange={(e) => handleFileChange("instagram", "media", e.target.files[0])}
                      />
                    </div>
                  </div>
                )}

                {selectedPlatform === "twitter" && (
                  <div className="twitter-form">
                    <div className="mb-3">
                      <label className="form-label">Tweet Text *</label>
                      <textarea 
                        className="form-control" 
                        rows="3" 
                        placeholder="What's happening?"
                        maxLength="280"
                        value={currentFormData.tweetText}
                        onChange={(e) => handleInputChange("twitter", "tweetText", e.target.value)}
                      ></textarea>
                      <div className="form-text">{280 - currentFormData.tweetText.length} characters remaining</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Hashtags</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter hashtags"
                        value={currentFormData.hashtags}
                        onChange={(e) => handleInputChange("twitter", "hashtags", e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Upload Media</label>
                      <input 
                        type="file" 
                        className="form-control" 
                        accept="image/*,video/*"
                        onChange={(e) => handleFileChange("twitter", "media", e.target.files[0])}
                      />
                    </div>
                  </div>
                )}

                {selectedPlatform === "linkedin" && (
                  <div className="linkedin-form">
                    <div className="mb-3">
                      <label className="form-label">Post Text *</label>
                      <textarea 
                        className="form-control" 
                        rows="4" 
                        placeholder="Share your professional thoughts"
                        value={currentFormData.postText}
                        onChange={(e) => handleInputChange("linkedin", "postText", e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Hashtags</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter hashtags"
                        value={currentFormData.hashtags}
                        onChange={(e) => handleInputChange("linkedin", "hashtags", e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Link Attachment</label>
                      <input 
                        type="url" 
                        className="form-control" 
                        placeholder="https://example.com"
                        value={currentFormData.linkAttachment}
                        onChange={(e) => handleInputChange("linkedin", "linkAttachment", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div className="d-flex gap-2 mt-4">
                  <button 
                    className="btn btn-primary"
                    onClick={handleSaveDraft}
                  >
                    <i className="bi bi-save me-2"></i>Save Draft
                  </button>
                  <button 
                    className="btn btn-success"
                    onClick={handlePost}
                    disabled={isPosting}
                  >
                    {isPosting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Posting...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>Post
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">AI Post Generator</h5>
                <p className="text-muted">Let AI help you create engaging content</p>
                
                {!showTopicInput ? (
                  <button 
                    className="btn btn-outline-primary w-100"
                    onClick={() => setShowTopicInput(true)}
                  >
                    <i className="bi bi-magic me-2"></i>Generate Post for Me
                  </button>
                ) : (
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Enter Topic/Idea</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="What do you want to post about?"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                      />
                    </div>
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-primary flex-fill"
                        onClick={handleGeneratePost}
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Generating...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-magic me-2"></i>Generate
                          </>
                        )}
                      </button>
                      <button 
                        className="btn btn-outline-secondary"
                        onClick={() => setShowTopicInput(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {generatedContent && (
                  <div className="mt-3">
                    <h6>Generated Content:</h6>
                    <div className="generated-content p-3 bg-light rounded">
                      <pre style={{whiteSpace: "pre-wrap", fontSize: "0.9rem"}}>{generatedContent}</pre>
                    </div>
                    <button 
                      className="btn btn-sm btn-outline-primary mt-2"
                      onClick={() => navigator.clipboard.writeText(generatedContent)}
                    >
                      <i className="bi bi-clipboard me-1"></i>Copy
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Create Social Post</h2>
          <p className="text-muted mb-4">
            Choose a platform to create engaging social media content
          </p>

          {!selectedPlatform ? (
            <div className="platform-grid">
              <div className="row g-4">
                {platforms.map((platform) => (
                  <div key={platform.id} className="col-md-6 col-lg-3">
                    <div 
                      className="platform-card card h-100 shadow-sm"
                      onClick={() => handlePlatformSelect(platform.id)}
                    >
                      <div className="card-body text-center">
                        <div className={`platform-icon ${platform.bgColor} text-white rounded-circle mx-auto mb-3`}>
                          <i className={`${platform.icon}`} style={{fontSize: "2rem"}}></i>
                        </div>
                        <h5 className="card-title">{platform.name}</h5>
                        <p className="text-muted">{platform.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            renderPlatformForm()
          )}
        </div>
      </div>
    </div>
  );
}

export default SocialPost;
