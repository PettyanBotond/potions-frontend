const API_URL = "/api/potions";

const getPotions = async () => {
    const response = await fetch(API_URL);
    return response.json();
};
const createPotion = async (potion) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(potion),
    });
    console.log(response.json());
    return response.json();
};
const deletePotion = async (id) => {
    const response = await fetch(API_URL + "/" + id, {
        method: "DELETE",
    });
    return response.json();
};
const selectPotion = async (id) => {
    
}

export { getPotions, createPotion, deletePotion };