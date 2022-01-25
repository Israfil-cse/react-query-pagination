import React from 'react';
import { useQuery} from 'react-query';
import axios from 'axios';
import { toast } from '@chakra-ui/toast';
import { Spinner } from '@chakra-ui/spinner';
import { Grid } from '@chakra-ui/layout';
import { useParams, useHistory } from 'react-router-dom';
import DisplayBlogs from '../../Components/DisplayBlogs/DisplayBlogs';

const Blogs = () => {

    const { id } = useParams();
    const history = useHistory();
    const pageId = parseInt(id);

    const fetchPosts = async (id) => {
        try {
            const { data } = await axios.get(`https://gorest.co.in/public/v1/posts?page=${pageId}`);
            return data;

        } catch (error) {
            throw error('Unable to fetch posts ')
        }
    }

    const { data, isLoading } = useQuery(
        ['posts', pageId],
        
        () => fetchPosts(pageId),

        {
            keepPreviousData: true,
            onError: (error) => {
                toast({ status: 'error', title: error.message })
            }
        }
    )

const handlePrevBtn = () => {
    if (pageId > 0 + 1) {
        history.push(`/${pageId - 1}`)
    }
}


    return (
        <div className="mt-2">
            {

                isLoading ? <Grid placeItems="center" ><Spinner /></Grid>
                    :
                    <>

                        <div class="ms-3 d-flex justify-content-between">
                            <button onClick={handlePrevBtn} class="btn btn-danger">prev</button>
                            <span>current page:{pageId} </span>
                            <button onClick={() => history.push(`/${pageId + 1}`)} class="btn btn-primary">Next</button>
                        </div>

                        {
                            data.data.map(data => <DisplayBlogs data={data}/>)
                        }

                    </>

            }
        </div>
    );
};

export default Blogs;