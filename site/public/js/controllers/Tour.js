var Tour = (function() {

    return {
        ROOT: undefined,
        start: function() {
            console.log('START TOUR');
            
            var myTour = [
                {
                    element: '#items',
                    popover: {
                        title: 'Item Menu',
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
                {
                    element: '#item-ANDGate',
                    popover: {
                        title: 'AND/NAND Gate',
                        description: 'The AND Gate provides power to the circuit only when both inputs are on. The NAND Gate functions as the opposite of an AND Gate: power is NOT provided only when both inputs are off.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-ORGate',
                    popover: {
                        title: 'OR/NOR Gate',
                        description: 'The OR Gate provides power to the circuit when one or both inputs are on. The NOR Gate acts as the opposite of the OR Gate and provides power to the circuit when none of the inputs are on.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-XORGate',
                    popover: {
                        title: 'XOR/XNOR Gate',
                        description: 'The XOR Gate provides power to the circuit when only one input is on. The XNOR Gate acts as the opposite to the XOR Gate and provides power only when both or neither inputs are on.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-SRLatch',
                    popover: {
                        title: 'Gated SR Latch',
                        description: 'The Gated SR Latch has three inputs, S, R, and >. The S and R inputs are normal inputs, but the > input acts as a reset that enables the S and R inputs to produce the outputs Q and Q\'.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-DLatch',
                    popover: {
                        title: 'D Latch',
                        description: 'The D Latch operates similarly to the Gated SR Latch, except the S and R inputs have been connected to a single D input with a NOT Gate so that the S and R inputs will always be opposite.',
                        position: 'right'
                    }
                },
                {
                    element: '#item-SRFlipFlop',
                    popover: {
                        title: ' SR Flip Flop',
                        description: ''
                    }
                }
            ]
            
            var driver = new Driver({ animate: true })
            driver.defineSteps(myTour)
            driver.start()
        }
    };
})();