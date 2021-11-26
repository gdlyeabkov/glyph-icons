<template>
    <form enctype="multipart/form-data" :action="`http://localhost:4000/api/glyphicons/create/?glyphiconname=${this.name}&glyphicontypes=${this.types}`" method="POST" class="formIconsCreator">
        <span class="formIconsCreatorItem formIconsCreatorItemHeader">
            Форма создания иконки
        </span>
        <input placeholder="Введите название иконки" type="text" v-model="name" class="form-control formIconsCreatorItem" />
        <input type="file" accept="image/png" name="myFile" class="form-control formIconsCreatorItem" />
        <select multiple v-model="types" class="form-select formIconsCreatorItem">
            <option value="outlined">Outlined</option>
            <option value="filled">Filled</option>
            <option value="rounded">Rounded</option>
            <option value="sharp">Sharp</option>
            <option value="two_tone">Two tone</option>
        </select>
        <button class="btn btn-primary formIconsCreatorItem" type="submit">
            Создать иконку
        </button>
    </form>
</template>

<script>
export default {
    name: 'IconsCreator',
    data() {
        return {
            name: '',
            types: [
                'filled'
            ]
        }
    }
}
</script>

<style scoped>

    .formIconsCreator {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        background-color: rgb(255, 100, 255);
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        /* height: 50px; */
    }

    .formIconsCreatorItem {
        max-width: 35%;
        margin: 15px 0px;
    }

    .formIconsCreatorItemHeader {
        font-size: 24px;
        font-weight: bolder;
    }

</style>