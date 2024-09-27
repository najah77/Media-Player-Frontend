import { server_url } from "./server_url";
import { commonAPI } from "./commonAPI"

//upload a video

export const uploadVideoAPI = async(video) =>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

//get all video

export const getAllVideoAPI = async() => {
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

//get a video

export const getAVideo = async(id) => {
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}


//delete a video
export const deleteVideo = async(id) => {
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}


//add a history

export const addHistoryAPI = async(video) =>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

//get History

export const getHistoryAPI = async() =>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

//delete a history

export const deleteHistoryAPI = async(id) =>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

//add Category

export const addCategoryAPI = async(category) =>{
    return await commonAPI("POST",`${server_url}/category`,category)
}

//get Category

export const getCategoryAPI = async() =>{
    return await commonAPI("GET",`${server_url}/category`,'')
}
//delete Category

export const deletetCategoryAPI = async(id) =>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

//updtae category

export const updateCategoryAPI = async(id,categoryDetails) => {
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}