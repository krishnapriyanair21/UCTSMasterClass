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