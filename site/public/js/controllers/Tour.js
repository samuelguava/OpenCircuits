var Tour = (function() {

    return {
        ROOT: undefined,
        start: function() {
            console.log('START TOUR');
            
            var myTour = [
                {
                    element: '#items',
                    popover: {
                        title: 'File Input Button',
                        description: 'This side bar is where you can find all the components. Just simply click and drag an element into the rest of the page.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-ConstantLow',
                    popover: {
                        title: 'Constant Low',
                        description: 'This provides the circuit with no power',
                        position: 'right'
                    }
                },
                {
                    element: '#item-ConstantHigh',
                    popover: {
                        title: 'Constant High',
                        description: 'This provides the circuit with a constant source of power',
                        position: 'right'
                    }
                },
                {
                    element: '#items',
                    popover: {
                        title: 'Step 1',
                        description: 'This is the description for Step 1',
                        position: 'right'
                    }
                },
                // {
                //     element: '#items',
                //     popover: {
                //         title: 'Step 1',
                //         description: 'This is the description for Step 1',
                //         position: 'right'
                //     }
                // },
                // {
                //     element: '#items',
                //     popover: {
                //         title: 'Step 1',
                //         description: 'This is the description for Step 1',
                //         position: 'right'
                //     }
                // },
            ]
            
            var driver = new Driver({ animate: false })
            driver.defineSteps(myTour)
            driver.start()
        }
    };
})();