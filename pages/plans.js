import Layout from '../components/Layout';
import Image from 'next/image';
import plan1Img from '../public/plan1.jpg'; // Update to JPG
import plan2Img from '../public/plan2.jpg'; // Update to JPG
import plan3Img from '../public/plan3.jpg'; // Update to JPG

export default function Plans() {
  return (
    <Layout>
      <header className="header">
        <h1>Our Plans</h1>
        <p>Choose the plan that suits your needs.</p>
      </header>

      <div className="card-container">
        <div className="plan-card">
          <div className="plan-card-inner">
            <div className="plan-card-front">
              <Image src={plan1Img} alt="Plan 1" className="plan-logo" />
              <h2 className="plan-heading">Basic Plan</h2>
              <p className="price">₹200</p>
            </div>
            <div className="plan-card-back">
              <h2 className="plan-heading">Basic Plan</h2>
              <p className="description">Ideal for small projects and startups.</p>
              <p className="price">₹200</p>
            </div>
          </div>
        </div>
        <div className="plan-card">
          <div className="plan-card-inner">
            <div className="plan-card-front">
              <Image src={plan2Img} alt="Plan 2" className="plan-logo" />
              <h2 className="plan-heading">Standard Plan</h2>
              <p className="price">₹350</p>
            </div>
            <div className="plan-card-back">
              <h2 className="plan-heading">Standard Plan</h2>
              <p className="description">Perfect for growing businesses and medium-sized projects.</p>
              <p className="price">₹350</p>
            </div>
          </div>
        </div>
        <div className="plan-card">
          <div className="plan-card-inner">
            <div className="plan-card-front">
              <Image src={plan3Img} alt="Plan 3" className="plan-logo" />
              <h2 className="plan-heading">Premium Plan</h2>
              <p className="price">₹500</p>
            </div>
            <div className="plan-card-back">
              <h2 className="plan-heading">Premium Plan</h2>
              <p className="description">Comprehensive solution for large enterprises and complex needs.</p>
              <p className="price">₹500</p>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer"></div> {/* Spacer for additional space */}

      <footer className="plans-footer">
        <p>For custom domain, logos, and hosting, extra charges may occur. Please read T&C before submitting your application.</p>
      </footer>
    </Layout>
  );
}
