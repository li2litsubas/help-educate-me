<template>
    <div>
        howdy, this is the demo component
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello this is a message defined in data object"
        }
    }
}
</script>