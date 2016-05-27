// event.on('leo-fire', callback)
// event.off('leo-fire')
// event.emit('leo-fire', data)

export let events = {

  events: {},

  // register an event
  on (evtName, callback) {

    this.events[evtName] = this.events[evtName] || [];
    this.events[evtName].push(callback);

  },

  // unbind an event
  off (evtName, callback) {

    if (this.events[evtName]) {

      let len = this.events[evtName].length, i = 0;

      for (; i < len ; i++) {
        if (this.events[evtName][i] === callback) {
          this.events[evtName].splice(i, 1);
          break;
        }
      }


    }

  },

  // fire an event
  emit (evtName, data) {

    if (this.events[evtName]) {
      this.events[evtName].forEach((fn) => {
        fn(data);
      });
    }

  }

};

// 3/9/2016
const events = {

	events: {},

	on(name, callback) {
    this.events[name] = this.events[name] || [];
		this.events[name].push(callback);
	},

	off(name, callback) {
    if (this.events[name]) {
			const index = this.events[name].indexOf(callback);
      if (index !== -1) {
				this.events[name].splice(index, 1);
			}
		}
	},

	emit(name, data) {
		if (this.events[name]) {
			this.events[name].forEach((callback) => {
				callback(data);
			});
		}
	}

};

// // console.log(event);
// const f = (x) => {
//   console.log(x);
// };
//
// const g = (x) => {
//   console.log(x + 1);
// };
//
// events.on('leo', f);
// events.emit('leo', 1);
// events.off('leo', f);
// events.emit('leo', 1);
