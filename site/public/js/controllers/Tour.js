var Tour = (function() {

    return {
        ROOT: undefined,
        start: function() {
            
            var myTour = [
                {
                    element: '#items',
                    popover: {
                        title: 'Step 1',
                        description: 'This is the description for Step 1',
                        position: 'right'
                    }
                },
                {
                    element: '#file-input',
                    popover: {
                        title: 'Step 2',
                        description: 'this is the description for Step 2',
                        position: 'right'
                    }
                }
            ]
            
            var driver = new Driver()
            driver.defineSteps(myTour)
            driver.start()
        }
    };
})();