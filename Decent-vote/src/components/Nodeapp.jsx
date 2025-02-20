// // import { useState, createRef } from 'react';
// // import { Canvas } from '@react-three/fiber';
// // import { Nodes, Node } from './Node';
// // import { Text } from '@react-three/drei';
// // import { useFrame } from '@react-three/fiber';

// // const AnimatedText = () => {
// //   const textRef = createRef();
// //   const [position, setPosition] = useState([0, 0, 0]); // Starting position of text in the center
// //   const textArray = ['Decent-Vote'];

// //   // Animate text with random movements and change position over a larger area
// //   useFrame(() => {
// //     setPosition((prev) => {
// //       const randomX = -10 + (Math.random() - 0.5) * 2; // Stay within left side of the canvas
// //       const randomY = (Math.random() - 0.5) * 5; // Randomize y position within the range
// //       return [randomX, randomY, prev[2]]; // Randomize x and y position, keeping x negative for left side
// //     });
// //   });

// //   return (
// //     <group position={position}>
// //       {textArray.map((text, index) => (
// //         <Text
// //           key={index}
// //           position={[3, index * 1, 0]} // Vertically arrange the text and make it larger
// //           fontSize={0.35} // Make text larger to cover more of the canvas
// //           color="white"
// //           fontWeight="bold" // Bold text
// //           ref={textRef}
// //         >
// //           {text}
// //         </Text>
// //       ))}
// //     </group>
// //   );
// // };

// // export default function Nodeapp() {
// //   const [[a, b, c, d, e]] = useState(() => [...Array(5)].map(createRef));

// //   return (
// //     <div className='h-auto w-auto bg-black'>
// //       <Canvas
// //         orthographic
// //         camera={{
// //           zoom: 90, // Zoom level - adjust to fit the nodes and text properly
// //           position: [0, 0, 30], // Move the camera back to view the whole scene
// //           near: 0.1, // Near clipping plane
// //           far: 1000, // Far clipping plane
// //         }}
// //         style={{ width: '100vw', height: '100vh' }} // Full-screen canvas
// //       >
// //         <Nodes>
// //           <Node ref={a} name="#1" color="#204090" position={[-2, 2, 0]} connectedTo={[b, c, e]} />
// //           <Node ref={b} name="#2" color="#904020" position={[2, -3, 0]} connectedTo={[d]} />
// //           <Node ref={c} name="#3" color="#209040" position={[-0.25, 0, 0]} />
// //           <Node ref={d} name="#4" color="#204090" position={[0.5, -0.75, 0]} />
// //           <Node ref={e} name="#5" color="#204090" position={[-0.5, -1, 0]} />
// //         </Nodes>
// //         {/* Animated Text */}
// //         <AnimatedText />
// //       </Canvas>
// //     </div>
// //   );
// // }

// import { useState, createRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Nodes, Node } from './Node';
// import { Text } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// const AnimatedText = () => {
//   const textRef = createRef();
//   const [position, setPosition] = useState([0, 0, 0]); // Starting position of text in the center

//   // Array of text to display
//   const textArray = [
//     'Decent-Vote',
//     'is the best online election platform which enables you to conduct elections with transparency, securely, and at a lower cost.',
//     'It is a blockchain-based online election platform.'
//   ];

//   // Animate text with random movements and change position over a larger area
//   useFrame(() => {
//     setPosition((prev) => {
//       const randomX = -15 + (Math.random() - 0.5) * 10; // Adjust X to be on the left side and move randomly
//       const randomY = (Math.random() - 0.5) * 5; // Randomize Y position over a range
//       return [randomX, randomY, prev[2]]; // Randomize X and Y positions
//     });
//   });

//   return (
//     <group position={position}>
//       {textArray.map((text, index) => (
//         <Text
//           key={index}
//           position={[0, index * 1.5, 0]} // Vertically arrange the text and adjust space between them
//           fontSize={0.5} // Larger font size for better visibility
//           color="white"
//           fontWeight="bold" // Bold text for emphasis
//           ref={textRef}
//         >
//           {text}
//         </Text>
//       ))}
//     </group>
//   );
// };

// export default function Nodeapp() {
//   const [[a, b, c, d, e]] = useState(() => [...Array(5)].map(createRef));

