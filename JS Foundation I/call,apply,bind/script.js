const wizard = {
  name: "Merlin",
  health: 100,
  heal: function (num1, num2) {
    this.health += num1 + num2;
  },
  sum: function (num1, num2) {
    return num1 + num2;
  },
};

const archer = {
  name: "Robin Hood",
  health: 50,
};

wizard.heal.call(archer, 50, 60);
wizard.heal.apply(archer, [20, 30]);
archer;

// function borrowing

const healArcher = wizard.heal.bind(archer, 50, 60);
console.log(archer);
healArcher();
console.log(archer);

console.log(wizard.sum.call(null, 10, 20));

function func(a, b) {
  return wizard.sum.call(null, a, b);
}

console.log(func(10, 20));

function func_(a, b) {
  const f = wizard.heal.bind(wizard, 10, 20);
  f();
  console.log(wizard);
}

func_.call();
