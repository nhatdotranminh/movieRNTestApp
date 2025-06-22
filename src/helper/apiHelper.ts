

export const generateParams = (params: Record<string, string | number | any>): string => {
    const mappedParams = Object.entries(params)
        .map(entry => `${entry[0]}=${entry[1]}`);
    return mappedParams.join('&');
};
