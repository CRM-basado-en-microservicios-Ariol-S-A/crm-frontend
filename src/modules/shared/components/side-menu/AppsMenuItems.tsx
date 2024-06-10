"use client"
import { useRouter } from 'next/navigation';

import { aplicationsMenu } from '@/lib';
import { Accordion, AccordionItem, Button } from '@nextui-org/react'

export const AppsMenuItems = () => {

    const router = useRouter();

    const itemClasses = {
        titleWrapper: "p-0",
        title: 'p-0 font-semibold text-base text-gray-500',
        base: "w-full",
        content: 'pt-[8px] pb-[12px] ',
        trigger: "p-0"
    };


    return (

        <Accordion
            as='ul'
            showDivider={false}
            className='!px-0 space-y-4'
            itemClasses={itemClasses}
        >
            {
                aplicationsMenu.map(item => (
                    <AccordionItem
                        as='li'
                        startContent={item.icon}
                        key={item.path}
                        title={item.name}
                        onPress={() => router.push(item.path)}
                    >
                        {
                            item.children.map(subItem => (
                                <Button
                                    onPress={() => router.push(subItem.path)}
                                    color='primary'
                                    fullWidth
                                    key={ subItem.path }
                                    className='sidemenu__apps--item'
                                >
                                    <span className='h-[6px] w-[6px] rounded-full bg-gray-600'></span>
                                    {subItem.name}
                                </Button>
                            ))
                        }
                    </AccordionItem>
                ))
            }
        </Accordion>


    )
}
