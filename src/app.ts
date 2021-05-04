/* “typeof” and Type Guards */

/* example
  function foo(bar: string | number) {
    if (typeof bar === 'string') {
      // string
      // bar. will give you string functions
      return bar.toUpperCase;
    }
    // number
    // bar. will give you number prototypes

  } 
*/
// class Song{
//   constructor(public title: string, public duration: string | number) { }
// }

// function getSongDuration(item: Song) {
//   if (typeof item.duration === 'string') {
//     return item.duration;
//   }
//   /* item.duration will be a number */
//   const { duration } = item;
//   const minutes = Math.floor(duration / 60000);
//   const seconds = (duration / 1000) % 60;
//   return `${minutes}:${seconds}`;
// }
// const songDurationFromString = getSongDuration(
//   new Song('Wonderful Wonderful', '05:31')
// )
// console.log(songDurationFromString);

// const songDurationFromMS = getSongDuration(
//   new Song('Wonderful Wonderful 2', 330000)
// )

// console.log(songDurationFromMS);

/* "instanceof" and TypeGuards */

// what is instanceof

class Foo{
  bar() { }
}
// const bar = new Foo();
// console.log(bar instanceof Foo); // same result as below
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);

// class Song{
//   constructor(public title: string, public duration: number) { }
// }
// class Playlist {
//   constructor(public name: string, public songs: Song[]) { }
// }

// function getItemName(item: Song | Playlist) {
//   if (item instanceof Song) {
//     return item.title;
//   }
//   return item.name;
//   // if((item as Song).title){
//   //   return (item as Song).title;
//   // }
//   // return (item as Playlist).name;
// }

// const songName = getItemName(new Song('Wonder', 300000));
// console.log('Song name:', songName);

// const playlistName = getItemName(new Playlist('The Best Songs', [new Song('Heyyo', 300000)]));
// console.log('Playlist Name: ', playlistName);

/* User Defined Type Guards */
// continued

// class Song{
//   constructor(public title: string, public duration: number) { }
// }
// class Playlist {
//   constructor(public name: string, public songs: Song[]) { }
// }

// function isSong(item: any): item is Song { // manually define type guard 
//   return item instanceof Song;
// }
// function getItemName(item: Song | Playlist) {
//   if (isSong(item)) {
//     return item.title;
//   }
//   return item.name;
// }

// const songName = getItemName(new Song('Wonder', 300000));
// console.log('Song name:', songName);

// const playlistName = getItemName(new Playlist('The Best Songs', [new Song('Heyyo', 300000)]));
// console.log('Playlist Name: ', playlistName);

/* Literal Type Guards and “in” Operator */
// continued

// const exists = 'localStorage' in window; // checks if local storage exists in window
// in can be used in for loops
// const foo = 'bar'; // type is 'bar'
class Song{
  kind: 'song'; // type song
  constructor(public title: string, public duration: number) { }
}
class Playlist {
  kind: 'playlist'
  constructor(public name: string, public songs: Song[]) { }
}

function isSong(item: any): item is Song { 
  return 'title' in item; // does property title exist in item
  // return item instanceof Song;
}
function getItemName(item: Song | Playlist) {
  //if (isSong(item)) {
  if (item.kind === 'song'){ // same as above (does not need function)
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song('Wonder', 300000));
console.log('Song name:', songName);

const playlistName = getItemName(new Playlist('The Best Songs', [new Song('Heyyo', 300000)]));
console.log('Playlist Name: ', playlistName);