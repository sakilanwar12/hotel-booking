"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { VenuesData } from '@/data/venues';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

interface DataProps {
    data: VenuesData[]
}
const Sliders = ({ data }: DataProps) => {

    return (
        <Swiper slidesPerView={3} spaceBetween={20} className='roomSlider'>
            {
                data.map((item, index) => {
                    const { title, permalink, image, ratting, location, promotion, offer, amount, peoples, tea, rooms, count } = item;
                    return (
                        <SwiperSlide key={`item-${index}`}>
                            <Card>
                                <CardContent className='p-4'>
                                    <Link href={permalink} className='h-[260px] rounded-md block overflow-hidden'>
                                        <Image src={image} alt={title} width={400} height={400} className='w-full h-full object-cover transition-all duration-300 rounded-md hover:scale-125' />
                                    </Link>
                                    <Link href={permalink} className='block mt-4'>
                                        <h3 className='text-lg font-medium text-default-900 hover:text-primary'>{title}</h3>
                                    </Link>
                                    <div className='flex items-center gap-2.5 mt-3'>
                                        <Icon icon="heroicons:star-16-solid" className='text-yellow-400 flex-none w-4 h-4' />
                                        <div>
                                            <span className='text-default-800'>{ratting}</span>
                                            <span className='text-default-700'>(15)</span>
                                        </div>
                                        <div className='text-sm text-default-800'>.{location}</div>
                                    </div>
                                    <div className='mt-3 flex items-center gap-2.5'>
                                        <Icon icon="iconoir:pin-solid" className='text-destructive flex-none w-4 h-4'/>
                                        <span>{promotion} promotion</span>
                                        <span>{offer}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    )
                })
            }


        </Swiper>
    );
}

export default Sliders;