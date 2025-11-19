import { useEffect, useState } from 'react';
import postApiClient from '../../services/post_api_client';
import DataTable from '../common/DataTable';
import LoaderAnimation from "../common/LoaderAnimation";

const AjaxComponent = () => {
    const [cState, setCState] = useState({
        data: [],
        message: "Loading data, please wait...",
        flag: false
    });

    // useEffect(() => {
    //     postApiClient.getAllPosts().then(data => {
    //         setCState({
    //             data: data,
    //             message: "",
    //             flag: true
    //         });
    //     }).catch(eMsg => {
    //         setCState({
    //             message: eMsg,
    //             flag: true
    //         });
    //     });
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await postApiClient.getAllPostsAsync();
                setCState({
                    data: data,
                    message: "",
                    flag: true
                });
            } catch (eMsg) {
                setCState({
                    message: eMsg,
                    flag: true
                });
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="row mt-5">
                <h4 className="text-warning text-center text-uppercase font-weight-bold">{cState.message}</h4>
            </div>

            {
                !cState.flag
                    ? <LoaderAnimation />
                    : (<DataTable items={cState.data}>
                        <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                    </DataTable>)
            }
        </>
    );
};

export default AjaxComponent;