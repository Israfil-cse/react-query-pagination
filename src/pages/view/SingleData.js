import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { toast } from '@chakra-ui/toast';
import { useParams } from 'react-router-dom';
import { Grid } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import DisplaySingleData from '../../Components/SingleData/DisplaySingleData';


const SingleData = () => {

    const { id } = useParams();

    const fetchPost = async (id) => {
        try {
            const { data } = await axios.get(`https://gorest.co.in/public/v1/posts/${id}`);
            return data;

        } catch (error) {
            throw error('Unable to fetch requst ')
        }
    }

    const { data, isLoading } = useQuery(
        ['post', id],

        () => fetchPost(id),

        {
            onError: (error) => {
                toast({ status: 'error', title: error.message })
            }
        }
    )

    console.log(data?.data);




    return (
        <div className="mt-2">
            {

                isLoading ? <Grid placeItems="center" ><Spinner /></Grid>
                    :
                    <DisplaySingleData
                    data={data?.data}

                    />

            }
        </div>
    );
};

export default SingleData;