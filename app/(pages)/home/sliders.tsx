"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { VenuesData } from '@/data/venues';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface DataProps {
    data: VenuesData[]
}
const Sliders = ({ data }: DataProps) => {

    return (
        <Swiper slidesPerView={4} spaceBetween={20} className='roomSlider'>
            {
                data.map((item, index) => {
                    const { title, permalink, image, ratting, location, promotion, offer, amount, peoples, tea, rooms, count } = item;
                    return (
                        <SwiperSlide key={`item-${index}`}>
                            <Card>
                                <CardContent className='p-4'>
                                    <Link href={permalink} className='h-[180px] rounded-md block overflow-hidden'>
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
                                    <div className='mt-2 flex items-center gap-2.5'>
                                        <Icon icon="iconoir:pin-solid" className='text-danger flex-none w-4 h-4' />
                                        <span>{promotion} promotion</span>
                                        <span>{offer}</span>
                                    </div>
                                    <div className='flex justify-between mt-2'>
                                        <div className='flex items-center gap-1'>
                                            <Icon icon="heroicons:currency-dollar" className='w-4 h-4 text-default-900' />
                                            <span className='text-sm text-default-700'>From ${amount}</span>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <Icon icon="heroicons:user-group" className='w-4 h-4 text-default-900' />
                                            <span className='text-sm text-default-700'>{peoples.from} to {peoples.to}</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center gap-2.5 flex-wrap">
                                        <Badge variant="outline">{tea} tea people</Badge>
                                        <Badge variant="outline">{rooms} Rooms</Badge>
                                        <Badge variant="outline">+{count} more</Badge>
                                    </div>
                                    <p className='mt-4 text-sm text-default-700 flex items-center gap-1'><Icon icon="entypo:shareable"  className='w-4 h-4 text-primary'/> Respond within 24 hours</p>
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