import toast from "react-hot-toast"

const AxiosToastError = (error) => {
    error.response?.data?.message.map(
        (msg) => toast.error(msg)
    )
}

export default AxiosToastError