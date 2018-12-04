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
                        description: 'This side bar is where you can find all the components. Simply click and drag an element into the canvas.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-ConstantLow',
                    popover: {
                        title: 'Constant Low',
                        description: 'This provides no power to the circuit. It is always in an "off" position.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-ConstantHigh',
                    popover: {
                        title: 'Constant High',
                        description: 'This provides the circuit with a constant source of power. It is always "on".',
                        position: 'right'
                    }
                },
                {
                    element: '#item-Button',
                    popover: {
                        title: 'Button',
                        description: 'This is an on/off button that turns on and off when clicked on. Hold the button to provide power to the circuit.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-Switch',
                    popover: {
                        title: 'Switch',
                        description: 'This is a on/off switch. Click to turn on and off.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-Clock',
                    popover: {
                        title: 'Clock',
                        description: 'This provides a constant pulse of power to the circuit. Click to change the clock delay.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-Keyboard',
                    popover: {
                        title: 'Keyboard',
                        description: 'This links your keyboard directly to the circuit so that different keys provide power when pressed.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-LED',
                    popover: {
                        title: 'LED',
                        description: 'This is a Light Emitting Diode. Click to change the LED color.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-SevenSegmentDisplay',
                    popover: {
                        title: 'Seven Segment Display',
                        description: 'This is a simple display that can have up to seven inputs. Each input corresponds to one segment on the display, starting from the middle and going around counterclockwise.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-BUFGate',
                    popover: {
                        title: 'Buffer/NOT Gate',
                        description: 'These are components that delay the flow of power to the rest of the circuit. The NOT Gate produces an output opposite of the input.',
                        position: 'right'
                    }
                },
            ]
            
            var driver = new Driver({ animate: true })
            driver.defineSteps(myTour)
            driver.start()
        }
    };
})();