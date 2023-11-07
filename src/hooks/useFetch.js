import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState()
    const [isLoading, setIsloading] = useState(true)
    const [hasError, setHasError] = useState(false)


    const getApi = () => {
        setIsloading(true)

        axios.get(url)
        .then(res => {
            setInfoApi(res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log(err)
            setHasError(true)
        })
        .finally(() => setIsloading(false))
    }

    return [ infoApi, getApi, isLoading, hasError]

}

export default useFetch