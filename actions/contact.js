import api from "../lib/api";

export const sendContactMessage = async (contactData) => {
    const { data } = await api.post("/user/contact-us", contactData);
    return data;
};
