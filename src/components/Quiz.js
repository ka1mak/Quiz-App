import { useContext } from 'react'
import Question from './Question'
import { QuizContext } from '../contexts/quiz'

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  const amountOfAnswers = (amount) => {
    if (!amount) {
      return "You have completed the quiz :( Better luck next time"
    }
  
    if (amount < 5) {
      return "You almost did it."
    }

    return "You have completed the quiz"
  }

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>{amountOfAnswers(quizState.amountOfCorrectAnswers)}</div>
            <div>
              You've got {quizState.amountOfCorrectAnswers} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: 'RESTART' })}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
              className="next-button"
            >
              Next question
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Quiz
