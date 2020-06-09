const commonHeaders = {

}

const fetchRequest = (
    url: string,
    options?: any
) => {
    const {
        method = "GET",
        headers = {},
        payload,
        onSuccess,
        onFailure,
    } = options || {};

    const requestOptions = {
        method,
        headers: { ...commonHeaders, ...headers },
        body: payload && JSON.stringify(payload)
    }

    fetch(url, requestOptions)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                response.json()
                    .then(data => { onSuccess && onSuccess(data) })
                    .catch(error => { onFailure && onFailure(error) })
            } else {
                onFailure && onFailure("Something went wrong!!");
            }
        }
        ).catch(error => {
            onFailure && onFailure(error);
        });
}

export default fetchRequest;