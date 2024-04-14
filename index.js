let pageB; 
document.getElementsByTagName('button')[0].addEventListener('click', function() {    
   pageB = window.open('page1/page1.html', '_blank');
});

document.getElementsByTagName('button')[1].addEventListener('click', function() {
    const customEvent = new CustomEvent('pageAB', { detail: 'Hola, melseg' });
    pageB.dispatchEvent(customEvent);
});