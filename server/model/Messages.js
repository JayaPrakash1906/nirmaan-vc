const SendMessageModel = async() => {
    return new Promise((reject, resolve) => {
        resolve({data: "data sent."})
    })
}
const ViewMessageModel = () => {
    return new Promise((reject, resolve) => {
        resolve({data: "data viewed"})
    })
}
module.exports = {SendMessageModel, ViewMessageModel}  