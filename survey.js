const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paragraph = '';

rl.question("What's your name? ", (answer_name) => {
  paragraph += `Nice to meet you ${answer_name}. `;
  rl.question("What's an activity you like doing? ", (answer_hobbie) => {
    paragraph += `We can see you like ${answer_hobbie} `;
    rl.question("What do you listen to while doing that? ", (answer_tune) => {
      paragraph += `and listen some ${answer_tune} at the same time. `;
      rl.question("Which meal is your favourite? ", (answer_meal) => {
        paragraph += `Let's invite you a ${answer_meal} `;
        rl.question("What's your favourite thing to eat for that meal? ", (answer_dish) => {
          paragraph += `and try the best ${answer_dish} in the ciy, sounds awesome!! right?!. `;
          rl.question("Which sport is your absolute favourite? ", (answer_sport) => {
            paragraph += `Additionally, we have tickets for a ${answer_sport} game next week. `;
            rl.question("What is your superpower? ", (answer_superpower) => {
              paragraph += `Join us! who knows you can have a chance to try your ${answer_superpower} while rooting for the home's team.. hehe!`;
              console.log(`\n${paragraph}\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});