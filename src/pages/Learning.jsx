import { useState } from 'react';
import '../styles/Learning.css';

function Learning() {
  const [completedModules, setCompletedModules] = useState([]);
  const [currentModule, setCurrentModule] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const modules = [
    {
      id: 1,
      title: 'Understanding Bathroom Silicone',
      icon: '🎓',
      difficulty: 'Beginner',
      duration: '10 min',
      points: 100,
      lessons: [
        {
          title: 'What is Silicone Sealant?',
          content: 'Silicone sealant is a waterproof, flexible material used to seal joints and gaps in bathrooms. It prevents water from seeping into walls and causing damage. Unlike other sealants, silicone remains flexible over time, allowing it to move with building materials as they expand and contract.'
        },
        {
          title: 'Why Silicone in Bathrooms?',
          content: 'Bathrooms need special waterproofing because of constant moisture exposure. Silicone is perfect because it: \n• Creates a waterproof barrier\n• Remains flexible when wet\n• Resists bathroom chemicals\n• Bonds to multiple surfaces (tiles, glass, acrylic)\n• Can be formulated with anti-fungal properties'
        },
        {
          title: 'Types of Bathroom Silicone',
          content: 'Not all silicone is created equal! \n\n**Standard Silicone**: Basic water resistance, affordable but prone to mold\n\n**Anti-Fungal Silicone**: Contains fungicides that prevent mold growth - essential for bathrooms!\n\n**Sanitary Silicone**: Premium formulation specifically designed for wet areas with maximum mold resistance'
        }
      ],
      quiz: [
        {
          question: 'What is the main purpose of silicone in bathrooms?',
          options: ['Decoration', 'Waterproofing and sealing', 'Holding tiles in place', 'Making surfaces slippery'],
          correct: 1
        },
        {
          question: 'Why is flexibility important for bathroom silicone?',
          options: ['It looks better', 'It allows movement without cracking', 'It\'s easier to apply', 'It dries faster'],
          correct: 1
        },
        {
          question: 'What type of silicone is best for bathrooms?',
          options: ['Standard silicone', 'Any type works', 'Anti-fungal or sanitary silicone', 'Outdoor silicone'],
          correct: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Signs Your Silicone Needs Replacing',
      icon: '🔍',
      difficulty: 'Beginner',
      duration: '8 min',
      points: 100,
      lessons: [
        {
          title: 'Black Mold - The #1 Warning Sign',
          content: 'Black spots or streaks on silicone indicate mold growth. This isn\'t just unsightly - it\'s a health hazard! Mold releases spores into the air that can cause respiratory problems, allergies, and worsen asthma. Once mold penetrates silicone, it cannot be fully removed by cleaning. Replacement is the only solution.'
        },
        {
          title: 'Peeling and Lifting',
          content: 'When silicone starts pulling away from surfaces, it loses its waterproof seal. Water can then seep behind tiles and into walls, causing hidden damage. This often starts in corners and high-stress areas. If you can see daylight through gaps, or if the silicone feels loose when touched, it\'s time for replacement.'
        },
        {
          title: 'Discoloration and Age',
          content: 'Yellowing or brown discoloration shows silicone is breaking down. Even without visible mold, discolored silicone has lost its protective properties. Most bathroom silicone should be replaced every 3-5 years, regardless of appearance, to maintain proper waterproofing.'
        }
      ],
      quiz: [
        {
          question: 'Can black mold in silicone be fully removed by cleaning?',
          options: ['Yes, with bleach', 'Yes, with any cleaner', 'No, replacement is needed', 'Sometimes'],
          correct: 2
        },
        {
          question: 'What problem does peeling silicone cause?',
          options: ['Just looks bad', 'Water can seep behind it', 'Makes bathroom cold', 'None really'],
          correct: 1
        },
        {
          question: 'How often should bathroom silicone typically be replaced?',
          options: ['Every year', 'Every 3-5 years', 'Every 10 years', 'Never, it lasts forever'],
          correct: 1
        }
      ]
    },
    {
      id: 3,
      title: 'The Removal Process',
      icon: '🛠️',
      difficulty: 'Intermediate',
      duration: '12 min',
      points: 150,
      lessons: [
        {
          title: 'Why Complete Removal Matters',
          content: 'The secret to long-lasting new silicone is complete removal of the old. Any residue left behind prevents proper adhesion of new silicone. Think of it like painting over dirty walls - it just won\'t stick properly. Professional removal takes time but ensures your new silicone will last for years.'
        },
        {
          title: 'Professional Tools and Techniques',
          content: 'Professionals use specialized tools:\n\n**Silicone Scrapers**: Shaped blades that remove silicone without scratching tiles\n\n**Multi-tools**: Vibrating cutting tools for stubborn old silicone\n\n**Removal Solutions**: Chemical softeners that make old silicone easier to remove\n\nDIY attempts with utility knives often scratch tiles or leave residue. Professional tools make clean, complete removal possible.'
        },
        {
          title: 'The Dangers of Incomplete Removal',
          content: 'Leaving even thin layers of old silicone causes problems:\n• New silicone won\'t bond properly\n• Premature peeling and failure\n• Uneven, unprofessional appearance\n• Shortened lifespan of new sealant\n\nThis is why DIY silicone replacement often fails within months - incomplete removal undermines everything.'
        }
      ],
      quiz: [
        {
          question: 'Why must old silicone be completely removed?',
          options: ['For appearance only', 'So new silicone can bond properly', 'It\'s not that important', 'To save money'],
          correct: 1
        },
        {
          question: 'What\'s the main risk of DIY removal with utility knives?',
          options: ['Takes too long', 'Can scratch or damage tiles', 'Uses too much silicone', 'Makes it waterproof'],
          correct: 1
        },
        {
          question: 'What happens if you apply new silicone over old residue?',
          options: ['Works fine', 'Looks better', 'Won\'t bond properly and will fail early', 'Lasts longer'],
          correct: 2
        }
      ]
    },
    {
      id: 4,
      title: 'Professional Application Techniques',
      icon: '✨',
      difficulty: 'Advanced',
      duration: '15 min',
      points: 200,
      lessons: [
        {
          title: 'Surface Preparation is Key',
          content: 'After removal, professionals thoroughly prepare surfaces:\n\n1. **Deep Cleaning**: Remove all silicone residue and soap scum\n2. **Anti-Fungal Treatment**: Apply solution to kill any mold spores\n3. **Complete Drying**: Ensure surfaces are 100% dry\n4. **Masking**: Apply tape for perfectly straight lines\n\nThis prep work takes as long as the actual application but determines the final result.'
        },
        {
          title: 'The Perfect Application',
          content: 'Professional silicone application requires skill:\n\n**Continuous Beads**: No stopping and starting which creates weak points\n\n**Proper Pressure**: Consistent flow that fills gaps completely\n\n**Correct Angle**: Gun held at optimal angle for gap filling\n\n**Tooling Technique**: Smoothing the bead to create water-shedding profile\n\nYears of experience show in the final smooth, uniform result.'
        },
        {
          title: 'The Cure Process',
          content: 'After application, silicone needs proper curing:\n\n**Skin Time**: 15-30 minutes until surface film forms\n\n**Touch Dry**: 1-2 hours until you can touch it\n\n**Shower Safe**: 24 hours minimum before water exposure\n\n**Full Cure**: 7 days for complete waterproofing\n\nRushing this process compromises the seal and leads to premature failure.'
        }
      ],
      quiz: [
        {
          question: 'What\'s the most important step before applying new silicone?',
          options: ['Buying expensive silicone', 'Thorough surface preparation', 'Working quickly', 'Using lots of silicone'],
          correct: 1
        },
        {
          question: 'How long should you wait before getting new silicone wet?',
          options: ['Immediately', '2 hours', '24 hours minimum', '1 week'],
          correct: 2
        },
        {
          question: 'What does "tooling" the silicone mean?',
          options: ['Removing old silicone', 'Smoothing and shaping the applied bead', 'Measuring the gap', 'Cleaning the area'],
          correct: 1
        }
      ]
    },
    {
      id: 5,
      title: 'Maintaining Your Silicone',
      icon: '💎',
      difficulty: 'Beginner',
      duration: '10 min',
      points: 100,
      lessons: [
        {
          title: 'Daily and Weekly Care',
          content: '**After Each Shower**:\n• Wipe down silicone with a towel or squeegee\n• Remove standing water from joints\n• Use extractor fan for 15-20 minutes\n\n**Weekly Cleaning**:\n• Clean silicone with mild bathroom cleaner\n• Avoid abrasive scrubbers\n• Rinse thoroughly\n• Dry with clean cloth'
        },
        {
          title: 'What to Avoid',
          content: '**Never Use**:\n• Bleach (breaks down anti-fungal properties)\n• Abrasive cleaners or pads (damage surface)\n• Sharp objects to scrape (causes scratches where mold grows)\n• Acidic cleaners (degrade silicone)\n\n**Always Avoid**:\n• Letting water sit on silicone\n• Poor bathroom ventilation\n• Ignoring early signs of mold'
        },
        {
          title: 'Extending Silicone Life',
          content: 'Make your silicone last longer:\n\n**Ventilation**: Always use extractor fans and open windows\n\n**Quick Drying**: Wipe silicone dry after showers\n\n**Regular Cleaning**: Weekly gentle cleaning prevents buildup\n\n**Early Detection**: Address small issues before they become big problems\n\n**Quality Products**: Use pH-neutral bathroom cleaners\n\nWith proper care, quality silicone can last 5-7 years or more!'
        }
      ],
      quiz: [
        {
          question: 'What should you do after every shower?',
          options: ['Nothing', 'Wipe down and dry silicone', 'Spray with bleach', 'Scrub hard'],
          correct: 1
        },
        {
          question: 'Why should you avoid using bleach on silicone?',
          options: ['Too expensive', 'Damages anti-fungal properties', 'Makes it slippery', 'Stains it'],
          correct: 1
        },
        {
          question: 'What\'s the most important factor in extending silicone life?',
          options: ['Expensive silicone', 'Good ventilation and keeping it dry', 'Never using the shower', 'Special chemicals'],
          correct: 1
        }
      ]
    }
  ];

  const startModule = (moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    setCurrentModule(module);
    setCurrentLesson(0);
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  const nextLesson = () => {
    if (currentLesson < currentModule.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else {
      setCurrentLesson('quiz');
    }
  };

  const prevLesson = () => {
    if (currentLesson === 'quiz') {
      setCurrentLesson(currentModule.lessons.length - 1);
    } else if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answerIndex
    });
  };

  const submitQuiz = () => {
    const correctAnswers = currentModule.quiz.filter((q, i) => quizAnswers[i] === q.correct).length;
    const passed = correctAnswers >= currentModule.quiz.length * 0.7; // 70% to pass

    if (passed && !completedModules.includes(currentModule.id)) {
      setCompletedModules([...completedModules, currentModule.id]);
    }

    setShowQuizResults(true);
  };

  const getQuizScore = () => {
    const correctAnswers = currentModule.quiz.filter((q, i) => quizAnswers[i] === q.correct).length;
    return {
      correct: correctAnswers,
      total: currentModule.quiz.length,
      percentage: Math.round((correctAnswers / currentModule.quiz.length) * 100),
      passed: correctAnswers >= currentModule.quiz.length * 0.7
    };
  };

  const exitModule = () => {
    setCurrentModule(null);
    setCurrentLesson(0);
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  const totalPoints = completedModules.reduce((sum, moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    return sum + (module ? module.points : 0);
  }, 0);

  const maxPoints = modules.reduce((sum, module) => sum + module.points, 0);

  return (
    <div className="learning">
      {!currentModule ? (
        <>
          <section className="page-hero">
            <div className="container">
              <h1>Learning Center</h1>
              <p className="subtitle">Master the art of bathroom silicone maintenance</p>
            </div>
          </section>

          <section className="progress-section">
            <div className="container">
              <div className="progress-card">
                <h2>Your Progress</h2>
                <div className="stats">
                  <div className="stat">
                    <div className="stat-number">{completedModules.length}/{modules.length}</div>
                    <div className="stat-label">Modules Completed</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">{totalPoints}</div>
                    <div className="stat-label">Points Earned</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">{Math.round((totalPoints / maxPoints) * 100)}%</div>
                    <div className="stat-label">Complete</div>
                  </div>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(completedModules.length / modules.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </section>

          <section className="modules-section">
            <div className="container">
              <h2>Learning Modules</h2>
              <div className="modules-grid">
                {modules.map(module => (
                  <div
                    key={module.id}
                    className={`module-card ${completedModules.includes(module.id) ? 'completed' : ''}`}
                  >
                    <div className="module-icon">{module.icon}</div>
                    {completedModules.includes(module.id) && (
                      <div className="completed-badge">✓ Completed</div>
                    )}
                    <h3>{module.title}</h3>
                    <div className="module-meta">
                      <span className="difficulty">{module.difficulty}</span>
                      <span className="duration">{module.duration}</span>
                      <span className="points">{module.points} pts</span>
                    </div>
                    <p className="module-preview">{module.lessons.length} lessons + quiz</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => startModule(module.id)}
                    >
                      {completedModules.includes(module.id) ? 'Review' : 'Start Module'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="module-viewer">
          <div className="container">
            <button className="back-button" onClick={exitModule}>← Back to Modules</button>

            <div className="module-header">
              <h1>{currentModule.title}</h1>
              <div className="module-progress">
                Lesson {currentLesson === 'quiz' ? currentModule.lessons.length + 1 : currentLesson + 1} of {currentModule.lessons.length + 1}
              </div>
            </div>

            <div className="lesson-content">
              {currentLesson === 'quiz' ? (
                <div className="quiz-section">
                  <h2>Quiz Time!</h2>
                  <p className="quiz-intro">Test your knowledge. You need 70% to pass.</p>

                  {!showQuizResults ? (
                    <>
                      {currentModule.quiz.map((question, qIndex) => (
                        <div key={qIndex} className="quiz-question">
                          <h3>Question {qIndex + 1}</h3>
                          <p className="question-text">{question.question}</p>
                          <div className="quiz-options">
                            {question.options.map((option, oIndex) => (
                              <button
                                key={oIndex}
                                className={`quiz-option ${quizAnswers[qIndex] === oIndex ? 'selected' : ''}`}
                                onClick={() => handleQuizAnswer(qIndex, oIndex)}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="quiz-actions">
                        <button className="btn btn-outline" onClick={prevLesson}>
                          Previous Lesson
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={submitQuiz}
                          disabled={Object.keys(quizAnswers).length < currentModule.quiz.length}
                        >
                          Submit Quiz
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className={`quiz-results ${getQuizScore().passed ? 'passed' : 'failed'}`}>
                      <div className="results-icon">
                        {getQuizScore().passed ? '🎉' : '📚'}
                      </div>
                      <h3>{getQuizScore().passed ? 'Congratulations!' : 'Keep Learning!'}</h3>
                      <div className="score">
                        <div className="score-number">{getQuizScore().percentage}%</div>
                        <div className="score-detail">
                          {getQuizScore().correct} out of {getQuizScore().total} correct
                        </div>
                      </div>
                      {getQuizScore().passed ? (
                        <>
                          <p>You've mastered this module and earned {currentModule.points} points!</p>
                          <button className="btn btn-primary" onClick={exitModule}>
                            Back to Learning Center
                          </button>
                        </>
                      ) : (
                        <>
                          <p>You need 70% to pass. Review the lessons and try again!</p>
                          <div className="retry-actions">
                            <button className="btn btn-outline" onClick={() => setCurrentLesson(0)}>
                              Review Lessons
                            </button>
                            <button className="btn btn-primary" onClick={() => {
                              setQuizAnswers({});
                              setShowQuizResults(false);
                            }}>
                              Retry Quiz
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="lesson">
                  <h2>{currentModule.lessons[currentLesson].title}</h2>
                  <div className="lesson-text">
                    {currentModule.lessons[currentLesson].content.split('\n').map((paragraph, i) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return <h4 key={i}>{paragraph.replace(/\*\*/g, '')}</h4>;
                      } else if (paragraph.startsWith('•')) {
                        return <li key={i}>{paragraph.substring(1).trim()}</li>;
                      } else if (paragraph.trim()) {
                        return <p key={i}>{paragraph}</p>;
                      }
                      return null;
                    })}
                  </div>

                  <div className="lesson-nav">
                    <button
                      className="btn btn-outline"
                      onClick={prevLesson}
                      disabled={currentLesson === 0}
                    >
                      Previous
                    </button>
                    <button className="btn btn-primary" onClick={nextLesson}>
                      {currentLesson === currentModule.lessons.length - 1 ? 'Take Quiz' : 'Next Lesson'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Learning;
