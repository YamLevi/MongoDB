
const findAllTeachersFunc = () => {
    fetch('/find-all-teachers', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "get",
    })
        .then((res) => res.json())
        .then((data) => {
            data.forEach(val => {
                let div = document.createElement('div')
                let name = document.createElement('h1')
                name.innerText = val.fullName
                let id = document.createElement('h3')
                id.innerText = val.id
                let salary = document.createElement('h3')
                salary.innerText = val.salary
                let profession = document.createElement('h3')
                profession.innerText = val.profession

                div.append(name, id, salary, profession)
                document.body.appendChild(div)
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

const findTeachersByInput = () => {
    const maxSalaryInput = document.getElementById("maxSalaryInput").value;

    fetch(`/find-teachers-by-salary-input?maxSalaryInput=${maxSalaryInput}`, {
        hedears: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "get",
    })
        .then((res) => res.json())
        .then((data) => {
            data.forEach(val => {
                let div = document.createElement('div')
                let name = document.createElement('h1')
                name.innerText = val.fullName
                let id = document.createElement('h3')
                id.innerText = val.id
                let salary = document.createElement('h3')
                salary.innerText = val.salary
                let profession = document.createElement('h3')
                profession.innerText = val.profession

                div.append(name, id, salary, profession)
                document.body.appendChild(div)
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
