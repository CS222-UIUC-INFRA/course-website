import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarComponent.module.css";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'

const formatPictureUrl = (url) => {
    let entry_id = url.split('/')[5];
    console.log(entry_id);
    entry_id = "1_m2oon9t3"
    let res = `https://cfvod.kaltura.com/p/1329972/sp/132997200/thumbnail/entry_id/${entry_id}/width/478/height/269/type/3/quality/100/vid_slice/1/vid_slices/16`;

    return res;
}

function CalendarCard({ data }) {


    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <a href={data.Recording}>
                <Image
                    src={formatPictureUrl(data.Recording)}
                    alt='Media Place Preview'
                />
            </a>

            <Stack>
                <CardBody>
                    <Heading pt='2' size='xs' textTransform='uppercase'>
                        {data.Date}
                    </Heading>

                    <Heading size='lg'>{data.LectureContent}</Heading>

                </CardBody>

                <CardFooter>
                    <a href={data.Recording}>
                        <Button className="m-2" variant='solid' colorScheme='blue'>
                            Watch Recording Now
                        </Button>
                    </a>
                    

                    {Object.entries(data.Appendix).map(([label, link], index) => (
                        <a href={link}>
                            <Button className="m-2" variant='outline' colorScheme='blue' key={index}>
                                See {label}
                            </Button>
                        </a>

                    )
                    )}

                </CardFooter>
            </Stack>
        </Card>
    )
}

export default function CalendarComponent({ calendarJson }) {
    return (
        // This is how you use module scoped CSS (use this method only if TailwindCSS isn't able to handle the usecase)
        <div className={styles.parent}>
            {/* This is how you use TailwindCSS */}
            {
                calendarJson.Content.map((data, index) => (
                    <CalendarCard key={index} data={data} />
                ))
            }
        </div>
    );
}

CalendarComponent.propTypes = {
    calendarJson: PropTypes.object.isRequired,
};
