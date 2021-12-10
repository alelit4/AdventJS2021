# Challenge #1: 🐑 Counting sheep to sleep.

##  🎉 Introduction.
With the excitement of Christmas coming, we've been having a hard time getting 
enough sleep lately. Let's try to use this little trick that will help us 
sleep faster 🐑.

### ✏️ Kata details.
Consider a list/array of sheep. Each sheep has a name and a color. 
Make a function that returns a list with all the sheep that are `red` 
and that also have their names containing both the letters `n` and `a`, 
regardless of the order, capital letters or spaces.

For example, if we have the sheep:

```Javascript
const sheep = [
    { name: 'Noa', color: 'blue' },
    { name: 'Euge', color: 'red' },
    { name: 'Navidad', color: 'red' },
    { name: 'Ki Na Ma', color: 'red'},
    { name: 'AAAAAaaaaa', color: 'red' },
    { name: 'Nnnnnnnn', color: 'red'}
];
```

When executing the method it should return the following:

```Javascript
const filteredSheep = countSheep(sheep);

console.log(filteredSheep);

// [{ name: 'Navidad', color: 'red' },
//  { name: 'Ki Na Ma', color: 'red' }]
```

👉 Remember. It must contain the two letters `'a'` and `'n'` in the name.
Do not count sheep that only have one of the letters, they must have both.

## 🚀 Getting Started.
Basic instructions to run and use the project, here we can link the contributing section where it is explained in depth.

### ✔️ Pre-requisites. 
List of software or other things needed to launch the project and instructions about how to download and install them.

### 🛠 Installation. 
Step by step guide about how to install the project. It is something like a tutorial about the software installation (it could include images, code snippets or screenshots if it is neccessary).

### ✈️ Running the kata.
Step by step guide about how to run the project. It is something like a tutorial about the project running (it could include images, code snippets or screenshots if it is neccessary).

_To know more about project installation and running see [Getting Started section of contributing document](./docs/CONTRIBUTING.md#getting-started-)._

---
🔗[Original adventjs kata link](https://adventjs.dev/challenges/01) 