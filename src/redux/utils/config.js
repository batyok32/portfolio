export const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const authConfig = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
    },
};

export const multipartConfig = {
    headers: {
        "Content-Type": "multipart/form-data",
    },
};
