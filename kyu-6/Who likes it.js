// function likes(names) {
//   // TODO
//   if (names.length == 0) return 'no one likes this';
//   if (names.length == 1) return `${names[0]} likes this`;
//   if (names.length == 2) return `${names[0]} and ${names[1]} like this`;
//   if (names.length == 3)
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// }

function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}
likes([]); // 'no one likes this');
likes(['Peter']); // 'Peter likes this');
likes(['Jacob', 'Alex']); // 'Jacob and Alex like this');
likes(['Max', 'John', 'Mark']); // 'Max, John and Mark like this');
likes(['Alex', 'Jacob', 'Mark', 'Max']); // 'Alex, Jacob and 2 others like this');
