const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;


function handleCheck(event) {
  // console.log(event);
  // Check if they had the shift key down
  // AND check that they are checking it.
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    // we can go ahead and do as we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween!');
      }

      if(inBetween) {
        checkbox.checked = true;
      }

    });
  }
  lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
