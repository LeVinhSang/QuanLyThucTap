class InternshipList {

    constructor(lecturer, interns = []) {
        this.interns = interns;
    }

    addIntern(intern) {
        this.interns.push({
            intern: intern
        })
    }

    // todo
}

module.exports = InternshipList;
