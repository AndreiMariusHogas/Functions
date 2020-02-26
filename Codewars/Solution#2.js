//Implement a function likes:: [string] -> String, which must take an input array with Names
//Returns [] => no one likes this
//['peter'] => 'peter likes this'
//['Jacob', 'Alex'] => 'Jacob and Alex likes this'
//['Alex','Jacob','Mark,'Max'] => 'Alex, Jacob, Mark and Max likes this
//Check for size of the input array
//if size is 0 return 'no one likes this'
//if size is 1 return 'x likes this'
//if size is 2 return 'x and y like this'
//if size is 3 return 'x,y and z like this'
//if size is > 3 return 'x, y and length-2 others like this'

function likes(names) {
  let n = names.length;
  if (n === 0) return "no one likes this";
  else if (n === 1) return names[0] + " likes this";
  else if (n === 2) return names[0] + " and " + names[1] + " like this";
  else if (n === 3)
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  else if (n > 3)
    return `${names[0]}, ${names[1]} and ${n - 2} others like this`;
}

likes([]);
likes(["Peter"]);
likes(["Jacob", "Alex"]);
likes(["Max", "John", "Mark"]);
likes(["Alex", "Jacob", "Mark", "Max"]);
