function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000,
        bonus: 1000,
        getSalary: function () {
            return this.salary + this.bonus;
        },
        setSalary: function (value) {
            this.salary = value;
        },
        getSkills: function () {
            return this.skills;
        },
        setSkills: function (value) {
            this.skills.push(value);
        }
    };
    return member;
}
