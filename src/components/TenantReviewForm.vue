<script setup>
import InlineRadio from '@comp/InlineRadio.vue'
import InlineInput from '@comp/InlineInput.vue'

const emit = defineEmits(['response'])

function formOnSubmit(e) {
    let formData = new FormData(e.target)
    formData = Object.fromEntries(formData)

    emit('response', formData)

    // https://stackoverflow.com/a/58239634
    e.target.reset()
}

function clear_form() {
    document.getElementById("review_form").reset();
}

</script>

<template>
    <div class="card my-4">
        <div class="card-body">
            <h5 class="card-title mb-2">Submit a Review</h5>

            <form @submit.prevent="formOnSubmit" id="review_form">
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" name="author" class="form-control" placeholder="Enter Your Name">
                            <label for="floatingInput">Enter Your Name</label>
                        </div>

                        <div class="form-floating">
                            <textarea rows="6" name="notes" style="height:100%;" class="form-control"
                                placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                    </div>
                    <div class="row col">
                        <div class="col">
                            <InlineRadio :label="`Responsiveness`" :internal="`timeliness_responsiveness`" />
                            <InlineRadio :label="`Friendliness`" :internal="`friendliness`" />
                            <InlineRadio :label="`Cleanliness`" :internal="`cleanliness`" />
                            <div class="mt-3">
                                <button type="submit" class="btn btn-primary me-2">Submit</button>
                                <button @click.prevent="clear_form" class="btn btn-outline-danger">Clear</button>
                            </div>
                        </div>
                        <div class="col">
                            <InlineRadio :label="`Communication`" :internal="`communication`" />
                            <InlineRadio :label="`Property Returned Condition`" :internal="`property_condition`" />
                            <InlineInput :label="`Number of Reports`" :internal="`reports`" />
                        </div>

                    </div>
                </div>
            </form>

        </div>
    </div>
</template>