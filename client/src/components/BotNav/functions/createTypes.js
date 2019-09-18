// function createTypes(array, arrayTypeImage) {
//   if (array.length > 0) {
//     array.forEach(e => {
//       arrayTypeImage.push(
//         <TypeImage
//           key={uuid.v4()}
//           type={e}
//           color={jsonTypes[e].color}
//           img={typeImagesImport[e]}
//         />,
//       )
//     })
//   }
// }
// export default function modeDropDown(modes) {
//     let div = [];
//     for (let i = 0; i < modes.length; i++) {
//       let mode = modes[i];
//       if (mode === "Ionian") {
//         div.push(
//           <option mode={`mode${mode}`} key={mode} id={i} name="mode" selected>
//             {mode}
//           </option>
//         );
//       } else {
//         div.push(
//           <option mode={`mode${mode}`} key={mode} id={i} name="mode">
//             {mode}
//           </option>
//         );
//       }
//     }
//     return div;
//   }
export default createTypes
