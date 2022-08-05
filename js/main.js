(() => {
    
    console.log('fired! javascript is eating dimsum!');

    // Step 1: go and find the elemetns on the page that you want the user to interact with

    // querySelector takes a CSS selector and uses that to find a match in the HTML file

    // let theBadge = document.querySelector('#png'),
    //     theVector = document.querySelector('#vector');
    // querySelector finds the first element that matches

    // querySelectorAll finds ALL elements that match the selector
    // and returns back an array-like object called a node list
    let pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
		dropZones = document.querySelectorAll('.drop-zone');


   
    function allowDrag(event) {
		console.log('started draggin me');

		// create a reference to the element we're dragging so we can retrieve it later
		event.dataTransfer.setData('draggedEl', this.id);
	}


	function allowDragOver(event) {
		// override default behaviour on certain elements when an event happens
		event.preventDefault();
		console.log('started draggin over me');
	}


	function allowDrop(event) {
		event.preventDefault();
		let droppedElId = event.dataTransfer.getData('draggedEl');
        
        if (this.childElementCount > 0) { return }

		// retrieve the dragged el by its ID, and then put it inside the current drop zone
        let currentTrack = document.querySelector(`audio[data-trackref="${droppedElId}"]`);

		this.appendChild(document.querySelector(`#${droppedElId}`));
        // use the draggedEl to match them up here
        
        currentTrack.play();
	}

	

	pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

    dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});
    

})();