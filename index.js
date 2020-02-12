const shadowComponent = (options) => {
    let images = document.querySelectorAll('.shadowComp');

    if (options.shadow_type === 'hard') {
        options.shadow_type = '0px';
    }
    else {
        options.shadow_type = "15px";
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.13)`;

        if (options.padding) {
            image.style.padding = '1em';
        }
    });
};

module.exports.shadowComponent = shadowComponent;