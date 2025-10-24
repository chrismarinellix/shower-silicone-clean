import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/WhenToReplace.css';

function WhenToReplace() {
  const [assessment, setAssessment] = useState({
    age: null,
    mold: null,
    discoloration: null,
    peeling: null,
    gaps: null
  });

  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (question, answer) => {
    setAssessment(prev => ({ ...prev, [question]: answer }));
  };

  const calculateScore = () => {
    const scores = {
      age: { '5+': 3, '3-5': 2, '1-3': 1, '<1': 0 },
      mold: { yes: 3, some: 2, no: 0 },
      discoloration: { yes: 2, some: 1, no: 0 },
      peeling: { yes: 3, some: 2, no: 0 },
      gaps: { yes: 3, some: 2, no: 0 }
    };

    let total = 0;
    Object.keys(assessment).forEach(key => {
      if (assessment[key] && scores[key][assessment[key]] !== undefined) {
        total += scores[key][assessment[key]];
      }
    });

    return total;
  };

  const getRecommendation = () => {
    const score = calculateScore();

    if (score >= 10) {
      return {
        urgency: 'urgent',
        title: 'Replacement Urgently Needed',
        message: 'Your silicone shows multiple signs of serious degradation. Replacement is strongly recommended to prevent water damage and health issues.',
        action: 'Book Now'
      };
    } else if (score >= 6) {
      return {
        urgency: 'soon',
        title: 'Replacement Recommended Soon',
        message: 'Your silicone is showing clear signs of aging and should be replaced in the near future to maintain your bathroom.',
        action: 'Get a Quote'
      };
    } else if (score >= 3) {
      return {
        urgency: 'consider',
        title: 'Consider Replacement',
        message: 'Your silicone is starting to show age. While not urgent, replacement would improve appearance and prevent future issues.',
        action: 'Learn More'
      };
    } else {
      return {
        urgency: 'good',
        title: 'Looking Good!',
        message: 'Your silicone appears to be in good condition. Continue regular cleaning and monitoring for any changes.',
        action: 'Bookmark for Later'
      };
    }
  };

  const allAnswered = Object.values(assessment).every(val => val !== null);

  return (
    <div className="when-to-replace">
      <section className="page-hero">
        <div className="container">
          <h1>When Should You Replace Your Silicone?</h1>
          <p className="subtitle">Use our quick assessment tool to find out</p>
        </div>
      </section>

      <section className="assessment-tool">
        <div className="container">
          <h2>Silicone Condition Assessment</h2>
          <p className="assessment-intro">Answer these quick questions about your bathroom silicone:</p>

          <div className="questions">
            <div className="question-card">
              <h3>How old is your current silicone?</h3>
              <div className="answer-buttons">
                <button
                  className={assessment.age === '<1' ? 'active' : ''}
                  onClick={() => handleAnswer('age', '<1')}
                >
                  Less than 1 year
                </button>
                <button
                  className={assessment.age === '1-3' ? 'active' : ''}
                  onClick={() => handleAnswer('age', '1-3')}
                >
                  1-3 years
                </button>
                <button
                  className={assessment.age === '3-5' ? 'active' : ''}
                  onClick={() => handleAnswer('age', '3-5')}
                >
                  3-5 years
                </button>
                <button
                  className={assessment.age === '5+' ? 'active' : ''}
                  onClick={() => handleAnswer('age', '5+')}
                >
                  5+ years or unknown
                </button>
              </div>
            </div>

            <div className="question-card">
              <h3>Do you see black mold spots on the silicone?</h3>
              <div className="answer-buttons">
                <button
                  className={assessment.mold === 'no' ? 'active' : ''}
                  onClick={() => handleAnswer('mold', 'no')}
                >
                  No mold
                </button>
                <button
                  className={assessment.mold === 'some' ? 'active' : ''}
                  onClick={() => handleAnswer('mold', 'some')}
                >
                  A few spots
                </button>
                <button
                  className={assessment.mold === 'yes' ? 'active' : ''}
                  onClick={() => handleAnswer('mold', 'yes')}
                >
                  Yes, significant mold
                </button>
              </div>
            </div>

            <div className="question-card">
              <h3>Is the silicone discolored or yellowed?</h3>
              <div className="answer-buttons">
                <button
                  className={assessment.discoloration === 'no' ? 'active' : ''}
                  onClick={() => handleAnswer('discoloration', 'no')}
                >
                  No, still white/clear
                </button>
                <button
                  className={assessment.discoloration === 'some' ? 'active' : ''}
                  onClick={() => handleAnswer('discoloration', 'some')}
                >
                  Slight yellowing
                </button>
                <button
                  className={assessment.discoloration === 'yes' ? 'active' : ''}
                  onClick={() => handleAnswer('discoloration', 'yes')}
                >
                  Yes, noticeably yellowed
                </button>
              </div>
            </div>

            <div className="question-card">
              <h3>Is the silicone peeling or lifting away from surfaces?</h3>
              <div className="answer-buttons">
                <button
                  className={assessment.peeling === 'no' ? 'active' : ''}
                  onClick={() => handleAnswer('peeling', 'no')}
                >
                  No peeling
                </button>
                <button
                  className={assessment.peeling === 'some' ? 'active' : ''}
                  onClick={() => handleAnswer('peeling', 'some')}
                >
                  Slight lifting in places
                </button>
                <button
                  className={assessment.peeling === 'yes' ? 'active' : ''}
                  onClick={() => handleAnswer('peeling', 'yes')}
                >
                  Yes, clearly peeling
                </button>
              </div>
            </div>

            <div className="question-card">
              <h3>Are there visible gaps or cracks in the silicone?</h3>
              <div className="answer-buttons">
                <button
                  className={assessment.gaps === 'no' ? 'active' : ''}
                  onClick={() => handleAnswer('gaps', 'no')}
                >
                  No gaps
                </button>
                <button
                  className={assessment.gaps === 'some' ? 'active' : ''}
                  onClick={() => handleAnswer('gaps', 'some')}
                >
                  Small gaps
                </button>
                <button
                  className={assessment.gaps === 'yes' ? 'active' : ''}
                  onClick={() => handleAnswer('gaps', 'yes')}
                >
                  Yes, visible gaps/cracks
                </button>
              </div>
            </div>
          </div>

          {allAnswered && (
            <div className="result-section">
              <button
                className="btn btn-primary btn-large"
                onClick={() => setShowResult(true)}
              >
                See Your Results
              </button>
            </div>
          )}

          {showResult && allAnswered && (
            <div className={`assessment-result ${getRecommendation().urgency}`}>
              <div className="result-content">
                <h3>{getRecommendation().title}</h3>
                <p>{getRecommendation().message}</p>
                <Link to="/contact" className="btn btn-primary">
                  {getRecommendation().action}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="warning-signs">
        <div className="container">
          <h2>Clear Warning Signs You Need Replacement</h2>
          <div className="signs-grid">
            <div className="sign-card urgent">
              <div className="sign-icon">⚠️</div>
              <h3>Immediate Attention Needed</h3>
              <ul>
                <li>Black mold covering large areas</li>
                <li>Silicone completely peeling away</li>
                <li>Large gaps or missing sections</li>
                <li>Water leaking behind tiles</li>
                <li>Visible water damage to walls</li>
              </ul>
            </div>
            <div className="sign-card warning">
              <div className="sign-icon">⚡</div>
              <h3>Plan Replacement Soon</h3>
              <ul>
                <li>Multiple black spots that won't clean</li>
                <li>Yellowing or brown discoloration</li>
                <li>Edges lifting in several places</li>
                <li>Small cracks appearing</li>
                <li>Silicone feels crumbly or brittle</li>
              </ul>
            </div>
            <div className="sign-card monitor">
              <div className="sign-icon">👁️</div>
              <h3>Monitor & Consider</h3>
              <ul>
                <li>A few small mold spots</li>
                <li>Slight discoloration in high-use areas</li>
                <li>Minor edge lifting in corners</li>
                <li>3+ years old</li>
                <li>Aesthetic concerns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="timing-advice">
        <div className="container">
          <h2>Best Times to Schedule Replacement</h2>
          <div className="timing-grid">
            <div className="timing-card">
              <h3>Before Selling Your Home</h3>
              <p>Fresh silicone makes bathrooms look well-maintained and can help buyers feel confident about the property. It's an affordable upgrade that makes a big impression.</p>
            </div>
            <div className="timing-card">
              <h3>Spring Cleaning Season</h3>
              <p>Many homeowners schedule replacement during spring cleaning when they're already refreshing their homes. Perfect timing for a bathroom refresh!</p>
            </div>
            <div className="timing-card">
              <h3>After Deep Cleaning</h3>
              <p>If you've tried cleaning the silicone and it still looks bad, that's a clear sign it's time for replacement. Don't waste more time scrubbing!</p>
            </div>
            <div className="timing-card">
              <h3>Before Winter</h3>
              <p>Ensure your bathroom is properly sealed before cold, damp winter weather arrives. Prevent moisture problems during the wet season.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="prevention">
        <div className="container">
          <h2>How to Extend Silicone Life</h2>
          <div className="prevention-tips">
            <div className="tip">
              <h3>🌬️ Ensure Good Ventilation</h3>
              <p>Always use your extractor fan during and after showers. Open windows when possible. Moisture is silicone's enemy.</p>
            </div>
            <div className="tip">
              <h3>🧼 Clean Regularly</h3>
              <p>Wipe silicone weekly with mild bathroom cleaner. Don't let soap scum and grime build up.</p>
            </div>
            <div className="tip">
              <h3>💧 Dry After Use</h3>
              <p>Quickly wipe down shower areas after use. Reducing standing water significantly extends silicone life.</p>
            </div>
            <div className="tip">
              <h3>🚫 Avoid Harsh Chemicals</h3>
              <p>Don't use bleach or abrasive cleaners on silicone. They break down the anti-fungal properties and damage the material.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Think It Might Be Time?</h2>
          <p>Get a free assessment and quote from our experts</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get Your Free Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default WhenToReplace;
