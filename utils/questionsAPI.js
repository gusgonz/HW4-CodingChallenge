const getQuestionsList = () => {
    fetch('questions.json', { mode: 'no-cors' })
        .then(questionsList => questionsList.json())
        .catch(error => {
            console.log(error)
        })
}

console.log(getQuestionsList())