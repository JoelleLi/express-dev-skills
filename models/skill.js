const skills = [
    {id: 123456, unit: "1", skill: "Front End Fundamentals", project: "Snake", projectLink: "https://joelleli.github.io/Unit1_Project_Snake/", passed: true},
    {id: 123457, unit: "2", skill: "Full Stack Development", passed: false},
    {id: 123458, unit: "3", skill: "Python and Django", passed: false},
    {id: 123459, unit: "4", skill: "React Fundamentals", passed: false}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}