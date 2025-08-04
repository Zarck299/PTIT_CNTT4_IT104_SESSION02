function getStudentSumary(student) {
    const { name, age, listSubjects } = student;
    const scores = listSubjects.map(subject => subject.score);
    const avgScore = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);

    let classification;
    if (avgScore >= 8) {
        classification = 'Giỏi';
    } else if (avgScore >= 6.5) {
        classification = 'Khá';
    } else if (avgScore >= 5) {
        classification = 'Trung bình';
    } else {
        classification = 'Yếu';
    }
    const bestSubject = listSubjects.reduce((prev, current) => (prev.score > current.score ? prev : current), listSubjects[0]);
    const worstSubject = listSubjects.reduce((prev, current) => (prev.score < current.score ? prev : current), listSubjects[0]);
    return `Ho va ten: ${name}, Tuoi: ${age}\n`+
        `Diem trung binh: ${avgScore}\n`+
        `Mon hoc gioi nhat: ${bestSubject.name} (${bestSubject.score})\n`+
        `Mon hoc yeu nhat: ${worstSubject.name} (${worstSubject.score})\n`
}
const student = {
    name: `Vu Hong Anh`,
    age: 20,
    listSubjects: [
        { name: `Toan`, score: 8.5 },
        { name: `Ly`, score: 7.0 },
        { name: `Hoa`, score: 9.0 },
        { name: `Tin`, score: 6.5 }
    ]
};
console.log(getStudentSumary(student));