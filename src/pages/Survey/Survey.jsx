import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumber === 1 ? 1 : questionNumber - 1
    const nextQuestionNumber = questionNumber + 1
    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
        </div>
    )
}

export default Survey