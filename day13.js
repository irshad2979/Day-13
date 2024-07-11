//  Convert to Uppercase

   const gameName = new String ('javascript')
   const newString = gameName.toUpperCase();  
   console.log(newString);

// convert to String 

    const petNames = ["fido", "chicku", "nonu", "poopi",];
     console.log(petNames.toString());

// Extracting Sub String 

     let originalString = "Hello World";
       let substring = originalString.substring(0, 6);
          console.log("Substring:", substring)

// Split A String

    const str = 'This is a split string example';

 const words = str.split(' ');
   console.log(words[3]);

 const chars = str.split('');
   console.log(chars[8]);

 const strCopy = str.split();
    console.log(strCopy);


// Replace Part Of String

 const paragraph = "This is split string example";

   console.log(paragraph.replace("split", 'replace'));

// Add element .Push method

  const games = ['pubg', 'freefire', 'sniper3d'];
  const num = games.push('pess2024');
   console.log(games);

// Remove element .pop method 

  const cars = ['benz', 'ferari', 'scoda', 'Apple'];
 const count = cars.pop('Apple');
    console.log(cars)

// parseInt function 

   let input = ("65");
     let parsed = parseInt(input, 10);
        console.log("Parsed integer:", parsed);

// value is a number NaN() FUNCTION 

   function seconds(x) {
     if (isNaN(x)) {
       return 'is Not a Number!';
     }
     return x * 1000;
   } 
    console.log(seconds('100f'));