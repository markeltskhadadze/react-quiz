import { Component } from "react"
import classes from "./Quiz.module.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"

class Quiz extends Component {
    state = {
        quiz: []
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz />
                </div>
            </div>
        )
    }
}

export default Quiz