import { useState } from 'react';
import Layout from '../components/Layout'; // Import the Layout component

const options = ['Online Store', 'Portfolio', 'Blog', 'Consultant', 'Event', 'Other'];

const NavButton = ({ onClick, children }) => (
  <button onClick={onClick} className="nav-button">
    {children}
  </button>
);

export default function Home() {
  const [choice, setChoice] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [step, setStep] = useState('initial');

  const handleOptionSelect = (type) => {
    setSelectedType(type);
    setStep('describe');
  };

  const handleSubmit = () => {
    setStep('contact');
  };

  const handleReset = () => {
    setChoice(null);
    setSelectedType(null);
    setDescription('');
    setContactInfo({ name: '', email: '', phone: '' });
    setStep('initial');
  };

  return (
    <Layout>
      <header className="header">
        <h1>ZapIt</h1>
        <p>Your Vision, Our Speed</p>
        <p>Creating websites and mobile applications in just 24 hours</p>
      </header>

      {step === 'initial' && !choice && (
        <div className="choice">
          <h2>What are you looking for?</h2>
          <div className="top-nav">
            <NavButton onClick={() => { setChoice('website'); setStep('selectType'); }}>Website</NavButton>
            <NavButton onClick={() => { setChoice('app'); setStep('selectType'); }}>Mobile App</NavButton>
          </div>
        </div>
      )}

      {step === 'selectType' && (
        <div className="select-type">
          <h2>What type of {choice} are you looking for?</h2>
          <div className="options">
            {options.map(option => (
              <button key={option} onClick={() => handleOptionSelect(option)} className="option-button">
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleReset} className="reset-button">Reset</button>
        </div>
      )}

      {step === 'describe' && (
        <div className="describe">
          <h2>Describe your {selectedType} in detail</h2>
          <textarea 
            placeholder={`Describe your ${selectedType.toLowerCase()}...`} 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            aria-label="Design Description"
            className="description-textarea"
          />
          <button onClick={handleSubmit} className="submit-button">Submit</button>
          <button onClick={handleReset} className="reset-button">Reset</button>
        </div>
      )}

      {step === 'contact' && (
        <div className="contact-info">
          <h2>Provide your contact information</h2>
          <input 
            type="text" 
            placeholder="Name" 
            value={contactInfo.name}
            onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
            className="contact-input"
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={contactInfo.email}
            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
            className="contact-input"
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={contactInfo.phone}
            onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
            className="contact-input"
          />
          <button onClick={handleSubmit} className="submit-button">Submit</button>
          <button onClick={handleReset} className="reset-button">Reset</button>
        </div>
      )}
    </Layout>
  );
}
