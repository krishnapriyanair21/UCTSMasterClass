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
class Song{
  constructor(public title: string, public duration: string | number) { }
}

function getSongDuration(item: Song) {
  if (typeof item.duration === 'string') {
    return item.duration;
  }
  /* item.duration will be a number */
  const { duration } = item;
  const minutes = Math.floor(duration / 60000);
  const seconds = (duration / 1000) % 60;
  return `${minutes}:${seconds}`;
}
const songDurationFromString = getSongDuration(
  new Song('Wonderful Wonderful', '05:31')
)
console.log(songDurationFromString);

const songDurationFromMS = getSongDuration(
  new Song('Wonderful Wonderful 2', 330000)
)

console.log(songDurationFromMS);