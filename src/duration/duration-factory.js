const Duration = require('./duration');

class DurationFactory {
    make(durationRaw) {
        let duration = new Duration(durationRaw.startDate, durationRaw.endDate);
        return duration;
    }
}

module.exports = DurationFactory;