function passingDivision(percentage) {
    return percentage >= 85 ? "Passed! First Division (Excellent)<br><span style='font-size:100px;'>&#128526;&#128526;&#128526;</span>" : 
        (percentage >= 60 && percentage < 85 ? "Passed! First Division (Good)<br><span style='font-size:100px;'>&#128526;&#128526;</span>" : 
        (percentage >= 50 && percentage < 60 ? "Passed! Second Division (Okay)<br><span style='font-size:100px;'>&#128526;&#128533;</span>" : 
        (percentage >=30 && percentage < 50 ? "Passed! Third Division (Work harder)<br><span style='font-size:100px;'>&#128533;</span>" : "Failed<br><span style='font-size:100px;'>&#128561;&#128561;&#128561;</span>")));
}

function calculatePercantage(score, numberOfQuestions) {
    return (score/numberOfQuestions) * 100;
} 

export {
    passingDivision,
    calculatePercantage
}