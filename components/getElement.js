const getElement = (select) => {
    const element = document.querySelector(select);
    if(element) return element;
    throw new Error("element does not selected");
};

export default getElement;