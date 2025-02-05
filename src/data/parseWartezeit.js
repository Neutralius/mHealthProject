// um Sortierung zu ermöglichen, muss alles in Minuten angezeigt werden, sodass es vergleichbar ist
const parseWartezeit = (wartezeitStr) => {
  if (!wartezeitStr || typeof wartezeitStr !== 'string') {
    return 0
  }
  let totalMinutes = 0

  if (wartezeitStr.includes('Std.')) {
    const [hours, minutes] = wartezeitStr.split('Std.')
    totalMinutes = parseInt(hours.trim(), 10) * 60 // radix 10 ist Vorschlag von ESLint
    if (minutes) {
      totalMinutes += parseInt(minutes.replace('Min.', '')
        .trim(), 10)
    }
  } else {
    totalMinutes = parseInt(wartezeitStr.replace('Min.', '')
      .trim(), 10)
  }
  return totalMinutes
}
export default parseWartezeit
