const { SHELL, ANDROID_HOME, JAVA_HOME, NODE } = process.env;

// console.table({ SHELL, ANDROID_HOME, JAVA_HOME, NODE });

export const character = ['Superman', 'Flash', 'Green Lantern', 'Batman'];

const [, , , batman] = character;

console.log(batman);
