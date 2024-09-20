'use client';


import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Icon } from "@/components/ui/icon"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const CustomBreadcrumb = ({ pageTitle }: { pageTitle: string }) => {
    const location = usePathname();
    const locations = location.split('/').filter(path => path)



    return (
        <div className="flex  flex-col md:flex-row justify-between gap-3 md:items-center mb-6">
            {
                pageTitle && <div className="flex-none">
                    <h2 className="font-medium text-default-900 text-lg">{pageTitle}</h2>
                </div>
            }
            <div className="flex-1 flex md:justify-end">
                <Breadcrumb>
                    <BreadcrumbList>

                        <BreadcrumbItem >
                            <Link href="/dashboard">
                                <Icon icon="heroicons:home" className=" h-5 w-5 text-default-600" />
                            </Link>

                        </BreadcrumbItem>
                        <BreadcrumbSeparator />

                        {
                            locations.map((link, index) => {
                                let href = `/${locations.slice(0, index + 1).join('/')}`
                                let itemLink = link
                                const isLast = index === locations.length - 1;
                                return (
                                    <Fragment key={index}>
                                        <BreadcrumbItem className=' capitalize'  >
                                            {isLast ? (
                                                itemLink
                                            ) : (
                                                <Link href={href} >{itemLink}</Link>
                                            )}
                                        </BreadcrumbItem>
                                        {locations.length !== index + 1 && <BreadcrumbSeparator />}
                                    </Fragment>
                                )
                            })
                        }
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    );
};

export default CustomBreadcrumb;