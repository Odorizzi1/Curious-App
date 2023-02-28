import axios from "axios"

export function list() {
    axios.get('https://curiouscat.live/api/v2.1/profile?username=zanfranceschi').then(res => {
        console.log(res, "result")
    }
    )
}