class InternList {

    constructor(lecturer, interns = []) {
        this.interns = interns;
    }

    addIntern(intern) {
        this.interns.push({
            intern: intern
        })
    }
}

module.exports = InternList;
