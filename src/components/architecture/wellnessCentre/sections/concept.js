// import React from 'react'
// import conceptImg from '../../../../images/architectureImages/wcImages/ConceptStrategy.png'
// // import { Container } from '@chakra-ui/react'
// // import { Grid, GridItem } from '@chakra-ui/react'
// // import { Box, Heading, Text } from '@chakra-ui/react'

// function Concept() {

//   const conceptStrategy = [
//     {
//       id: 0,
//       image: conceptImg,
//       title: 'Concept  Strategy',
//       content: 'Co-living, a modern day concept that aims to achieve sustainable and affordable ways of living. I wanted to target this co-living scheme towards creative university students and young adults that have started work within the creative field.',
//     }
//   ]

//   return (
//     <>
//       <div className='s-two'>
//         {conceptStrategy.map((concept) => (

//           <Container h='100%' w='100%' bg='green.400' key={concept.id}>
//             {/* <VStack>
//               <Box h='40px' bg='yellow.200'>
//                 1
//               </Box>
//               <Box p={5}>
//                 <Heading fontSize='xl'>{concept.title}</Heading>
//                 <Text mt={4}>{concept.content}</Text>
//               </Box>
//               <Box h='40px' bg='pink.100'>
//                 Wellness Centre
//               </Box>
//             </VStack> */}
//             <Grid
//               h='100%'
//               w='100%'
//               templateRows='repeat(6, 2fr)'
//               templateColumns='repeat(5, 1fr)'
//               gap={4}
//             >
//               <GridItem rowSpan={3} colSpan={5} bg='tomato'>
//                 <img src={concept.image} />
//               </GridItem>
//               <GridItem rowSpan={2} colSpan={5} bg='papayawhip'>
//                 <Box p={5}>
//                   <Heading fontSize='xl'>{concept.title}</Heading>
//                   <Text mt={4}>{concept.content}</Text>
//                 </Box>
//               </GridItem>
//               <GridItem rowSpan={1} colSpan={5} bg='tomato'>
//                 Wellness Centre
//               </GridItem>
//             </Grid>
//             {/* <div className='concept-image'>
//               <img src={concept.image} />
//             </div>
//             <div className='concept-content'>
//               <div className='concept-title'>
//                 <h2>{concept.title}</h2>
//               </div>
//               <div className='concept-text'>
//                 <p>{concept.content}</p>
//               </div>
//             </div> */}
//             {/* <footer className='pageName s-two-footer'>
//               <h6>Wellness Centre</h6>
//             </footer> */}
//           </Container>
//         ))}
//       </div>
//     </>
//   )

// }
// export default Concept