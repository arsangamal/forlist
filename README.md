## Forlist

A javascript library for array operations.

### Installation
```
npm i forlist
```
### Available functions

#### initials([ isInitialsCapital [ , execludeWordsArray ] ])
##### get the initials of a string capital or as it is, with or without some words

    var text = "national aeronautics and space administration";
    console.log(text.initials()); // output: naasa
    console.log(text.initials(false,["and"])); //output: nasa
    console.log(text.initials(true,["and"])); //output: NASA


**More is yet to come ;)** ..

### Test
```
npm run test
```