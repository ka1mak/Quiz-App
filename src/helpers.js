export const shuffleAnswers = (question) => {
  if (!question) {
    return []
  }

  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswer,
  ]

  return unshuffledAnswers
    .map(answer => ({ sorted: Math.random(), value: answer }))
    .sort((a, b) => a.sorted - b.sorted)
    .map(obj => obj.value)
}
