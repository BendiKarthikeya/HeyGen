import { Link } from "react-router";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Create Stunning AI Videos in Minutes
              </h1>
              <p className="lead mb-4">
                Select an avatar and a voice, type your script, and watch your personalized video come to life. No technical skills required.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/create" className="btn btn-light btn-lg px-4">
                  Generate My First Video
                </Link>
                <Link to="/avatars" className="btn btn-outline-light btn-lg px-4">
                  Browse Avatars
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-visual bg-white rounded shadow-lg p-4">
                <div className="video-placeholder bg-light rounded d-flex align-items-center justify-content-center" style={{height: "300px"}}>
                  <div className="text-center">
                    <i className="bi bi-play-circle-fill text-primary" style={{fontSize: "4rem"}}></i>
                    <p className="mt-2 text-muted">Watch Demo Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">How It Works</h2>
              <p className="lead text-muted">Create professional videos in just 3 simple steps</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="step-card p-4">
                <div className="step-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "80px", height: "80px"}}>
                  <i className="bi bi-person-fill" style={{fontSize: "2rem"}}></i>
                </div>
                <h4 className="mb-3">1. Choose Your Avatar</h4>
                <p className="text-muted">Browse our library of diverse and lifelike AI avatars that match your brand and message.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="step-card p-4">
                <div className="step-icon bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "80px", height: "80px"}}>
                  <i className="bi bi-mic-fill" style={{fontSize: "2rem"}}></i>
                </div>
                <h4 className="mb-3">2. Select Voice & Script</h4>
                <p className="text-muted">Pick from a range of natural-sounding voices and type or paste your script in any language.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="step-card p-4">
                <div className="step-icon bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "80px", height: "80px"}}>
                  <i className="bi bi-play-fill" style={{fontSize: "2rem"}}></i>
                </div>
                <h4 className="mb-3">3. Generate & Share</h4>
                <p className="text-muted">Our AI renders your video instantly. Download and share with your audience across all platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Why Choose Our Platform</h2>
              <p className="lead text-muted">Powerful features designed for creators, marketers, and educators</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card h-100 p-4 border rounded shadow-sm">
                <div className="feature-icon text-primary mb-3">
                  <i className="bi bi-people-fill" style={{fontSize: "2.5rem"}}></i>
                </div>
                <h5 className="mb-3">Avatar Variety</h5>
                <p className="text-muted">Access a vast collection of avatars to match your brand and message perfectly.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card h-100 p-4 border rounded shadow-sm">
                <div className="feature-icon text-success mb-3">
                  <i className="bi bi-translate" style={{fontSize: "2.5rem"}}></i>
                </div>
                <h5 className="mb-3">Multilingual Voices</h5>
                <p className="text-muted">Generate videos in dozens of languages with natural accents and pronunciations.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card h-100 p-4 border rounded shadow-sm">
                <div className="feature-icon text-info mb-3">
                  <i className="bi bi-lightning-fill" style={{fontSize: "2.5rem"}}></i>
                </div>
                <h5 className="mb-3">Fast Generation</h5>
                <p className="text-muted">Get your videos ready in record time with our optimized AI workflow.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card h-100 p-4 border rounded shadow-sm">
                <div className="feature-icon text-warning mb-3">
                  <i className="bi bi-shield-check" style={{fontSize: "2.5rem"}}></i>
                </div>
                <h5 className="mb-3">Seamless Integration</h5>
                <p className="text-muted">Built on the Heygen API for high-quality, reliable video generation.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card h-100 p-4 border rounded shadow-sm">
                <div className="feature-icon text-danger mb-3">
                  <i className="bi bi-easel-fill" style={{fontSize: "2.5rem"}}></i>
                </div>
                <h5 className="mb-3">No Technical Skills</h5>
                <p className="text-muted">No prior video editing experience required. If you can type, you can create videos.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card h-100 p-4 border rounded shadow-sm">
                <div className="feature-icon text-secondary mb-3">
                  <i className="bi bi-text-generator" style={{fontSize: "2.5rem"}}></i>
                </div>
                <h5 className="mb-3">AI Text Generator</h5>
                <p className="text-muted">Generate and reface your scripts with our built-in AI text generation tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Who Is This For?</h2>
              <p className="lead text-muted">Discover how different professionals use our platform</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="use-case-card text-center p-4">
                <div className="use-case-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "70px", height: "70px"}}>
                  <i className="bi bi-bullhorn-fill" style={{fontSize: "1.5rem"}}></i>
                </div>
                <h5 className="mb-3">For Marketers</h5>
                <p className="text-muted">Create engaging social media ads, product explainers, and promotional videos that convert.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="use-case-card text-center p-4">
                <div className="use-case-icon bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "70px", height: "70px"}}>
                  <i className="bi bi-book-fill" style={{fontSize: "1.5rem"}}></i>
                </div>
                <h5 className="mb-3">For Educators</h5>
                <p className="text-muted">Build dynamic lesson plans, training modules, and educational content that engages students.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="use-case-card text-center p-4">
                <div className="use-case-icon bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "70px", height: "70px"}}>
                  <i className="bi bi-graph-up-arrow" style={{fontSize: "1.5rem"}}></i>
                </div>
                <h5 className="mb-3">For Sales</h5>
                <p className="text-muted">Personalize outreach videos for prospecting and client communication that builds relationships.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="use-case-card text-center p-4">
                <div className="use-case-icon bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "70px", height: "70px"}}>
                  <i className="bi bi-camera-video-fill" style={{fontSize: "1.5rem"}}></i>
                </div>
                <h5 className="mb-3">For Creators</h5>
                <p className="text-muted">Quickly produce content for YouTube, TikTok, and other platforms without expensive equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Trusted by Thousands</h2>
              <p className="lead text-muted">See what our users are saying</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="testimonial-card p-4 border rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: "50px", height: "50px"}}>
                    <i className="bi bi-person-fill"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Sarah Johnson</h6>
                    <small className="text-muted">Marketing Director</small>
                  </div>
                </div>
                <p className="text-muted">"This platform has revolutionized our content creation process. We can now produce professional videos in minutes instead of hours."</p>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-card p-4 border rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: "50px", height: "50px"}}>
                    <i className="bi bi-person-fill"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Mike Chen</h6>
                    <small className="text-muted">Online Educator</small>
                  </div>
                </div>
                <p className="text-muted">"The multilingual support is incredible. I can create educational content in multiple languages without hiring voice actors."</p>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-card p-4 border rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: "50px", height: "50px"}}>
                    <i className="bi bi-person-fill"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Emily Rodriguez</h6>
                    <small className="text-muted">Content Creator</small>
                  </div>
                </div>
                <p className="text-muted">"As a solo creator, this tool has been a game-changer. I can focus on content strategy while the AI handles video production."</p>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Simple, Transparent Pricing</h2>
              <p className="lead text-muted">Choose the plan that fits your needs</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card p-4 border rounded shadow-sm h-100">
                <div className="text-center mb-4">
                  <h4 className="mb-2">Free</h4>
                  <div className="display-4 fw-bold text-primary">$0</div>
                  <p className="text-muted">Perfect for trying out our platform</p>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>3 videos per month</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>Basic avatars</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>Standard voices</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>HD quality</li>
                </ul>
                <Link to="/create" className="btn btn-outline-primary w-100">Get Started Free</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card p-4 border rounded shadow-sm h-100 border-primary position-relative">
                <div className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2">Most Popular</div>
                <div className="text-center mb-4">
                  <h4 className="mb-2">Pro</h4>
                  <div className="display-4 fw-bold text-primary">$29</div>
                  <p className="text-muted">per month</p>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>50 videos per month</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>Premium avatars</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>All voices & languages</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>4K quality</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>Priority support</li>
                </ul>
                <Link to="/create" className="btn btn-primary w-100">Start Pro Trial</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card p-4 border rounded shadow-sm h-100">
                <div className="text-center mb-4">
                  <h4 className="mb-2">Business</h4>
                  <div className="display-4 fw-bold text-primary">$99</div>
                  <p className="text-muted">per month</p>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>Unlimited videos</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>All avatars & voices</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>API access</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>Custom branding</li>
                  <li className="mb-2"><i className="bi bi-check text-success me-2"></i>24/7 support</li>
                </ul>
                <Link to="/create" className="btn btn-outline-primary w-100">Contact Sales</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Ready to Generate Your First AI Video?</h2>
              <p className="lead mb-4">Join thousands of creators, marketers, and educators who are saving time and effort with our AI video generator.</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/create" className="btn btn-light btn-lg px-5">
                  Sign Up Now - It's Free
                </Link>
                <Link to="/text-generator" className="btn btn-outline-light btn-lg px-5">
                  Try Text Generator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
