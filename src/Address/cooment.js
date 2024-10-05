 // const { latitude, longitude } = ipResponse.data;
    // console.log(latitude, longitude);
    // const ipResponse1 = await axios.get(
    //   "https://api.ipgeolocation.io/ipgeo?apiKey=c1de0b4dc0124a2faa61540aae419e8f"
    // );
    // const ipData1 = ipResponse1.data;
    // console.log("idaata", ipData);
    // console.log("idaata1", ipData1);

    // const ipResponse2 = await axios.get(
    //   `http://api.ipstack.com/check?access_key=86ad16239582c56e9e57045d584e708f`
    // );
    // const ipData2 = ipResponse2.data;
    // console.log("ip2", ipData2); //

    // const geoResponse = await axios.get(
    //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBtg8VrImpptoQ_0oBmF4oYmRwT_bM7w9s`
    //   );
    // //   const addressComponents = geoResponse.data.results[0].address_components;
    //   console.log(geoResponse)
    //   const district = addressComponents.find(component =>
    //     component.types.includes('administrative_area_level_2')
    //   )?.long_name;

    //   console.log("district",district); // This should print the district name

    // const openCageApiKey = "231b4fdfe6ca45128736ce6217572a80";
    // const response = await axios.get(
    //   `https://api.opencagedata.com/geocode/v1/json?q=${latiitute}+${longitude}&key=${openCageApiKey}`
    // );
    // console.log("opencage", response);



    //   useEffect(() => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//       } else {
//         console.log("Geolocation is not supported by this browser.");
//       }
//     location();
//   }, []);



//   function successCallback(position) {
//     const latitude1 = position.coords.latitude;
//     const longitude1 = position.coords.longitude;
//     setlatitute(latitude1)
//     setlongitude(longitude1)
//     console.log("Latitude:", latitude1);
//     console.log("Longitude:", longitude1);

//     // Use the latitude and longitude in your app
//   }

//   function errorCallback(error) {
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         console.log("User denied the request for Geolocation.");
//         break;
//       case error.POSITION_UNAVAILABLE:
//         console.log("Location information is unavailable.");
//         break;
//       case error.TIMEOUT:
//         console.log("The request to get user location timed out.");
//         break;
//       case error.UNKNOWN_ERROR:
//         console.log("An unknown error occurred.");
//         break;
//     }
//   }

//   useEffect(()=>{
//     const value=()=>{
//         const locationIqApiKey ="pk.4ae2c5a87250e8e5b66fdd5b953bb3e6"
//         const response = axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${locationIqApiKey}&lat=${latiitute}&lon=${longitude}&format=json`);
//         console.log(response)
//     }
//     value()
//   },[])