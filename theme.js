import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { mode } from '@chakra-ui/theme-tools';


const breakpoints = createBreakpoints({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
})


// const styles = {
//   global: props => ({
//     body: {
//       bg: mode('white', '#161616')(props)
//     }
//   })
// }
 const config = {
   initialColorMode: 'dark',
  useSystemColorMode: false

 }

const theme = extendTheme({
    config,
  breakpoints,
})

export default theme