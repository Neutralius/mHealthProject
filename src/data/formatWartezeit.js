const formatWartezeit = (minutes) => {
  if (minutes < 60) return `${minutes} Min.`
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return `${hours} Std. ${remainingMinutes} Min.`
}

export default formatWartezeit
