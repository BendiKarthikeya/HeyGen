# 🎥 Heygen Video Generator

A React-based web application that lets users select **avatars** and **voices** from the Heygen API to generate personalized videos.
Built with **React**, **React Router**, **Bootstrap**, and **Axios**.

---

## 🚀 Features

* Avatar Selector (fetches data from Heygen API)
* Voice Selector (fetches voices from Heygen API)
* Shimmer UI while loading
* Responsive UI with Bootstrap
* Modular components (Header, Footer, etc.)

---

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/heygen-video-generator.git
cd heygen-video-generator
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

---

## 🛠 Dependencies

* [React](https://react.dev/)
* [React DOM](https://www.npmjs.com/package/react-dom)
* [React Router DOM](https://reactrouter.com/)
* [Axios](https://axios-http.com/) (for API requests)
* [Bootstrap](https://getbootstrap.com/) (for styling)
* [Bootstrap Icons](https://icons.getbootstrap.com/)

Install them manually if needed:

```bash
npm install react react-dom react-router-dom axios bootstrap bootstrap-icons
```

---

## 🔑 API Setup

This project uses the **Heygen API**.

* Create an account at [Heygen](https://www.heygen.com/)
* Get your API key
* Create a `.env` file in the root of your project:

```bash
VITE_HEYGEN_API_KEY=your_api_key_here
```

Your Axios requests should use:

```javascript
headers: {
  accept: "application/json",
  "x-api-key": import.meta.env.VITE_HEYGEN_API_KEY
}
```

---

## 📂 Project Structure

```
src/
│── components/
│   ├── HeaderComponent.jsx
│   ├── FooterComponent.jsx
│   ├── AvatarSelector.jsx
│   ├── VoiceSelector.jsx
│   ├── Shimmer.jsx
│── App.jsx
│── main.jsx
public/
│── index.html
```

---

## 🖥 Usage

* Navigate to `/` to see the **Video Generator**
* Select an **Avatar**
* Select a **Voice**
* Preview and generate video

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the MIT License.
