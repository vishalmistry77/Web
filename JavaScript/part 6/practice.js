//function that accepts a list of country names as input and returns the longest country name as output.Example:country=["Australia","Germany","UnitedStatesofAmerica"] output:"UnitedStatesofAmerica
let country = ["Australia","ThiruvananthapuramChennaifjfgfnfbfg","UnitedStatesofAmerica"];
function longSent(country) {
    if(country[0].length > country[1].length){
        if(country[0].length > country[2].length){
            return country[0];
        }
        else {
            return country[2];
        }
    }
    else {
        if(country[1].length > country[2].length) {
            return country[1];
        }
        else {
            return country[2];
        }
    }
}

//to generate a random number with in a range(start,end)
function range(start,end) {
    let diff = end - start;
    console.log(Math.floor((Math.random() * diff)) + start);
}

//to count the number of vowels in a String argument
let stri = "vishal";

function countVowel(s = stri) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i).toLowerCase();
        if (
            ch === 'a' ||
            ch === 'e' ||
            ch === 'i' ||
            ch === 'o' ||
            ch === 'u'
        ) {
            count = count + 1;
        }
    }
    return count;
}
console.log('Vowel count for', stri, '->', countVowel());


//function to extract unique characters from a string.
let stre = "abcdabcdefgggh";

function getUnqiue(stre) {
    let ans = "";
    for (let i = 0; i < stre.length; i++) {
        let currChar = stre[i];
        if (ans.indexOf(currChar) == -1) { //if current character is not added, then add it in ans. Otherwise, it will duplicate it.
            ans += currChar;
        }
    }
    return ans;
}
console.log(getUnqiue(stre));

//function that returns array elements larger than a number
let arre = [2,34,4,5,67,8,9,10];
let num = 5;

function getElements(arre, num) {
    for(let i = 0; i < arre.length; i++){
        if (arre[i] > num){
            console.log(arre[i]);
        }
    }
}

getElements(arre, num);