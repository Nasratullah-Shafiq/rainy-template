function run() {
    var image = document.getElementById('background');
    image.onload = function() {
        var engine = new RainyDay({
            element: image,
            image: this,
            height: 215,
            opacity:1
        });
        engine.trail = engine.positiveMin;
        engine.rain([ [0, 2, 100], [1, 2, 2] ],400);
//        engine.rain([ [0, 2, 200], [3, 3, 1] ], 100);
    };
    image.crossOrigin = 'anonymous';
    image.src = 'images/page-head-2.png';
}

window.onload = function() {
    run();
};