import React from 'react';

function Quiz() {
  const [score, setScore] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questions = [
    {
      question: "Qual é o maior roedor do mundo?",
      options: ["Castor", "Capivara", "Porco-espinho", "Rato"],
      correctAnswer: "Capivara"
    },
    {
      question: "Quanto tempo uma capivara pode ficar submersa na água?",
      options: ["30 segundos", "1 minuto", "3 minutos", "5 minutos"],
      correctAnswer: "5 minutos"
    },
    {
      question: "As capivaras são encontradas em qual continente?",
      options: ["África", "Ásia", "América do Sul", "Europa"],
      correctAnswer: "América do Sul"
    }
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h2>Quiz sobre Capivaras</h2>
      <div className="card">
        {currentQuestion < questions.length ? (
          <div>
            <h3>{questions[currentQuestion].question}</h3>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} className="btn" style={{margin: '5px'}}>
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <h3>Quiz concluído!</h3>
            <p>Sua pontuação: {score} de {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
