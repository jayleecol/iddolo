const gestureArea = document.getElementById('gestureArea');
const hammer = new Hammer(gestureArea);

hammer.on('swipeleft swiperight swipeup swipedown', function(event) {
    switch(event.type) {
        case 'swipeleft':
            console.log('Swiped left');
            break;
        case 'swiperight':
            console.log('Swiped right');
            break;
        case 'swipeup':
            console.log('Swiped up');
            break;
        case 'swipedown':
            console.log('Swiped down');
            break;
    }
});
