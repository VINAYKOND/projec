import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DATOCMS from './project/DATOCMS';
import Whydatocms from './project/Whydatocms';
import Customers from './project/Customers';
import Learn from './project/Learn';
import Marketplace from './project/Marketplace';
import Partners from './project/Partners';
import Pricing from './project/Pricing';
import Contactsales from './project/Contactsales';
import Login from './project/Login';
import Getstarted from './project/Getstarted';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div>
    <nav>
    <Link to="/">DATOCMS</Link>
    <Link to="/whydatocms">Whydatocms</Link>
    <Link to="/customers">Customers</Link>
    <Link to="/learn">Learn</Link>
    <Link to="/marketplace">Marketplace</Link>
    <Link to="/partners">Partners</Link>
    <Link to="/pricing">Pricing</Link>
    <Link to="/contactsales">Contactsales</Link>
    <Link to="/login">Login</Link>
    <button><Link to="/getstarted">Getstarted</Link></button>
</nav>
    <Routes>
          <Route path="/" element={<DATOCMS />} />
          <Route path="/whydatocms" element={<Whydatocms />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactsales" element={<Contactsales />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getstarted" element={<Getstarted />} />
    </Routes>
    <div className='footer'>
      <div className='start'>
      <h1>Start using DatoCMS today</h1>
      <p>According to Gartner 89% of companies plan to compete primarily on the basis of customer experience this year. Don't get caught unprepared.</p>
      <button>Try it for free!</button>
      <h5>No credit card</h5>
      <h6>Easy setup</h6>
      </div>
      <div className='items'>
        <div className='Status'>
      <h1>Status</h1>
      <h4>All systems normal</h4>
      </div>
      <div className='Team'>
      <h1>Team</h1>
      <h4>For developers</h4>
      <h4>For digital marketers</h4>
      <h4>For content creators</h4>
      </div>
      <div className='Pricing'>
      <h1>Pricing</h1>
      </div>
      <div className='Dato'>
      <h1>DatoCMS for Enterprise</h1>
      </div>
      <div className='Features'>
      <h1>Features</h1>
      <h4>Worldwide CDN</h4>
      <h4>GraphQL Content API</h4>
      <h4>Images API</h4>
      <h4>Video API</h4>
      <h4>Multi-language</h4>
      <h4>Dynamic layouts</h4>
      <h4>Content integrity</h4>
      <h4>Workflows NEW</h4>
      <h4>Real-time updates NEW</h4>
      <h4>Structured text NEW</h4>
      </div>
      <div className='Resources'>
      <h1>Resources</h1>
      <h4>Product updates</h4>
      <h4>Documentation</h4>
      <h4>Solution partners</h4>
      <h4>Support</h4>
      <h4>Glossary</h4>
      <h4>Contact sales</h4>
      </div>
      <div className='Social'>
      <h1>Social</h1>
      <h4>Blog</h4>
      <h4>Community forum</h4>
      <h4>Slack channel</h4>
      <h4>Twitter</h4>
      </div>
      <div className='Technologies'>
      <h1>Technologies</h1>
      <h4>Next.js</h4>
      <h4>Gatsby</h4>
      <h4>Nuxt.js</h4>
      <h4>React</h4>
      <h4>Vue.js</h4>
      </div>
      <div className='Company'>
      <h1>Company</h1>
      <h4>About</h4>
      <h4>Brand assets</h4>
      <h4>Security</h4>
      </div>
      <div className='Sitemaps'>
      <h1>Sitemaps</h1>
      <h4>Main pages</h4>
      <h4>Blog</h4>
      <h4>Documentation</h4>
      <h4>Marketplace</h4>
      <h4>Product updates</h4>
      </div>
      </div>
      <div className='Subscribe'>
        <h1>Subscribe to our newsletter! 📥</h1>
        <h3>One update per month. All the latest news and sneak peeks directly in your inbox.</h3>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe!</button>
      </div>
      <div className='Privacy'>
        <h1>Privacy policy</h1>
        <h2>Cookie policy</h2>
        <h3>GDPR Compliance</h3>
        <h4>Terms of Service</h4>
        <p>support@datocms.com ©2024 Dato srl, all rights reserved P.IVA 06969620480</p>
      </div>
    </div>
    </div>
  );
}
export default App;
