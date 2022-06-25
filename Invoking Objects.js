const developer = {
    name: 'Andrew',
    sayHello: function() {
        console.log('Hi there!');
    },
    favoriteLanguage: function(language) {
        console.log(`My favorite programming language is ${language}`);
    }
};


developer.favoriteLanguage('JavaScript');

let dog = {
    name: 'Romina',
    age: 2,
    weight: "5kg",
    bark: function() {
        console.log('Woo! Woo!');
    },
    greet: function(person) {
        console.log("Hello " + person + '!');
    }
};

dog.bark()
dog.weight
dog.name
dog.greet('Musa')