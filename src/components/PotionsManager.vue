<script setup>
import { getPotions, createPotion, deletePotion } from '../api/potions';


</script>

<script>
export default {
    name: "PotionsManager",
    data() {
        return {
            potions: [],
            newPotion: {
                name: "",
                effect: "",
                isDangerous: false,
            },
        };
    },
    methods: {
        async loadPotions() {
            this.potions = await getPotions();
        },
        async postPotion(potion) {
            await createPotion(potion);
        },
        async submitPotion() {
            await this.postPotion(this.newPotion);
            await this.loadPotions();
        },
        async removePotion(id) {
            await deletePotion();
            await this.loadPotions();
        },
        selectPotion(id, name, effetc, isDangerous) {
            this.selectedPotion = {
                id: id,
                name: name,
                effect: effect,
                isDangerous: isDangerous,
            }
        }
    },
    mounted() {
        this.loadPotions();
    }
}
</script>

<template>
    <main class="">
        <form 
        class="flex" @submit.prevent="submitPotion">
            <label for="nev" class="">Név</label>
            <input v-model="newPotion.name" type="text" class="" name="nev">

            <label for="effect" class="">Effektus</label>
            <input v-model="newPotion.effect" type="text" class="" name="effect">

            <label for="dangerous" class="">Veszélyes?</label>
            <input v-model="newPotion.isDangerous" type="checkbox" name="dangerous" class="" id="">

            <button type="submit" @click="submitPotion">Létrehozás</button>
        </form>
        <table class="">
            <thead class="">
                <tr class="">
                    <th class="">Id</th>
                    <th class="">Nev</th>
                    <th class="">Effect</th>
                    <th class="">IsDangerous</th>
                    <th class="">Műveletek</th>
                </tr>
            </thead>
            <tbody class="">
                <tr class="" v-for="potion in potions" :key="potion.id">
                    <td class="">{{ potion.id }}</td>
                    <td class="">{{ potion.name }}</td>
                    <td class="">{{ potion.effect }}</td>
                    <td class="">{{ potion.isDangerous }}</td>
                    <td class=""><button type="button" @click="removePotion(potion.id)">Törlés</button> <button type="button" @click="updatePotion()">Frissítés</button></td>
                    
                </tr>
            </tbody>
        </table>
    </main>
</template>