#  HeyGen AI Video Generator

A comprehensive React-based web application that lets users create stunning AI-generated videos with personalized avatars, voices, and AI-powered text generation. Built with modern web technologies and integrated with cutting-edge AI APIs.

![HeyGen Video Generator](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3) ![License](https://img.shields.io/badge/License-MIT-green)

---

##  Features

###  **Video Generation**
- **Avatar Selection** - Choose from a diverse library of AI avatars
- **Voice Selection** - Multiple natural-sounding voices in various languages
- **Instant Generation** - Create professional videos in minutes
- **High Quality** - HD and 4K video output options

###  **AI Text Generator**
- **Text Refacing** - Improve and polish your scripts with AI
- **Content Generation** - Create engaging content from simple prompts
- **Gemini AI Integration** - Powered by Google's advanced AI models
- **Clean Output** - Automatically formatted, markdown-free text

###  **Modern UI/UX**
- **Professional Home Page** - Complete landing page with features, pricing, and testimonials
- **Responsive Design** - Works perfectly on all devices
- **Shimmer Loading** - Beautiful loading animations
- **Intuitive Navigation** - Easy-to-use sidebar navigation

###  **Advanced Features**
- **Real-time Processing** - Live video generation with progress indicators
- **Multi-language Support** - Generate videos in dozens of languages
- **API Integration** - Built on reliable Heygen API infrastructure
- **No Technical Skills Required** - User-friendly interface for everyone

---

##  **Home Page Sections**

- **Hero Section** - Compelling headline and call-to-action
- **How It Works** - 3-step process explanation
- **Key Features** - Detailed feature showcase
- **Use Cases** - For marketers, educators, sales, and creators
- **Social Proof** - Customer testimonials and reviews
- **Pricing Plans** - Free, Pro, and Business tiers
- **Final CTA** - Clear conversion path

---

##  Installation

1. **Clone the repository**
```bash
git clone https://github.com/BendiKarthikeya/HeyGen.git
cd HeyGen
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env file
VITE_HEYGEN_API_KEY=your_heygen_api_key_here
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5174`

---

##  **Tech Stack**

### **Frontend**
- [React 19.1.1](https://react.dev/) - Modern React with latest features
- [Vite 7.1.2](https://vitejs.dev/) - Fast build tool and dev server
- [React Router 7.8.2](https://reactrouter.com/) - Client-side routing
- [Bootstrap 5.3.8](https://getbootstrap.com/) - Responsive CSS framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon library

### **AI Integration**
- [Google Generative AI](https://ai.google.dev/) - Gemini AI for text generation
- [Heygen API](https://www.heygen.com/) - Video generation and avatar management

### **Development Tools**
- [ESLint](https://eslint.org/) - Code linting
- [PostCSS](https://postcss.org/) - CSS processing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

---

##  **API Setup**

### **Heygen API**
1. Create an account at [Heygen](https://www.heygen.com/)
2. Get your API key from the dashboard
3. Add to your `.env` file:
```bash
VITE_HEYGEN_API_KEY=your_heygen_api_key_here
```

### **Google Gemini AI**
1. Get API key from [Google AI Studio](https://aistudio.google.com/)
2. The API key is already configured in the code
3. For production, move to environment variables

---

##  **Project Structure**

```
HeyGen/
 public/
    index.html
    vite.svg
 src/
    components/
       NavBarComponent.jsx
       AvatarSelector.jsx
       VoiceSelector.jsx
       Shimmer.jsx
       Loader.jsx
       ErrorComponent.jsx
    pages/
       Home.jsx
       Home.css
       Avatars.jsx
       Voices.jsx
       VideoGenerator.jsx
       TextGenerator.jsx
       TextGenerator.css
    context/
       SelectionContext.jsx
    App.jsx
    App.css
    main.jsx
 .gitignore
 package.json
 vite.config.js
 README.md
```

---

##  **Usage**

### **Video Generation**
1. Navigate to **"Create Video"** in the sidebar
2. Select an **Avatar** from the available options
3. Choose a **Voice** that matches your content
4. Enter your script or use the **Text Generator**
5. Click **"Generate Video"** and wait for processing
6. Download and share your video

### **AI Text Generation**
1. Go to **"Text Generator"** in the sidebar
2. Paste your text in the input area
3. Choose **"Reface Text"** to improve existing content
4. Or choose **"Generate Text"** to create new content
5. Copy the generated text to use in your videos

---

##  **Target Users**

- ** Marketers** - Create engaging social media ads and promotional videos
- ** Educators** - Build dynamic lesson plans and training modules
- ** Sales Professionals** - Personalize outreach and client communication
- ** Content Creators** - Produce content for YouTube, TikTok, and other platforms

---

##  **Deployment**

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### **Netlify**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables

### **Manual Deployment**
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

---

##  **Contributing**

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

##  **Performance**

- **Fast Loading** - Optimized with Vite for quick development and builds
- **Responsive** - Mobile-first design that works on all devices
- **Accessible** - Built with accessibility best practices
- **SEO Ready** - Proper meta tags and semantic HTML

---

##  **Security**

- API keys are handled securely
- No sensitive data stored in client-side code
- Environment variables for sensitive configuration
- Regular dependency updates for security patches

---

##  **Roadmap**

- [ ] **Video Templates** - Pre-made templates for different use cases
- [ ] **Batch Processing** - Generate multiple videos at once
- [ ] **Custom Avatars** - Upload and use your own avatar images
- [ ] **Advanced Editing** - Timeline editing and effects
- [ ] **Analytics Dashboard** - Track video performance and usage
- [ ] **Team Collaboration** - Multi-user workspaces
- [ ] **API Documentation** - Comprehensive API reference

---

##  **Troubleshooting**

### **Common Issues**

**API Key Not Working**
- Verify your API key is correct
- Check if the API service is enabled
- Ensure you have sufficient credits/quota

**Video Generation Fails**
- Check your internet connection
- Verify the script is not too long
- Try with a shorter script first

**Text Generator Not Working**
- Ensure Gemini API is enabled
- Check if you have API quota remaining
- Try refreshing the page

---

##  **Support**

- **GitHub Issues** - Report bugs and request features
- **Documentation** - Check this README and code comments
- **Community** - Join discussions in GitHub Discussions

---

##  **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

##  **Acknowledgments**

- [Heygen](https://www.heygen.com/) for the amazing video generation API
- [Google AI](https://ai.google.dev/) for the Gemini AI integration
- [Bootstrap](https://getbootstrap.com/) for the responsive UI framework
- [React](https://react.dev/) team for the excellent framework

---

##  **Star This Repository**

If you found this project helpful, please give it a star! It helps others discover the project and shows your support.

---

<div align="center">

**Made with  by [BendiKarthikeya](https://github.com/BendiKarthikeya)**

[ Live Demo](https://your-demo-url.com) | [ Documentation](https://your-docs-url.com) | [ Report Bug](https://github.com/BendiKarthikeya/HeyGen/issues) | [ Request Feature](https://github.com/BendiKarthikeya/HeyGen/issues)

</div>
