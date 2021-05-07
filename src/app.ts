/* Numeric Enums and Reverse Mappings */

enum Sizes{
  Small,
  Medium,
  Large
}
enum Sizes{
  ExtraLarge = 3,
}

const selectedSize = 2;

console.log(Sizes.Medium);
console.log(Sizes.Large, Sizes[Sizes.Large]);
console.log(Sizes[selectedSize]);

/* String Enums and Inlining Members */
const enum Sizes2{ // inline members
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

let selected: Sizes2 = Sizes2.Small;

function updateSize(size: Sizes2): void{
  selected = size;
}

updateSize(Sizes2.Large);