//   return (
//     <div className='h-auto w-auto bg-black'>
//       <Canvas
//         orthographic
//         camera={{
//           zoom: 90, // Adjust zoom level to fit the scene properly
//           position: [0, 0, 30], // Move the camera back to view the whole scene
//           near: 0.1, // Near clipping plane
//           far: 1000, // Far clipping plane
//         }}
//         style={{ width: '100vw', height: '100vh' }} // Full-screen canvas
//       >
//         <Nodes>
//           <Node ref={a} name="#1" color="#204090" position={[-2, 2, 0]} connectedTo={[b, c, e]} />
//           <Node ref={b} name="#2" color="#904020" position={[2, -3, 0]} connectedTo={[d]} />
//           <Node ref={c} name="#3" color="#209040" position={[-0.25, 0, 0]} />
//           <Node ref={d} name="#4" color="#204090" position={[0.5, -0.75, 0]} />
//           <Node ref={e} name="#5" color="#204090" position={[-0.5, -1, 0]} />
//         </Nodes>
//         {/* Animated Text */}
//         <AnimatedText />
//       </Canvas>
//     </div>
//   );
// }

import { useState, createRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Nodes, Node } from './Node';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const AnimatedText = () => {
  const textRef = createRef();
  const [position, setPosition] = useState([0, 0, 0]); // Starting position of text in the center
  const textArray = ['Decent-Vote'];

  // Animate text with random movements and change position over a larger area
  useFrame(() => {
    setPosition((prev) => {
      const randomX = -10 + (Math.random() - 0.5) * 12; // Stay within left side of the canvas
      const randomY = (Math.random() - 0.5) * 10; // Randomize y position within the range
      return [randomX, randomY, prev[2]]; // Randomize x and y position, keeping x negative for left side
    });
  });

  return (
    <group position={position}>
      {textArray.map((text, index) => (
        <Text
          key={index}
          position={[3, index * 1, 0]} // Vertically arrange the text and make it larger
          fontSize={0.35} // Make text larger to cover more of the canvas
          color="white"
          fontWeight="bold" // Bold text
          ref={textRef}
        >
          {text}
        </Text>
      ))}
    </group>
  );
};

export default function Nodeapp() {
  const [[a, b, c, d, e, f, g, h, i]] = useState(() => [...Array(9)].map(createRef));

  return (
    <div className="h-auto w-auto bg-black">
      <Canvas
        orthographic
        camera={{
          zoom: 90, // Zoom level - adjust to fit the nodes and text properly
          position: [0, 0, 30], // Move the camera back to view the whole scene
          near: 0.1, // Near clipping plane
          far: 1000, // Far clipping plane
        }}
        style={{ width: '100vw', height: '100vh' }} // Full-screen canvas
      >
       <Nodes>
          <Node ref={a} name="#1" color="#209090" position={[-0.3, -0.5, 0]} connectedTo={[b, c, d, e, f, g, h, i]} />
          <Node ref={b} name="#2" color="#904020" position={[-0.3, 2, 0]}  />
          <Node ref={c} name="#3" color="#209040" position={[-6, 2, 0]} />
          <Node ref={d} name="#4" color="#307090" position={[5, -3.5, 0]} />
          <Node ref={e} name="#5" color="#f11a50" position={[-6, -3.5, 0]} />
          <Node ref={f} name="#6" color="#477790" position={[-0.5, -3.5, 2]} />
          <Node ref={g} name="#7" color="#704090" position={[5, 2, 0]} />
          <Node ref={h} name="#8" color="#994090" position={[-6, -1, 0]} />
          <Node ref={i} name="#9" color="#994090" position={[7, -1, 0]} />
        </Nodes>
        {/* Animated Text */}
        <AnimatedText />

        {/* Static Text on the right side */}
        <group position={[10, 0, 0]}>
          <Text
            fontSize={0.7}
            color="blue"
            fontWeight="bold"
            position={[-6.7, 1, 0]} // Starting position for the static text
          >
            Decent-vote
          </Text>
          <Text
            fontSize={0.25}
            color="white"
            fontWeight="normal"
            position={[-6.3, 0, 0]} // Slightly move down for next line
          >
            is the best online election platform which 
            </Text>
            <Text
            fontSize={0.25}
            color="white"
            fontWeight="normal"
            position={[-6.5, -0.4, 0]} 
            >
            enables you to conduct elections with
          </Text>
          <Text
            fontSize={0.29}
            color="purple"
            fontWeight="normal"
            position={[-6.3, -0.8, 0]} 
            >
            transparency, securely at a lower cost.

          </Text>
          <Text
            fontSize={0.2}
            color="green"
            fontWeight="normal"
            position={[-6.4, -1.5, 0]} // Slightly move down for next line
          >
            It is a blockchain-based online election platform.
          </Text>
        </group>
      </Canvas>
    </div>
  );
}
