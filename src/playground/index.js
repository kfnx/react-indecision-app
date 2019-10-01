// const add = function(a, b, c) {
//   console.log(arguments);
//   return a * b;
// };

// console.log(add(3, 2));

const event = {
  name: "react workshop",
  participant: ["riki", "chen", "abdul"]
  //   getParticipant: function() {
  //     this.participant.forEach(person => {
  //       console.log(this.person + " are participant of " + name);
  //     });
  //   }
};

// event.getParticipant();
event.participant.map((data, index) => {
  console.log(index + "-" + data);
});
