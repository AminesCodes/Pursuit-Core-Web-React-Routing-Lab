// import React from "react";
// import axios from "axios";

// import DogImage from "./DogImage";

// export default class DogByBreed extends React.PureComponent {
//   state = {
//     breedList: null,
//     targetBreed: "",
//     loadingBreedList: true,
//     url: ""
//   };

//   async componentDidMount() {
//     try {
//       const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
//       this.setState({ breedList: data.message, loadingBreedList: false });
//     } catch (err) {
//       console.log("Sorry, Something went wrong", err);
//     }

//     this.fetchDogImage();
//   }

//   fetchDogImage = async breed => {
//     let fetchURL = `https://dog.ceo/api/breed/${breed}/images/random`;
//     if (!breed) {
//       fetchURL = "https://dog.ceo/api/breeds/image/random";
//     }

//     try {
//       const { data } = await axios.get(fetchURL);
//       this.setState({ url: data.message });
//     } catch (err) {
//       console.log("Something went wrong Sorry!", err);
//     }
//   };

//   handleBreedSelection = event => {
//     const selectedBreed = event.target.value;
//     this.setState({ targetBreed: selectedBreed });
//     this.fetchDogImage(selectedBreed);
//   };

//   handleReloadNewImage = () => {
//     this.fetchDogImage(this.state.targetBreed);
//   };

//   // ################ RENDER ##################
//   render() {
//     let dogsList = <div className="loader" />;

//     if (this.state.breedList) {
//       const breedList = Object.keys(this.state.breedList);
//       breedList.unshift("");
//       dogsList = (
//         <div>
//           <select
//             value={this.state.targetBreed}
//             onChange={this.handleBreedSelection}
//           >
//             {breedList.map(breed => (
//               <option key={breed} value={breed}>
//                 {breed}
//               </option>
//             ))}
//           </select>
//           <button onClick={this.handleReloadNewImage}>Load New Image</button>
//         </div>
//       );
//     }

//     let dogImage = null;
//     if (!this.state.loadingBreedList && !this.state.url) {
//       dogImage = <div className="loader" />;
//     }
//     if (this.state.url) {
//       dogImage = <DogImage imageUrl={this.state.url} />;
//     }

//     return (
//       <div>
//         {dogsList}
//         {dogImage}
//       </div>
//     );
//   }
// }
