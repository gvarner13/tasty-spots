function autocomplete(input, latInput, lngInput) {
    if(!input) return; //skip this fn from running

    const dropdown = new google.maps.places.Autocomplete(input);

    dropdown.addListener('place_changed', () => {
        const place = dropdown.getPlace();
        console.log(place);
    });
}

export default autocomplete;