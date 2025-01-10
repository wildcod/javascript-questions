class EventEmitter {
    constructor() {
        this.eventColletion = {}
    }
    subscribe(eventName, callback) {
        if (!(eventName in this.eventColletion)) {
            this.eventColletion[eventName] = []
        }
        this.eventColletion[eventName].push(callback);

        return {
            release: () => {
                if (!(eventName in this.eventColletion)) return;
                const allCallbacks = this.eventColletion[eventName];
                if (allCallbacks.length === 0) {
                    delete this.eventColletion[eventName];
                } else {
                    this.eventColletion[eventName].pop();
                }
            }
        }
    }

    emit(eventName, ...args) {
        if (!(eventName in this.eventColletion)) return;

        const subs = this.eventColletion[eventName]
        subs.forEach((sub) => {
            sub.apply(null, args);
        })
    }
}

const callback1 = (...args) => console.log('callback1', args);
const callback2 = (...args) => console.log('callback2', args);

const emitter = new EventEmitter()

const sub1 = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)
// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback1)

emitter.emit('event1', 1, 2);

sub1.release()

emitter.emit('event1', 5, 6);
sub3.release()

emitter.emit('event1', 5, 6);

