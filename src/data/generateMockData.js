// Mock Data für Visualisierungen bis wir real data haben
// Liste mit Berliner Krankenhäusern
// Quelle: https://medium.com/@biplavmazumdar5/mocking-data-in-react-js-or-javascript-3f278ba7f550

import formatWartezeit from "./formatWartezeit.js";

const generateMockData = () => {
    const krankenhaeuser = [
        {id: 1, Name: "Charité Campus Mitte"},
        {id: 2, Name: "Charité Campus Benjamin Franklin"},
        {id: 3, Name: "Charité Campus Virchow-Klinikum"},
        {id: 4, Name: "Vivantes Klinikum Friedrichshain"},
        {id: 5, Name: "St. Hedwig-Krankenhaus"},
        {id: 6, Name: "DRK Kliniken Berlin Westend"},
        {id: 7, Name: "Unfallkrankenhaus Berlin"},
        {id: 8, Name: "Jüdisches Krankenhaus Berlin"},
        {id: 9, Name: "Vivantes Auguste-Viktoria-Klinikum"},
        {id: 10, Name: "Krankenhaus Bethel Berlin"},
        {id: 11, Name: "Helios Klinikum Berlin-Buch"},
        {id: 12, Name: "DRK Kliniken Köpenick"},
        {id: 13, Name: "Sana-Klinikum Lichtenberg"},
        {id: 14, Name: "Vivantes Klinikum Spandau"},
        {id: 15, Name: "St. Joseph Krankenhaus"},
    ];

    // Quelle: https://react.dev/learn/rendering-lists
    return krankenhaeuser.map((krankenhaus) => {
        const wartezeit = Math.floor(Math.random() * 180 + 20);
        return {
        ...krankenhaus,
        Patienten: Math.floor(Math.random() * 30 + 10),
        Wartezeit: formatWartezeit(wartezeit)
        };
    });
};

export default generateMockData;

