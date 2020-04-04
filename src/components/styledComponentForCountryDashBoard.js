import styled from '@emotion/styled';
import tw from 'tailwind.macro';


let CountriesFilterBarContainer =styled.div`
${tw `flex  justify-between `}
`

let CountryCardContainer =styled.div`
${tw `flex  flex-wrap `}
`


let Loading =styled.div`
${tw `h-screen text-2xl p-48 text-center`}
`
// let countryCardStyle =styled.div`
// ${tw `bg-green-500`}
// `


export {CountriesFilterBarContainer,CountryCardContainer,Loading}

