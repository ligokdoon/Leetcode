function tournamentWinner(competitions, results) {
    // Write your code here.
    const scores = {};

    for (let i = 0; i < competitions.length; i++) {
        const [home, away] = competitions[i]
        const result = results[i];

        if (result > 0) {
            scores[home] ? scores[home] += 3 : scores[home] = 3;
        } else {
            scores[away] ? scores[away] += 3 : scores[away] = 3;
        }
    }

    const sortedScores = Object.keys(scores).sort((a, b) => {
        if (scores[a] > scores[b]) return -1;
        if (scores[a] < scores[b]) return 1;
    })

    return sortedScores[0];
}
