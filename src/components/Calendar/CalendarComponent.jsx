import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarComponent.module.css";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'

const formatPictureUrl = (url) => {
    let entry_id = url.split('/')[5];
    let res = `https://cfvod.kaltura.com/p/1329972/sp/132997200/thumbnail/entry_id/${entry_id}/width/478/height/269/type/3/quality/100/vid_slice/1/vid_slices/16`;

    return res;
}

function CalendarCard({ data }) {


    return (
        <Card
            className="h-64"
            direction='row'
            overflow='hidden'
            variant='outline'
        >
            <a href={data.Recording} className="h-full w-1/3 border">
                <img
                    className="h-full w-full object-cover"
                    src={formatPictureUrl(data.Recording)}
                    alt='Lecture Image'
                />
            </a>



            <CardBody className="h-full w-2/3 flex flex-col justify-between">

                <div className="flex flex-col gap-2">
                    <Heading pt='2' size='sm'>
                        {data.Date}
                    </Heading>

                    <Heading size='lg'>{data.LectureContent}</Heading>
                </div>

                <div
                    className="flex flex-col gap-2"
                >
                    <a href={data.Recording}>
                        <Button variant='solid' colorScheme='blue' >
                            Watch Recording
                        </Button>
                    </a>


                    {Object.entries(data.Appendix).map(([label, link], index) => (
                        <a href={link}>
                            <Button variant='outline' colorScheme='blue' key={index}>
                                {label}
                            </Button>
                        </a>

                    )
                    )}

                </div>

            </CardBody>



        </Card>
    )
}

export default function CalendarComponent({ calendarJson }) {
    return (
        // This is how you use module scoped CSS (use this method only if TailwindCSS isn't able to handle the usecase)
        <div className={styles.container}>
            <div className="flex flex-col gap-4 p-20">
                {/* This is how you use TailwindCSS */}
                {
                    calendarJson.Content.map((data, index) => (
                        <CalendarCard className="m-20" key={index} data={data} />
                    ))
                }
            </div>
        </div>
    );
}

CalendarComponent.propTypes = {
    calendarJson: PropTypes.object.isRequired,
};
