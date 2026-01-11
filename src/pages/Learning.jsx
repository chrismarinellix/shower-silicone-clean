import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Learning.css';

function Learning() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [wrongPaymentAttempts, setWrongPaymentAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);

  const questions = [
    {
      question: "How long should you wait after silicone application before having a shower?",
      options: ["2 hours", "12 hours", "24 hours", "1 week"],
      correct: 2,
      explanation: "You should wait at least 24 hours for silicone to cure properly before exposing it to water!"
    },
    {
      question: "How often should bathroom silicone typically be replaced?",
      options: ["Every year", "Every 3-5 years", "Every 10 years", "Never - it lasts forever!"],
      correct: 1,
      explanation: "Bathroom silicone should be replaced every 3-5 years to maintain proper waterproofing and prevent mold."
    },
    {
      question: "What's the #1 sign that your silicone needs replacing?",
      options: ["It looks shiny", "Black mold spots appearing", "It's still white", "The bathroom smells nice"],
      correct: 1,
      explanation: "Black mold is the biggest warning sign! It can't be cleaned out - replacement is the only solution."
    },
    {
      question: "What type of silicone does Chris use?",
      options: ["Cheap hardware store silicone", "Professional-grade anti-fungal silicone", "Super glue", "Toothpaste"],
      correct: 1,
      explanation: "Chris only uses premium professional-grade anti-fungal silicone that resists mold for years!"
    },
    {
      question: "Why does Chris only work Saturday & Sunday mornings?",
      options: ["He's lazy", "He likes sleeping in on weekdays", "So the silicone can cure for 24-48 hours before you shower on Monday", "He's moonlighting as a DJ"],
      correct: 2,
      explanation: "Working weekend mornings means your silicone has the full weekend to cure properly before your Monday shower!"
    },
    {
      question: "How does Chris like to be paid?",
      options: ["Credit Card", "Bank Transfer", "Cash", "Exposure & Good Vibes"],
      correct: 2,
      isPaymentQuestion: true,
      wrongMessages: [
        "Nice try! But Chris REALLY prefers cash... 💸",
        "Hmm, that's not quite right... Think simpler! 🤔",
        "Getting warmer! But there's one option Chris LOVES... 💰",
        "Come on, you know the answer! It's the green stuff! 🤑"
      ]
    }
  ];

  const generateConfetti = () => {
    const pieces = [];
    const colors = ['#FF6B35', '#F7931E', '#FFD700', '#00D4FF', '#00FF88', '#FF69B4', '#9B59B6'];

    for (let i = 0; i < 150; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        size: 8 + Math.random() * 12,
        type: Math.random() > 0.5 ? 'circle' : 'rect'
      });
    }
    setConfettiPieces(pieces);
  };

  const handleAnswer = (index) => {
    const question = questions[currentQuestion];

    // Payment question special handling
    if (question.isPaymentQuestion) {
      if (index !== question.correct) {
        setWrongPaymentAttempts(prev => prev + 1);
        setSelectedAnswer(index);
        // Shake animation will trigger from CSS
        setTimeout(() => setSelectedAnswer(null), 500);
        return;
      } else {
        // They clicked Cash! Celebrate!
        setShowConfetti(true);
        generateConfetti();
        setSelectedAnswer(index);
        setAnswers([...answers, index]);
        setTimeout(() => {
          setShowResult(true);
        }, 2000);
        return;
      }
    }

    setSelectedAnswer(index);
    setAnswers([...answers, index]);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setWrongPaymentAttempts(0);
    setShowConfetti(false);
    setConfettiPieces([]);
  };

  const getScore = () => {
    return answers.filter((answer, index) => answer === questions[index].correct).length;
  };

  const currentQ = questions[currentQuestion];
  const isPaymentQuestion = currentQ.isPaymentQuestion;
  const hasAnswered = selectedAnswer !== null && !isPaymentQuestion;
  const isCorrect = selectedAnswer === currentQ.correct;

  return (
    <div className="quiz-page">
      {/* Confetti explosion */}
      <AnimatePresence>
        {showConfetti && (
          <div className="confetti-container">
            {confettiPieces.map((piece) => (
              <motion.div
                key={piece.id}
                className={`confetti-piece ${piece.type}`}
                initial={{
                  top: '-10%',
                  left: `${piece.x}%`,
                  rotate: 0,
                  opacity: 1
                }}
                animate={{
                  top: '110%',
                  rotate: piece.rotation + 720,
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: piece.duration,
                  delay: piece.delay,
                  ease: 'easeIn'
                }}
                style={{
                  backgroundColor: piece.color,
                  width: piece.size,
                  height: piece.type === 'rect' ? piece.size * 0.4 : piece.size,
                }}
              />
            ))}

            {/* Streamers */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`streamer-${i}`}
                className="streamer"
                initial={{
                  top: '-20%',
                  left: `${5 + i * 5}%`,
                  scaleY: 1
                }}
                animate={{
                  top: '120%',
                  rotate: [0, 30, -30, 15, -15, 0],
                }}
                transition={{
                  duration: 3 + Math.random(),
                  delay: Math.random() * 0.3,
                  ease: 'easeIn'
                }}
                style={{
                  background: `linear-gradient(180deg,
                    ${['#FF6B35', '#F7931E', '#FFD700', '#00D4FF', '#FF69B4'][i % 5]} 0%,
                    transparent 100%)`,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {!showResult ? (
        <motion.div
          className="quiz-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Progress bar */}
          <div className="quiz-progress">
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="progress-text">Question {currentQuestion + 1} of {questions.length}</span>
          </div>

          {/* Question card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              className="question-card"
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -50, rotateY: 10 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <motion.h2
                className="question-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentQ.question}
              </motion.h2>

              {/* Wrong payment message */}
              <AnimatePresence>
                {isPaymentQuestion && wrongPaymentAttempts > 0 && selectedAnswer === null && (
                  <motion.div
                    className="wrong-payment-message"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    {currentQ.wrongMessages[Math.min(wrongPaymentAttempts - 1, currentQ.wrongMessages.length - 1)]}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Options */}
              <div className="options-grid">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const showCorrect = hasAnswered && index === currentQ.correct;
                  const showWrong = hasAnswered && isSelected && !isCorrect;

                  return (
                    <motion.button
                      key={index}
                      className={`option-button ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showWrong ? 'wrong' : ''}`}
                      onClick={() => handleAnswer(index)}
                      disabled={hasAnswered}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        x: isPaymentQuestion && isSelected && index !== currentQ.correct ? [0, -10, 10, -10, 10, 0] : 0
                      }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        x: { duration: 0.5 }
                      }}
                      whileHover={!hasAnswered ? { scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" } : {}}
                      whileTap={!hasAnswered ? { scale: 0.98 } : {}}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                      <span className="option-text">{option}</span>
                      {showCorrect && <span className="option-icon">✓</span>}
                      {showWrong && <span className="option-icon">✗</span>}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {hasAnswered && (
                  <motion.div
                    className={`explanation ${isCorrect ? 'correct' : 'wrong'}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p>{isCorrect ? '🎉 Correct!' : '😅 Not quite!'} {currentQ.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {hasAnswered && currentQuestion < questions.length - 1 && (
                <motion.button
                  className="next-button"
                  onClick={nextQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next Question →
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          className="result-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <motion.div
            className="result-card"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <motion.div
              className="result-icon"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉
            </motion.div>

            <h2 className="result-title">Quiz Complete!</h2>

            <div className="result-score">
              <span className="score-number">{getScore()}</span>
              <span className="score-divider">/</span>
              <span className="score-total">{questions.length}</span>
            </div>

            <p className="result-message">
              {getScore() === questions.length
                ? "Perfect score! You're a silicone expert! And yes, Chris loves cash! 💰"
                : getScore() >= questions.length - 2
                  ? "Great job! You know your silicone! And remember - Cash is King! 💸"
                  : "Good effort! Now you know more about silicone care. And that Chris prefers cash! 😄"
              }
            </p>

            <div className="result-cta">
              <p>Ready to get your silicone replaced?</p>
              <motion.a
                href="tel:0417035368"
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call Chris: 0417 035 368
              </motion.a>
            </div>

            <motion.button
              className="retry-button"
              onClick={resetQuiz}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Again
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Learning;
