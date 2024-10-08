import React from 'react';
import './HomePage.css'; // Import the external CSS file

function HomePage() {
  return (
    <div className="container">
      
      <div className="content">
        <h1>SoftPulse is Just <br></br> What Your Business Needs</h1>
        
      </div>
      <div className="cta-buttons">
          <button className="btn read-more">Read More</button>
          <button className="btn contact-us">Contact Us</button>
        </div>
      <div className="side-buttons">
        <button className="side-btn">❤</button>
        <button className="side-btn">🛒</button>
      </div>
      <div className="services-container">
      <h1 className="main-title">We Can Help You Succeed.</h1>
      <div className="services-grid">
        <div className="service-item">
          <div className="icon">💬</div>
          <h3>Great Advices</h3>
          <p>Eam animal cons incorupte, deserun et princip deos de.</p>
        </div>
        <div className="service-item">
          <div className="icon">🎧</div>
          <h3>24/7 Support</h3>
          <p>Eam animal cons incorupte, deserun et princip deos de.</p>
        </div>
        <div className="service-item">
          <div className="icon">👍</div>
          <h3>Optimal Choice</h3>
          <p>Eam animal cons incorupte, deserun et princip deos de.</p>
        </div>
        <div className="service-item">
          <div className="icon">📊</div>
          <h3>Clear Navigation</h3>
          <p>Eam animal cons incorupte, deserun et princip deos de.</p>
        </div>
      </div>
      <div className="homepage-container">
      <div className="text-section">
        <h1>Detailed Sales Reports Just A Few Clicks Away</h1>
        <p>
          Quisque ac dolor nec nisl pellen tesque ulla mor. Vestibulum sed per ultrices mi morbi etam.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>

      {/* The right section containing the featured product and analytics */}
      <div className="image-section">
        <div className="featured-product">
          <div className="card">
            <div className="card-header">
              <h3>Featured</h3>
            </div>
            <div className="card-body">
              <div className="product-image">
                <img src="https://via.placeholder.com/150" alt="Shoe" />
              </div>
              <div className="product-details">
                <h4>Running Shoes</h4>
                <p>$247 <span className="old-price">$297</span></p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="analytics">
          <div className="analytics-box">
            <p>237K Lorem Ipsum</p>
            <div className="chart-info">
              <span>$247 Target Ipsum</span>
              <span>$350 Lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="image-container">
        <img src="https://via.placeholder.com/300x200" alt="Tablet" className="main-image" />
      </div>

      <div className="card-container">
        <div className="card">
          <div className="icon">&#10003;</div>
          <h3>Market Analysis</h3>
          <p>Amcorper uique ac do lo nec nis im pites manei que.</p>
        </div>

        <div className="card">
          <div className="icon">&#10003;</div>
          <h3>Innovative Ideas</h3>
          <p>Amcorper uique ac do lo nec nis im pites manei que.</p>
        </div>

        <div className="card">
          <div className="icon">&#10003;</div>
          <h3>Financial Advice</h3>
          <p>Amcorper uique ac do lo nec nis im pites manei que.</p>
        </div>

        <div className="card">
          <div className="icon">&#10003;</div>
          <h3>Great Solutions</h3>
          <p>Amcorper uique ac do lo nec nis im pites manei que.</p>
        </div>
      </div>
    </div>
    </div>
    
    </div>
    
  );
}

export default HomePage;
