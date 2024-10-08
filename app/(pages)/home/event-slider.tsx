"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { VenuesData } from '@/data/venues';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Pagination } from 'swiper/modules';
import { EventsData } from '@/data/events';
import Typography from '@/components/ui/typography';
import { LocateIcon, SendIcon } from 'lucide-react';
interface DataProps {
    data: EventsData[]
}
const EventSlider = ({ data }: DataProps) => {

    return (
        <div className='relative'>
            <Swiper
                spaceBetween={20}
                className='roomSlider'
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
                pagination={{
                    el: '.event-pagination',
                    clickable: true
                }}
                modules={[Pagination]}
            >
                {
                    data.map((item, index) => {
                        const { title, permalink, image, rating, reviews, price, services, votes, location } = item;
                        return (

                            <SwiperSlide key={`item-${index}`}>
                                <Card className='shadow bg-background border border-background'>
                                    <CardContent className='p-4 '>
                                        <Link href={permalink} className='h-[240px] rounded-t-md block overflow-hidden'>
                                            <Image src={image} alt={title} width={400} height={400} className='w-full h-full object-cover transition-all duration-300 rounded-t-md  hover:scale-125' />
                                        </Link>
                                        <div className='bg-card p-4 rounded-b-md'>
                                        <div className="flex items-center ">
                                            <div className="flex-1">
                                                <Link href={permalink} className='flex items-center gap-1'>
                                                    <Typography as='h4' className=' hover:text-primary max-w-52 truncate'>{title}</Typography>
                                                    <Icon icon="ph:seal-check-bold" />
                                                </Link>
                                            </div>
                                            <div className="flex-none flex items-center">
                                                <Icon icon="mynaui:star-solid" className="w-4 h-4 text-yellow-400" />
                                                {rating}( {reviews} reviews)
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 mt-2">
                                            <SendIcon className='w-4 h-4 text-default-700' /> {location}
                                        </div>

                                        <Typography as='h5' className='mt-2'>Starting price for decor</Typography>
                                        <div className="mt-2 text-default-900 font-bold">
                                            ₹ {price} onwards
                                        </div>

                                        <div className='mt-2'>
                                            {services.slice(0, 3).map((item, index) => <Badge key={index} variant="secondary">{item}</Badge>)}
                                            <span>{services.length > 3 && <span className='underline'>+{services.length - 3} more</span>}</span>
                                        </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="event-pagination mt-8 flex justify-center gap-3 [&>span]:w-3 [&>span]:h-3 [&>span]:rounded-full [&>span]:bg-primary [&>span]:transition-all [&>span]:duration-300 [&>span]:hover:bg-primary/80 [&>span]:cursor-pointer"></div>
        </div >
    );
}

export default EventSlider;