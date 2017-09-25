console.log('𝒳'.match(/[𝒳𝒴]/)); // ["�", index: 0, input: "𝒳"]
/*
The result would be wrong, 
because by default the regexp engine does not understand surrogate pairs. 
It thinks that [𝒳𝒴] are not two, but four characters: 
the left half of 𝒳 (1), 
the right half of 𝒳 (2), 
the left half of 𝒴 (3), 
the right half of 𝒴 (4).
*/
console.log('𝒳'.match(/[𝒳𝒴]/u)); // ["𝒳", index: 0, input: "𝒳"]
// console.log('𝒴'.match(/[𝒳-𝒵]/)); // error: Range out of order in character class
console.log('𝒴'.match(/[𝒳-𝒵]/u)); // ["𝒴", index: 0, input: "𝒴"]