let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() { // показує поточний крок
        alert(this.step);
        return this;
    }
};

// Виклики по ланцюжку
ladder.up().up().down().showStep(); // 1