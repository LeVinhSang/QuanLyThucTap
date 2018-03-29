class InternshipList {

    constructor(lecturer, interns = []) {
        this.lecturer = lecturer;
        this.interns = interns;
    }

    addIntern(intern) {
        this.interns.push({
            status: 'PENDING',
            intern: intern
        })
    }

    getLecturer() {
        return this.lecturer;
    }

    // todo
}

module.exports = InternshipList;
