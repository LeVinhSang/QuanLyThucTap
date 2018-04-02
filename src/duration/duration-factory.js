const Duration = require('./duration');

class DurationFactory {
    
    make(durationRaw) {
        let duration;
        duration = new Duration(durationRaw.start_date, durationRaw.end_date);
        duration.setId(durationRaw.id);
        return duration;
    }
}

module.exports = DurationFactory;
