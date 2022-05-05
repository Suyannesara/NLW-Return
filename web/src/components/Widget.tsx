import { ChatTeardropDots } from 'phosphor-react';
// import { useState } from 'react';
//Importing popover library
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {
    // // Statae 1 - variable | function
    // const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    // //Change the value of isWidgetOpen (true or false)
    // function toggleWidgetVisibility() {
    //     //putting the opposite value inside the setIsWidgetOpen
    //     setIsWidgetOpen(!isWidgetOpen)
    // }

    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
            {/* conditions */}
            {/* {isWidgetOpen && <p>Hello</p>} */}
            <Popover.Panel>
                {/* importint the widget  */}
                <WidgetForm/>
            </Popover.Panel>

            <Popover.Button className='flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group'>
                <ChatTeardropDots className='w-6 h-6' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>

        </Popover>


    )
}