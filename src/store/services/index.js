import React from 'react'
import axios from 'axios'

export const services = {
    getImages: (product) => {
        const params = {
            key:"AIzaSyCrri-4dLNrmL_ID1toycDemuMybVNtlLE",
            cx:"009461921351113667066:2sivxhh3slp",
            searchType:"image",
            lr:"lang_pt",
            num:1,
            q: product,
        }
        return axios.get('https://www.googleapis.com/customsearch/v1', { params })
        .then(resp => resp.data.items[0].link)        
        .catch(err => err)
    }
}
