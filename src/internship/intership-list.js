class InternshipList {

    constructor(lecturer, interns = []) {
        this.interns = interns;
    }

    addIntern(intern) {
        this.interns.push({
            status: 'PENDING',
            intern: intern
        })
    }

    // todo
}

module.exports = InternshipList;
