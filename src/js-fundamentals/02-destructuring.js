const { SHELL, ANDROID_HOME, JAVA_HOME, NODE } = process.env;

// console.table({ SHELL, ANDROID_HOME, JAVA_HOME, NODE });

const character = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [, , , batman] = character;

console.log(batman)
