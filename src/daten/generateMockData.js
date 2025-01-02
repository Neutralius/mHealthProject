// Mock Data für Visualisierungen
// Liste mit Berliner Krankenhäusern
// Quelle: https://medium.com/@biplavmazumdar5/mocking-data-in-react-js-or-javascript-3f278ba7f550

const generateMockData = () => {
    const krankenhaeuser = [
        {id: 1, name: "Charité Campus Mitte"},
        {id: 2, name: "Charité Campus Benjamin Franklin"},
        {id: 3, name: "Charité Campus Virchow-Klinikum"},
        {id: 4, name: "Vivantes Klinikum Friedrichshain"},
        {id: 5, name: "St. Hedwig-Krankenhaus"},
        {id: 6, name: "DRK Kliniken Berlin Westend"},
        {id: 7, name: "Unfallkrankenhaus Berlin"},
        {id: 8, name: "Jüdisches Krankenhaus Berlin"},
        {id: 9, name: "Vivantes Auguste-Viktoria-Klinikum"},
        {id: 10, name: "Krankenhaus Bethel Berlin"},
        {id: 11, name: "Helios Klinikum Berlin-Buch"},
        {id: 12, name: "DRK Kliniken Köpenick"},
        {id: 13, name: "Sana-Klinikum Lichtenberg"},
        {id: 14, name: "Vivantes Klinikum Spandau"},
        {id: 15, name: "St. Joseph Krankenhaus"},
    ];

    // Quelle: https://react.dev/learn/rendering-lists
    return krankenhaeuser.map((krankenhaus) => ({
        ...krankenhaus,
        patienten: Math.floor(Math.random() * 30 + 10),
        wartezeit: Math.floor(Math.random() * 180 + 20),
        auslastung: Math.floor(Math.random() * 30 + 70),
    }));
};

export default generateMockData;

