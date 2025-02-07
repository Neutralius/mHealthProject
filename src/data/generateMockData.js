// Mock Data für Visualisierungen bis wir real data haben
// Liste mit Berliner Krankenhäusern
// Quelle: https://medium.com/@biplavmazumdar5/mocking-data-in-react-js-or-javascript-3f278ba7f550

const mockDataCache = new Map()

const generateMockData = (locations = []) => locations.map(location => {
  if (!mockDataCache.has(location.Name)) {
    mockDataCache.set(location.Name, {
      Patienten: Math.floor(Math.random() * 30 + 10),
      Wartezeit: Math.floor(Math.random() * 180 + 20)
    })
  }

  // nutze cached data für diesen Standort
  const cachedData = mockDataCache.get(location.Name)
  return {
    ...location,
    ...cachedData,
    id: location.Name
  }
})

export default generateMockData
