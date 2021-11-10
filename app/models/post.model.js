module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            body: String,
            published: Boolean,
        },
        {
            timestamp : true
        }
    )

    schema.method("toJson", function(){
        const{__v, __id, ...object} = this.toObject()
        object.id = __id
        return object
    })

    const Post = mongoose.model("posts", schema)
    return Post
}