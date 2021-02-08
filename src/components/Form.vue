<template>
    <div class="container">
        <h1>Post to DB</h1>
        
        <div class="post-to-db">
            <form @submit="postData" method="post">
                <input
                    type="text"
                    name="title"
                    required
                    id="titleInput"
                    placeholder="Title of the post"
                    v-model="posts.title"
                />
                <input
                    type="text"
                    name="desc"
                    required
                    id="descInput"
                    placeholder="Description of the post"
                    v-model="posts.desc"
                />
                <input
                    type="submit"
                    value="Submit to DB"
                    class="submit-button"
                />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: {
                title: null,
                desc: null,
            },
        };
    },
    methods: {
        postData(e){
            this.axios.post("http://localhost:3000/api/posts", this.posts);
            e.preventDefault();
        }
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    margin: 0;

    //flex
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: var(--text-primary);
    }
    .post-to-db {
        display: flex;
        justify-content: center;
        input {
            margin: 0 8px;
            border: none;
            background: none;
            color: var(--text-secondary);
        }
        .submit-button {
            background-color: #8ec5fc;
            padding: 12px;
            border-radius: 8px;
        }
        input::placeholder {
            color: var(--text-secondary);
        }
        input:focus {
            outline: none;
        }
    }
    .get-from-db {
        display: flex;
        justify-content: center;
    }
}
</style>

//let fetchedData =
fetch("http://localhost:3000/api/posts").then(data=>{console.log(data.json())})
